import React, { useState } from "react";

function ReportForm() {
    const [numeroDiasSinServicio, setNumeroDiasSinServicio] = useState("");
    const [diasDeCorte, setDiasDeCorte] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can perform actions with the form data here
        console.log("Numero de dias sin servicio:", numeroDiasSinServicio);
        console.log("Dias de corte:", diasDeCorte);
        console.log("Codigo Postal:", codigoPostal);

        // Clear the form fields after submission (optional)
        setNumeroDiasSinServicio("");
        setDiasDeCorte("");
        setCodigoPostal("");
    };

    return (
        <form className="max-w-md max-h-96 mx-auto p-4 border rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="numeroDiasSinServicio" className="block font-bold mb-1">
                    Numero de dias sin servicio:
                </label>
                <input
                    type="text"
                    id="numeroDiasSinServicio"
                    value={numeroDiasSinServicio}
                    onChange={(e) => setNumeroDiasSinServicio(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="diasDeCorte" className="block font-bold mb-1">
                    Dias de corte (dias en que la cortan comunmente):
                </label>
                <input
                    type="text"
                    id="diasDeCorte"
                    value={diasDeCorte}
                    onChange={(e) => setDiasDeCorte(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="codigoPostal" className="block font-bold mb-1">
                    Codigo Postal:
                </label>
                <input
                    type="text"
                    id="codigoPostal"
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Subir reporte
                </button>
            </div>
        </form>
    );
}

export default ReportForm;
