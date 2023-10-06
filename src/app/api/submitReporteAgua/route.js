import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
    console.log("entre al controller!")
    try {
        const { numeroDiasSinServicio, diasDeCorte, codigoPostal } = await request.json();
        const newEvaluation = await prisma.reportes.create({
            data: {
                tiempoSinServicio: numeroDiasSinServicio,
                diaDeCorte: JSON.stringify(diasDeCorte),
                codigoPostal: codigoPostal
            }

        });
        return NextResponse.json({ "Message": "Reporte guardado con exito" });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ "Error": "Error al guardar reporte" });
    } finally {
        await prisma.$disconnect();
    }
}