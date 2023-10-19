"use client";
import React, {useState} from "react";
import Navbar from "@/app/components/Navbar";
import FormularioReporte from "@/app/components/FormularioReporte";

// import "@/styles/pages/docentes_page.css";
import "tailwindcss/tailwind.css";

function Page() {
    const [numeroDiasSinServicio, setNumeroDiasSinServicio] = useState(0);
    const [diasDeCorte, setDiasDeCorte] = useState();
    const [codigoPostal, setCodigoPostal] = useState(0);

    console.log("dias sin servicio => ", numeroDiasSinServicio)
    console.log("dias de corte => ", diasDeCorte)
    console.log("codigo postal => ", codigoPostal)

    const handleSubmite = (e) => {

        e.preventDefault();
        console.log("hola")
        //var auxDiasDeCorte = diasDeCorte.map(item => item.name);
        //console.log("aux dias de corte ", auxDiasDeCorte)

        const data = JSON.stringify({
            "numeroDiasSinServicio": parseInt(numeroDiasSinServicio, 10),// Convert to an integer
            "diasDeCorte": diasDeCorte,
            "codigoPostal": parseInt(codigoPostal, 10) // Convert to an integer
        });

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        };

        fetch('http://localhost:3000/api/submitReporteAgua', config)
            .then(res => res.json())
            .catch(error => console.log("Error cretating evaluation ", error))
    }

    return (
        <div className="flex h-screen container">
            <div className="flex-grow flex">
                <Navbar />
                <div className="flex-grow">
                    <div className="grid grid-flow-col grid-rows-1 gap-5 p-4 pt-24 h-[100%]">
                        <div className="pt-24">
                            <span className="text-3xl pl-52">
                                Reporta tus fallas en el servicio de agua
                            </span>
                            <br />
                            <span className="pl-52">
                                y colabora para visibilizar el tamaño real de esta problematica.
                            </span>
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

                        <div className="bg-gray-300 col-span-4 row-span-2 p-2 rounded-lg">
                            <comment> Mapa de reportes</comment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
