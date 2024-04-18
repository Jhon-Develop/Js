// Section 2

//reto 1
const decideActividadesDiarias = (nivelEnergia, clima, cargaTrabajo) => {
    if (!nivelEnergia || nivelEnergia === 0) {
        console.log("Julian decide tomar un día libre.");
    } else if (nivelEnergia >= 50 && (clima || cargaTrabajo)) {
        console.log("Julian decide salir a correr.");
    } else if (nivelEnergia >= 30 && clima && !cargaTrabajo) {
        console.log("Julian decide trabajar en proyectos personales.");
    } else {
        console.log("Julian decide relajarse en casa.");
    }
};

// Llamada de ejemplo
decideActividadesDiarias(60, true, false);


//reto2
const calculadoraPresupuesto = (presupuestoDiario, costoComida, costoLibro, ahorroMinimoDiario) => {
    const dineroRestante = presupuestoDiario - (costoComida + costoLibro);
    if (dineroRestante >= 0) {
        if (dineroRestante >= ahorroMinimoDiario) {
            console.log("Julian puede permitirse comer fuera y comprar un libro, y todavía alcanzar su objetivo de ahorro.");
        } else {
            console.log("Julian puede permitirse comer fuera y comprar un libro, pero no alcanzará su objetivo de ahorro.");
        }
    } else {
        console.log("Julian no tiene suficiente dinero para cubrir ambos gastos.");
    }
};

// Llamada de ejemplo
calculadoraPresupuesto(50, 20, 15, 10);


//reto3
const decideArticulosEmpacar = (pronosticoClima, espacioMaleta, pesoEquipaje) => {
    if (pronosticoClima === "lluvia") {
        console.log("Julian decide llevar un paraguas.");
    }
    if (espacioMaleta >= 1 && pesoEquipaje <= 20) {
        console.log("Julian decide llevar una cámara.");
    }
    if (espacioMaleta >= 2 && pesoEquipaje <= 18) {
        console.log("Julian decide llevar un libro.");
    }
    if (espacioMaleta >= 3 && pesoEquipaje <= 15) {
        console.log("Julian decide llevar ropa adicional.");
    }
};

// Llamada de ejemplo
decideArticulosEmpacar("lluvia", 2, 16);
