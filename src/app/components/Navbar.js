import React from "react";
import Image from "next/image";
import "@/styles/navbar.css";
import "tailwindcss/tailwind.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="flex items-center justify-center">
                <div className="profile flex items-center">
                    <span className="mx-4 font-bold">Conjunto Vacio</span>
                    <span className="mx-4 font-bold">Sobre nosotros</span>
                    <span className="mx-4 font-bold">Agua Clara</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
