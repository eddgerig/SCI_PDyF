const { app, BrowserWindow, ipcMain } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: true,
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'dist/sci/browser/index.html'));

    // Inicializar base de datos
    //const dbPath = path.join(__dirname, 'database.db');
    const dbPath = path.join(app.getPath('userData'), 'database.db');
    db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Conectado a la base de datos SQLite.');
    });

    
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

    // Crear la tabla
    db.run(`CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        cedula INTEGER NOT NULL,
        correo TEXT NOT NULL ,
        usuario TEXT NOT NULL UNIQUE,
        contrasena TEXT NOT NULL,
        rol Integer NOT NULL
    )`);
    
});

// Manejar la inserción de usuarios
ipcMain.on('insertar-usuario', (event, nombre,apellido,ci, email, user, password, rol) => {
    console.log('insertar-usuario', nombre,apellido,ci, email, user, password, rol)
    db.run(`INSERT INTO usuario (nombre,apellido,cedula, correo, usuario, contrasena, rol) VALUES (?, ?, ?, ?,?, ?,?)`, [nombre,apellido,ci, email, user, password, rol], function(err) {
        if (err) {
            event.reply('usuario-insertado', { error: err.message });
        } else {
            event.reply('usuario-insertado', { id: this.lastID });
        }
    });
});

// Manejar la consulta de usuarios
ipcMain.on('consultar-usuarios', (event) => {
    db.all(`SELECT * FROM usuario`, [], (err, rows) => {
        if (err) {
            event.reply('usuarios-consultados', { error: err.message });
        } else {
            console.log('usuarios-consultados', rows);
            event.reply('usuarios-consultados', { usuarios: rows });
        }
    });
});
// Buscar usuario por username
ipcMain.on('buscar-user', (event, user) => {
    db.all(`SELECT * FROM usuario WHERE usuario =  ?`, [user], (err, rows) => {
        if (err) {
            event.reply('usuario-buscado', { error: err.message });
        } else {
            console.log('usuario-buscado');
            event.reply('usuario-buscado', { success: true, rows });
        }
    });
});
ipcMain.on('login', (event, user, pass) => {
    db.all(`SELECT * FROM usuario WHERE usuario =  ? AND  contrasena = ?`, [user, pass], (err, rows) => {
        if (err) {
            event.reply('login_valid', { error: err.message });
        } else {
            console.log('login_valid');
            event.reply('login_valid', { success: true, rows });
        }
    });
});



ipcMain.on('eliminar-usuario', (event, id) => {
    db.run(`DELETE FROM usuario WHERE id = ?`, [id], function(err) {
        if (err) {
            event.reply('usuario-eliminado', { error: err.message });
        } else {
            event.reply('usuario-eliminado', { success: true, id });
        }
    });
});

ipcMain.on('actualizar-usuario', (event, { id, nombre, email }) => {
    db.run(`UPDATE usuario SET nombre = ?, email = ? WHERE id = ?`, [nombre, email, id], function(err) {
        if (err) {
            event.reply('usuario-actualizado', { error: err.message });
        } else {
            event.reply('usuario-actualizado', { success: true, id, nombre, email });
        }
    });
});