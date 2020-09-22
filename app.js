/**
 * 
 */

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

// Capturar el comando
let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        /** listar tareas */
        for (let tarea of listado) {
            console.log('======================'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }
        break;
    case 'actualizar':
        let value = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(value);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}