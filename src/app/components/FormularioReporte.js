import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

function ReportForm(props) {

    const dias = [
        { name: 'Lunes' },
        { name: 'Martes' },
        { name: 'Miercoles' },
        { name: 'Jueves' },
        { name: 'Viernes' },
        { name: 'Sabado' },
        { name: 'Domingo' }
    ];

    return (
        <div className="pt-8">
            <form onSubmit={props.handleSubmite} className="max-w-md max-h-96 mx-auto p-4 border rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="codigoPostal" className="block font-bold mb-1">
                        Codigo Postal:
                    </label>
                    <input
                        type="text"
                        id="codigoPostal"
                        value={props.codigoPostal}
                        onChange={(e) => props.setCodigoPostal(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="numeroDiasSinServicio" className="block font-bold mb-1">
                        Numero de dias sin servicio:
                    </label>
                    <input
                        type="text"
                        id="numeroDiasSinServicio"
                        value={props.numeroDiasSinServicio}
                        onChange={(e) => props.setNumeroDiasSinServicio(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="diasDeCorte" className="block font-bold mb-1">
                        Dias de corte (dias en que la cortan comunmente):
                    </label>
                    <div className="card flex justify-content-center">
                        <MultiSelect
                            value={props.diasDeCorte}
                            onChange={(e) => props.setDiasDeCorte(e.value)}
                            options={dias}
                            optionLabel="name"
                            maxSelectedLabels={7}
                            className="w-full md:w-20rem" />
                    </div>

                </div>
                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Subir reporte
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReportForm;
