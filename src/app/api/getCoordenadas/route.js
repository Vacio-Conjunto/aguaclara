import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const coordenadas = await prisma.reportes.findMany({
            select: {
                latitud: true,
                longitud: true
            },
        });

        return NextResponse.json(coordenadas);

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Error al extraer coordenadas' }, { status: 404 });
    } finally {
        await prisma.$disconnect();
    }
}
