const argv = require('yargs')
    .command('crear', 'Permite crear una tarea', {
        descripcion: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
        completado: { default: false, alias: 'c', desc: 'Define la tarea como completada' }
    })
    .command('listar', 'Permite listar todas las tareas', {})
    .command('actualizar', 'Permite actualizar una tarea', {
        descripcion: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
        completado: { default: true, alias: 'c', desc: 'Define la tarea como completada' }
    })
    .command('borrar', 'Permite borrar una tarea', {
        descripcion: { demand: true, alias: 'd', desc: 'Descripción de la tarea' },
    })
    .help()
    .argv;

module.exports = {
    argv
}