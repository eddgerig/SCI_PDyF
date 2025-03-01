const { contextBridge, ipcRenderer } = require('electron');

console.log("en preload.js");

// Exponer métodos relacionados con usuarios
contextBridge.exposeInMainWorld('myAPI', {
    insertUser: (nombre, apellido, ci, email, user, password, rol) => 
        ipcRenderer.send('insertar-usuario', nombre, apellido, ci, email, user, password, rol),
    eliminarUsuario: (id) => ipcRenderer.send('eliminar-usuario', id),
    buscarUser: (user) => ipcRenderer.send('buscar-user', user),
    login: (user, pass) => ipcRenderer.send('login', user, pass),
    obtenerRol: (user) => ipcRenderer.send('obtener-rol', user),
    actualizarUsuario: (id, nombre, apellido, ci, email, user, password, rol) => 
        ipcRenderer.send('actualizar-usuario', { id, nombre, apellido, ci, email, user, password, rol }),
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, func) => ipcRenderer.on(channel, func),
        once: (channel, func) => ipcRenderer.once(channel, func),
    },
});

// casos de investigación
contextBridge.exposeInMainWorld('caso_inv', {
    insertarCaso_inv: (
        nro_expediente,
        fecha_inicio,
        movil_afectado,
        tipo_caso,
        tipo_irregularidad,
        subtipo_irregularidad,
        objetivo,
        incidencia,
        modus_operandi,
        area_apoyo,
        deteccion,
        diagnostico,
        estado,
        observacion,
        soporte,
        investigador
    ) => ipcRenderer.send('insertar-caso_inv', 
        nro_expediente,
        fecha_inicio,
        movil_afectado,
        tipo_caso,
        tipo_irregularidad,
        subtipo_irregularidad,
        objetivo,
        incidencia,
        modus_operandi,
        area_apoyo,
        deteccion,
        diagnostico,
        estado,
        observacion,
        soporte,
        investigador
    ),
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, func) => ipcRenderer.on(channel, func),
        once: (channel, func) => ipcRenderer.once(channel, func), 
    },
});

// entidades
contextBridge.exposeInMainWorld('entidadesAPI', {
    insertarEntidad: (
        tipo_brecha,
        tipo_proyecto,
        procesos_corregidos,
        procesos_realizados,
        investigadores,
        empresas,
        subtipo_ficha,
        tipo_irregularidad,
        subtipo_irregularidad,
        procedencia_casos
    ) => ipcRenderer.send('insertar-entidad', 
        tipo_brecha,
        tipo_proyecto,
        procesos_corregidos,
        procesos_realizados,
        investigadores,
        empresas,
        subtipo_ficha,
        tipo_irregularidad,
        subtipo_irregularidad,
        procedencia_casos
    ),
    consultarEntidades: () => ipcRenderer.send('consultar-entidades'),
    onEntidadesConsultadas: (callback) => ipcRenderer.on('entidades-consultadas', callback),
    onEntidadInsertada: (callback) => ipcRenderer.on('entidad-insertada', callback),
});