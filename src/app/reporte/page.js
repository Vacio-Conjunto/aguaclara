"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import FormularioReporte from "@/app/components/FormularioReporte";
import "tailwindcss/tailwind.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import MapComponent from '../components/MapComponent';
import 'leaflet/dist/leaflet.css';

function Page() {
    const [numeroDiasSinServicio, setNumeroDiasSinServicio] = useState();
    const [diasDeCorte, setDiasDeCorte] = useState();
    const [codigoPostal, setCodigoPostal] = useState();
    const [coordenadas, setCoordenadas] = useState();
    const [isSubmit, setIsSubmit] = useState(true)

    const serverDirectory = process.env.NEXT_PUBLIC_SERVER_DIRECTORY;

    console.log("coordenadas =>", coordenadas)

    useEffect(() => {
        axios.get('http://' + serverDirectory + ':3000/api/getCoordenadas', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setCoordenadas(response.data)
            })
    }, [isSubmit])

    // const handleRefresh = () => {
    //     axios.get('http://' + serverDirectory + ':3000/api/getCoordenadas', {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(response => {
    //             setCoordenadas(response.data)
    //         })
    // };

    const handleSubmite = (e) => {
        //TODO: Agregar la dirección del servidor (localhost o IP) en el archivo .env
        const serverDirectory = process.env.NEXT_PUBLIC_SERVER_DIRECTORY;
        console.log(serverDirectory)
        e.preventDefault();

        const endpointUrl = 'http://' + serverDirectory + ':3000/api/getUbicacion?codigoPostal=' + codigoPostal;

        axios.get(endpointUrl)
            .then(response => {
                console.log(response.data.latitud)
                const data = {
                    numeroDiasSinServicio: parseInt(numeroDiasSinServicio, 10), // Convert to an integer
                    diasDeCorte: diasDeCorte,
                    codigoPostal: parseInt(codigoPostal, 10), // Convert to an integer
                    latitud: response.data.latitud,
                    longitud: response.data.longitud
                };

                axios.post('http://' + serverDirectory + ':3000/api/submitReporteAgua', data, {
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
                        setIsSubmit(!isSubmit)

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
                        {coordenadas ? (< div className="bg-gray-300 rounded-lg" style={{ minHeight: '600px', marginTop: '1rem', marginBottom: '2rem', marginRight: '1rem' }}>
                            <div style={{ height: '100%', width: '100%' }}>
                                <MapComponent key="mapita"
                                    coordenadas={coordenadas} />
                            </div>
                        </div>) : (<></>)}

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Page;
