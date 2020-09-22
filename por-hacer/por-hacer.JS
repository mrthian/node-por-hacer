//  trabajar con archivo
const fs = require('fs');

let listadoTareas = [];

// guardar en el fichero data.json
const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('Fichero guardado con éxito!!');
    });
}

// Cargar fichero data.json
const cargarDB = () => {
    //let fsFile = fs.existsSync('./db/data.json');
    //console.log(fsFile);
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoTareas;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoTareas.push(porHacer);
    guardarDB();
    return porHacer;
}

// actualizar las tareas
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    // buscar en el fichero
    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    /** Opc 1: Yo */
    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

    /** Opc 2: profesor */
    /*
    let nuevoListado = listadoTareas.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (listadoTareas.length === nuevoListado.length) {
        return false
    } else {
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    }*/
}

module.exports = { crear, getListado, actualizar, borrar }