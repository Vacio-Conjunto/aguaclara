import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
    console.log("entre al controller!")
    try {
        const {numeroDiasSinServicio, diasDeCorte, codigoPostal} = await request.json();

        let diasCorte = [];

        if (Array.isArray(diasDeCorte)) {
            diasCorte = diasDeCorte.map(dayObj => dayObj.name);
        }

        const result = { diasCorte };

        const newEvaluation = await prisma.reportes.create({
            data: {
                tiempoSinServicio: numeroDiasSinServicio,
                diaDeCorte: JSON.stringify(result),
                codigoPostal: codigoPostal
            }

        });
        console.log(newEvaluation)
        return NextResponse.json({"Message": "Reporte guardado con exito"});

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ "Error": "Error al guardar reporte" });
    } finally {
        await prisma.$disconnect();
    }
}