//Section 1

//reto1
// let destino = prompt("Escoge el paìs: ");
// let diasDuracionViaje = prompt("Escoge los dias de tu viaje: ");
// const presupuestoInicial = prompt("Cual es tu presupuesto inicial en numeros: ");

// const calcularPresupuestoRestante = (costoTotal) => {
//     return presupuestoInicial - (costoTotal.costoAlojamiento + costoTotal.costoTransporte + costoTotal.costoActividades);
// };

// // Costo estimado del alojamiento, transporte y actividades
// const costoTotal = {
//     costoAlojamiento : 70000,
//     costoTransporte : 40000,
//     costoActividades : 50000
// };

// let presupuestoRestante = calcularPresupuestoRestante(costoTotal);

// console.log(`Julian viajará a ${destino} por ${diasDuracionViaje} días.`);
// console.log(`Su presupuesto inicial es de ${presupuestoInicial} pesos.`);
// console.log(`Después de planificar su viaje, le quedan ${presupuestoRestante} pesos.`);


//reto2
// Lista de souvenirs
// let souvenirs = [];

// // Preguntas para el usuario para almacenarlas
// let nombre = prompt('Ingrese el nombre del souvenir:');
// let costo = prompt('Ingrese el costo del souvenir:');
// let cantidad = prompt('Ingrese la cantidad del producto:')
// let disponible = confirm('¿El souvenir está disponible?');

// // Agregar souvenirs a la lista de souvenirs
// agregarSouvenir({ nombre, costo, cantidad, disponible });

// // Verificar tipos de datos de cada souvenir
// souvenirs.forEach((souvenir) => {
//     verificarTiposDeDatos(souvenir);
// });

// // Función para verificar los tipos de datos de cada variable
// function verificarTiposDeDatos(souvenir) {
//     if (typeof souvenir.nombre !== 'string') {
//         console.log('El nombre del souvenir debe ser una cadena de texto.');
//         return false;
//     }

//     if (typeof souvenir.costo == 'number') {
//         console.log('El costo del souvenir debe ser un número.');
//         return false;
//     }

//     if (typeof souvenir.cantidad == 'number') {
//         console.log('La cantidad del souvenir debe ser un número.');
//         return false;
//     }

//     if (typeof souvenir.disponible !== 'boolean') {
//         console.log('La disponibilidad del souvenir debe ser un valor booleano.');
//         return false;
//     }

//     return true;
// }

// // Función para agregar un souvenir a la lista
// function agregarSouvenir(souvenir) {
//     if (verificarTiposDeDatos(souvenir)) {
//         souvenirs.push(souvenir);
//         console.log('Souvenir agregado correctamente.');
//         console.log(souvenir)
//     } else {
//         console.log('No se pudo agregar el souvenir debido a un error en los tipos de datos.');
//     }
// }


//reto3
const presupuestoInicial = 800;
const costoAlojamiento = 400;
const costoTransporte = 200;
const costoComida = 150;

const presupuestoRestante = presupuestoInicial - (costoAlojamiento + costoTransporte + costoComida);

const umbralPresupuesto = 50; // Umbral mínimo para gastos adicionales

// Agrega estas variables para almacenar la información sobre los artículos extra
const articulosExtra = [
    { nombre: "artículo 1", costo: 50 },
    { nombre: "artículo 2", costo: 30 },
    { nombre: "artículo 3", costo: 100 },
];

// Agrega esta función para determinar la opción más económica que se ajusta al presupuesto
function opcionMasEconomica(articulos, presupuesto) {
    let opcionMasEconomica = null;
    let costoMenor = Infinity;

    articulos.forEach((articulo) => {
        if (articulo.costo <= presupuesto && articulo.costo < costoMenor) {
            opcionMasEconomica = articulo;
            costoMenor = articulo.costo;
        }
    });

    return opcionMasEconomica;
}

if (presupuestoRestante > umbralPresupuesto) {
    console.log(`Después de cubrir los gastos básicos, Julian tiene ${presupuestoRestante} USD sobrantes.`);
    console.log("¡Julian puede permitirse un artículo extra en su equipaje!");

    // Agrega este ciclo para evaluar cada artículo extra
    articulosExtra.forEach((articulo) => {
        if (articulo.costo <= presupuestoRestante) {
            console.log(`Es posible comprar ${articulo.nombre} ya que cuesta ${articulo.costo} USD.`);
        }
    });

    // Agrega esta línea para mostrar la opción más económica
    const opcionMasEconomica = opcionMasEconomica(articulosExtra, presupuestoRestante);
    if (opcionMasEconomica) {
        console.log(`La opción más económica es ${opcionMasEconomica.nombre} ya que cuesta ${opcionMasEconomica.costo} USD.`);
    }
} else {
    console.log(`Después de cubrir los gastos básicos, Julian tiene ${presupuestoRestante} USD sobrantes.`);
    console.log("Julian debería evitar gastos adicionales para no exceder su presupuesto.");
}
