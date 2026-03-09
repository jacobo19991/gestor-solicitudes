import { NextResponse } from "next/server";
import { users } from "@/lib/memoryStore";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, password, role } = body;

    const newUser: User = {
      id: Date.now().toString(),
      nombre,
      email,
      password,
      role: role || "usuario",
    };

    users.push(newUser); // Guarda al usuario en la lista global

    return NextResponse.json(
      { message: "Usuario registrado con éxito", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error al registrar" }, { status: 400 });
  }
}