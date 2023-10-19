import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const postalCode = parseInt(url.searchParams.get('codigoPostal'),10);
    const postalCodeInfo = await prisma.mty_zip.findUnique({
      where: {
        codigoPostal: postalCode,
      },
    });

    if (postalCodeInfo) {
      const { codigoPostal, municipio, latitud, longitud } = postalCodeInfo;
      return NextResponse.json({ codigoPostal, municipio, latitud, longitud });
    } else {
      return NextResponse.json({ error: 'Código postal no encontrado' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al obtener latitud y longitud' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
