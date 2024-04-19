document.getElementById("reto1-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let destino = document.getElementById("destino").value;
    let diasDuracionViaje = parseInt(document.getElementById("duracion").value);
    const presupuestoInicial = parseFloat(document.getElementById("presupuesto").value);

    const calcularPresupuestoRestante = (costoTotal) => {
        return presupuestoInicial - (costoTotal.costoAlojamiento + costoTotal.costoTransporte + costoTotal.costoActividades);
    };

    // Costo estimado del alojamiento, transporte y actividades
    const costoTotal = {
        costoAlojamiento: 70000,
        costoTransporte: 40000,
        costoActividades: 50000
    };

    let presupuestoRestante = calcularPresupuestoRestante(costoTotal);

    console.log(`Julian viajará a ${destino} por ${diasDuracionViaje} días.`);
    console.log(`Su presupuesto inicial es de ${presupuestoInicial} pesos.`);
    console.log(`Después de planificar su viaje, le quedan ${presupuestoRestante} pesos.`);

    // Dentro del evento submit del formulario
    fetch("http://localhost:4000/viajes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            destino: destino,
            duracion: diasDuracionViaje,
            presupuestoInicial: presupuestoInicial,
            presupuestoRestante: presupuestoRestante
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
});
