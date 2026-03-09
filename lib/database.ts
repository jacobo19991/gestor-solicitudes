import { NextResponse } from "next/server";
import { getSolicitudesCollection } from "@/lib/database";

export async function POST(req: Request) {
  try {
    const solicitudesDB = await getSolicitudesCollection();
    const body = await req.json();

    const nuevaSolicitud = {
      id: Date.now().toString(),
      ...body,
      estado: "abierta",
      createdAt: new Date().toISOString()
    };

    solicitudesDB.insert(nuevaSolicitud); // Esto lo guarda en el archivo físico
    return NextResponse.json({ message: "Guardado en base de datos", solicitud: nuevaSolicitud }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error al guardar" }, { status: 500 });
  }
}