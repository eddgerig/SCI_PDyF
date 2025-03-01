const { contextBridge, ipcRenderer } = require('electron');
console.log("en preload.js");
contextBridge.exposeInMainWorld('myAPI', {
    
    insertUser: (nombre,apellido,ci, email,user, password, rol) => ipcRenderer.send('insertar-usuario', nombre,apellido,ci, email, user,password, rol),
    //gettUser: () => ipcRenderer.send('consultar-usuarios'),
    eliminarUsuario: (id) => ipcRenderer.send('eliminar-usuario', id),
    buscarUser: (user) => ipcRenderer.send('buscar-user', user),
    login: (user, pass) => ipcRenderer.send('login', user, pass ),
    obtenerRol:(user)=> ipcRenderer.send('obtener-rol', user ),
    actualizarUsuario: (id, nombre, apellido,ci, email,user, password, rol) => ipcRenderer.send('actualizar-usuario', { id, nombre, apellido,ci, email,user, password, rol }),
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, func) => ipcRenderer.on(channel, func),
        once: (channel, func) => ipcRenderer.once(channel, func), 
    },


        
});

contextBridge.exposeInMainWorld('caso_inv', {
    insertarCaso_inv: (
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
        investigador
    ) => ipcRenderer.send('insertar-caso_inv', 
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
    investigador
        ),
   
    actualizarCasoInv: (id,nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador ) => {
        //console.log("actualizarCasoInv preload", soporte)
        ipcRenderer.send('actualizar-caso_inv', { id,nro_expediente, fecha_inicio,movil_afectado, tipo_caso,tipo_irregularidad, subtipo_irregularidad,objetivo,incidencia, modus_operandi, area_apoyo, deteccion, diagnostico,estado, observacion, soporte,investigador  })
    },
    
    buscarInv: (user) => ipcRenderer.send('buscar-inv', user),
    
    //gettUser: () => ipcRenderer.send('consultar-usuarios'),
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, func) => ipcRenderer.on(channel, func),
        once: (channel, func) => ipcRenderer.once(channel, func), 
    },
});
