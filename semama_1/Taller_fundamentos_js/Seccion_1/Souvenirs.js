        // Obtener la lista de souvenirs almacenados
        async function obtenerSouvenirs() {
            try {
                const response = await fetch('http://localhost:4000/souvenirs');
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de souvenirs');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error al obtener los souvenirs:', error.message);
                return [];
            }
        }

        // Mostrar los souvenirs al usuario
        async function mostrarSouvenirs() {
            const souvenirs = await obtenerSouvenirs();
            if (souvenirs.length === 0) {
                console.log('No hay souvenirs disponibles.');
            } else {
                console.log('Souvenirs disponibles:');
                souvenirs.forEach(souvenir => {
                    if (souvenir.cantidad === 0 && !souvenir.disponible) {
                        console.log(`- ${souvenir.nombre}: Agotado`);
                    } else {
                        console.log(`- ${souvenir.nombre}: $${souvenir.costo} (${souvenir.cantidad} disponibles)`);
                    }
                });
            }
        }

        // Seleccionar un souvenir y actualizar la cantidad disponible
        async function seleccionarSouvenir(nombre, cantidadSeleccionada) {
            try {
                const response = await fetch(`http://localhost:4000/souvenirs/${nombre}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ cantidad: cantidadSeleccionada })
                });
                if (!response.ok) {
                    throw new Error('No se pudo actualizar la cantidad del souvenir');
                }
                console.log(`Se seleccionaron ${cantidadSeleccionada} unidades del souvenir ${nombre}.`);
            } catch (error) {
                console.error('Error al seleccionar el souvenir:', error.message);
            }
        }

        // Agregar un nuevo souvenir
        async function agregarNuevoSouvenir(nombre, costo, cantidad, disponible) {
            try {
                const response = await fetch('http://localhost:4000/souvenirs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombre, costo, cantidad, disponible })
                });
                if (!response.ok) {
                    throw new Error('No se pudo agregar el nuevo souvenir');
                }
                console.log('Nuevo souvenir agregado correctamente.');
            } catch (error) {
                console.error('Error al agregar el nuevo souvenir:', error.message);
            }
        }

        // Manejar el envío del formulario de souvenir
        document.getElementById('souvenir-form').addEventListener('submit', async function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const costo = parseFloat(document.getElementById('costo').value);
            const cantidad = parseInt(document.getElementById('cantidad').value);
            const disponible = document.getElementById('disponible').checked;

            // Agregar el nuevo souvenir
            await agregarNuevoSouvenir(nombre, costo, cantidad, disponible);

            // Mostrar los souvenirs actualizados
            mostrarSouvenirs();
        });

        // Mostrar los souvenirs disponibles
        mostrarSouvenirs();