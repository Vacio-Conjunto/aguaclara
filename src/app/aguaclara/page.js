"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import FormularioReporte from "@/app/components/FormularioReporte";


// import "@/styles/pages/docentes_page.css";
import "tailwindcss/tailwind.css";


function Page() {
    return (
        <div className="flex h-screen">
            <div className="flex-grow flex">
                <Navbar />
                <div className="flex-grow">
                    <div className="grid grid-flow-col grid-rows-1 gap-5 p-4 pt-24 h-[100%] content-end">
                        <FormularioReporte />
                        <div className="bg-gray-300 col-span-2 row-span-2 p-2 rounded-lg">
                            Cesar se la pela
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
