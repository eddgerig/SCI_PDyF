const { contextBridge, ipcRenderer } = require('electron');
console.log("en preload.js");
contextBridge.exposeInMainWorld('myAPI', {
    
    insertUser: (nombre,apellido,ci, email,user, password, rol) => ipcRenderer.send('insertar-usuario', nombre,apellido,ci, email, user,password, rol),
    //gettUser: () => ipcRenderer.send('consultar-usuarios'),
    eliminarUsuario: (id) => ipcRenderer.send('eliminar-usuario', id),

    actualizarUsuario: (id, nombre, email) => ipcRenderer.send('actualizar-usuario', { id, nombre, email }),
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, func) => ipcRenderer.on(channel, func),
    },
});
