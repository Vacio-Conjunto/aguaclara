"use client";
import React, {useState} from "react";
import Navbar from "@/app/components/Navbar";
import FormularioReporte from "@/app/components/FormularioReporte";
import "tailwindcss/tailwind.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import MapComponent from '../components/MapComponent';
import 'leaflet/dist/leaflet.css';

function Page() {
    const [numeroDiasSinServicio, setNumeroDiasSinServicio] = useState(0);
    const [diasDeCorte, setDiasDeCorte] = useState();
    const [codigoPostal, setCodigoPostal] = useState(0);

    console.log("dias sin servicio => ", numeroDiasSinServicio)
    console.log("dias de corte => ", diasDeCorte)
    console.log("codigo postal => ", codigoPostal)

    const handleSubmite = (e) => {
        //TODO: Agregar la dirección del servidor (localhost o IP) en el archivo .env
        const serverDirectory = env("SERVER_DIRECTORY");
        e.preventDefault();
        //var auxDiasDeCorte = diasDeCorte.map(item => item.name);
        //console.log("aux dias de corte ", auxDiasDeCorte)

        const endpointUrl = 'http://'+serverDirectory+':3000/api/getUbicacion?codigoPostal=' + codigoPostal;

        axios.get(endpointUrl)
            .then(response => {
                const data = {
                    numeroDiasSinServicio: parseInt(numeroDiasSinServicio, 10), // Convert to an integer
                    diasDeCorte: diasDeCorte,
                    codigoPostal: parseInt(codigoPostal, 10) // Convert to an integer
                };

                axios.post('http://'+serverDirectory+'3000/api/submitReporteAgua', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Se ha enviado el reporte con éxito',
                            showConfirmButton: false,
                            timer: 2000 // Cierra automáticamente después de 2 segundos
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Un error ha ocurrido.',
                            text: error.message
                        });
                    });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'No existe el código postal en Nuevo León',
                    text: 'Por favor verifica el código postal ingresado'
                });
            });
    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow flex" style={{ overflowY: 'auto' }}>
                <div className="flex-grow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 pt-12">
                        <div className="md:pt-2">
                            <FormularioReporte
                                numeroDiasSinServicio={numeroDiasSinServicio}
                                setNumeroDiasSinServicio={setNumeroDiasSinServicio}
                                diasDeCorte={diasDeCorte}
                                setDiasDeCorte={setDiasDeCorte}
                                codigoPostal={codigoPostal}
                                setCodigoPostal={setCodigoPostal}
                                handleSubmite={handleSubmite}
                            />
                        </div>
                        <div className="bg-gray-300 rounded-lg" style={{ minHeight: '600px', marginTop: '1rem', marginBottom: '2rem' }}>
                            <div style={{ height: '100%', width: '100%' }}>
                                <MapComponent key="mapita" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
