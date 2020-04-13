const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv._[0]);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green}`))
            .catch(err => console.log(err));
        // console.log('Crear');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(argv);


//let base = 'abs7';