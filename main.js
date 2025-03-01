const { app, BrowserWindow, ipcMain } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: true,
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'dist/sci/browser/index.html'));
    // mainWindow.setMenu(null);

    // Inicializar base de datos
    const dbPath = path.join(__dirname, 'database.db');
    //const dbPath = path.join(app.getPath('userData'), 'database.db');
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

    // Crear la tabla
    db.run(`CREATE TABLE IF NOT EXISTS caso_investigador (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nro_expediente TEXT,
        fecha_inicio TEXT ,
        movil_afectado TEXT ,
        tipo_caso TEXT ,
        tipo_irregularidad TEXT ,
        subtipo_irregularidad TEXT ,
        objetivo TEXT ,
        incidencia TEXT ,
        modus_operandi TEXT ,
        area_apoyo TEXT ,
        deteccion TEXT ,
        diagnostico TEXT ,
        estado TEXT ,
        observacion TEXT ,
        soporte TEXT ,
        investigador INTEGER,
        FOREIGN KEY (investigador) REFERENCES usuario(id)
    )`);

    // Crear la tabla
    db.run(`CREATE TABLE IF NOT EXISTS entidad (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo_brecha TEXT,
        tipo_proy TEXT ,
        proceso_corregido TEXT ,
        proceso_realizado TEXT ,
        investigador INTEGER ,
        empresa TEXT ,
        subtipo_ficha TEXT ,
        tipo_irreg TEXT ,
        subtipo_irreg TEXT ,
        proced_casos TEXT ,
        
        FOREIGN KEY (investigador) REFERENCES usuario(id)
    )`);

    // Crear la tabla
    /*db.run(`CREATE TABLE IF NOT EXISTS avances (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        caso_inv INTEGER,
        fecha TEXT ,
        actividades_realizadas TEXT ,
        personas_involucradas TEXT ,
        monto_exp TEXT ,
        estado TEXT ,
        
        FOREIGN KEY (investigador) REFERENCES usuario(id)
        FOREIGN KEY (caso_inv) REFERENCES caso_investigador(id)
    )`);
    

    // Crear la tabla
    db.run(`CREATE TABLE IF NOT EXISTS cerrar_caso (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        observ TEXT ,
        caso_inv INTEGER,
        conclusion TEXT ,
        recomend TEXT ,
        estado TEXT ,
        
        FOREIGN KEY (investigador) REFERENCES usuario(id)
        FOREIGN KEY (caso_inv) REFERENCES caso_investigador(id)
    )`);
    */
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
// Buscar usuario por username
ipcMain.on('buscar-inv', (event, user) => {
    console.log('inv-buscado ');
    db.all(`SELECT * FROM usuario WHERE rol =  ?`, [0], (err, rows) => {
        if (err) {
            event.reply('inv-buscado', { error: err.message });
        } else {
            console.log('inv-buscado', rows);
            event.reply('inv-buscado', { success: true, usuarios: rows });
        }
    });
});

//Rol del usuario:
ipcMain.on('obtener-rol', (event, user) => {
    db.get(`SELECT rol FROM usuario WHERE usuario = ?`, [user], (err, row) => {
        if (err) {
            console.error(err.message);
            event.reply('rol-obtenido', { error: err.message });
        } else {
            event.reply('rol-obtenido', { error: null, rol: row ? row.rol : null });
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

ipcMain.on('actualizar-usuario', (event, { id, nombre, apellido,ci, email,user, password, rol }) => {
    db.run(`UPDATE usuario SET nombre = ?, apellido = ?, cedula = ?, correo = ?,usuario = ?, contrasena = ?, rol = ? WHERE id = ?`, 
        [nombre, apellido,ci, email,user, password, rol, id], function(err) {
        if (err) {
            event.reply('usuario-actualizado', { error: err.message });
        } else {
            event.reply('usuario-actualizado', { success: true, id, nombre, email });
        }
    });
});





// Manejar la inserción de C.I
ipcMain.on('insertar-caso_inv', (event,
    nro_expediente,
    fecha_inicio  ,
    movil_afectado  ,
    tipo_caso  ,
    tipo_irregularidad  ,
    subtipo_irregularidad  ,
    objetivo  ,
    incidencia  ,
    modus_operandi  ,
    area_apoyo  ,
    deteccion  ,
    diagnostico  ,
    estado  ,
    observacion  ,
    soporte  ,
    investigador ) => {

    console.log('insertar-caso_inv')

    db.run(`INSERT INTO caso_investigador (
    nro_expediente,
    fecha_inicio  ,
    movil_afectado  ,
    tipo_caso  ,
    tipo_irregularidad  ,
    subtipo_irregularidad  ,
    objetivo  ,
    incidencia  ,
    modus_operandi  ,
    area_apoyo  ,
    deteccion  ,
    diagnostico  ,
    estado  ,
    observacion  ,
    soporte  ,
    investigador) VALUES (?, ?, ?, ?,?, ?,?,?, ?, ?, ?,?, ?,?,?,?)`, [
        nro_expediente,
        fecha_inicio  ,
        movil_afectado  ,
        tipo_caso  ,
        tipo_irregularidad  ,
        subtipo_irregularidad  ,
        objetivo  ,
        incidencia  ,
        modus_operandi  ,
        area_apoyo  ,
        deteccion  ,
        diagnostico  ,
        estado  ,
        observacion  ,
        soporte  ,
        investigador], function(err) {
        if (err) {
            event.reply('caso_inv-insertado', { error: err.message });
        } else {
            event.reply('caso_inv-insertado', { id: this.lastID });
        }
    });
});

// Manejar la consulta de C.I
ipcMain.on('consultar-caso_inv', (event) => {
    db.all(`SELECT 
                ci.*,           -- Selecciona todos los campos de caso_investigador
                u.nombre,       -- Selecciona el nombre del investigador (puede ser NULL)
                u.correo        -- Selecciona el email del investigador (puede ser NULL)
            FROM 
                caso_investigador ci
            LEFT JOIN 
                usuario u ON ci.investigador = u.id`, 
    [], (err, rows) => {
        if (err) {
            event.reply('caso_inv-consultados', { error: err.message });
        } else {
            console.log('caso_inv-consultados', rows);
            event.reply('caso_inv-consultados', { data: rows });
        }
    });
});

// Manejar la inserción de usuarios
ipcMain.on('insertar-caso_inv', (event, nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador ) => {
    console.log('insertar-caso_inv', nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador )
    db.run(`INSERT INTO caso_investigador (nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador ) VALUES (?, ?,?, ?,?,?,?,?, ?, ?, ?,?, ?,?,?,?)`, [nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador], function(err) {
        if (err) {
            event.reply('caso_inv-insertado', { error: err.message });
        } else {
            event.reply('caso_inv-insertado', { id: this.lastID });
        }
    });
});

ipcMain.on('actualizar-caso_inv', (event, { id, nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador }) => {
    //console.log('actualizar-caso_inv', nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador )
    db.run(`UPDATE caso_investigador SET nro_expediente = ?, fecha_inicio = ?, movil_afectado = ?, tipo_caso = ?,tipo_irregularidad = ?, subtipo_irregularidad = ?,objetivo = ?,incidencia = ?, modus_operandi = ? , area_apoyo = ? , deteccion = ? , diagnostico = ? , estado = ?, observacion = ?, soporte = ? , investigador = ?    WHERE id = ?`, 
        [nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador , id], function(err) {
        if (err) {
            event.reply('caso_inv-actualizado', { error: err.message });
        } else {
            event.reply('caso_inv-actualizado', { success: true, id});
        }
    });
});
