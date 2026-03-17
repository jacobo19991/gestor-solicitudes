import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const filePath = path.join(process.cwd(), 'usuarios.json');
        
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const usuarios = JSON.parse(fileData);

        const usuarioEncontrado = usuarios.find(
            (u: any) => u.email === email && u.password === password
        );

        if (usuarioEncontrado) {
            return NextResponse.json({ 
                message: "¡Bienvenido de nuevo!", 
                user: { name: usuarioEncontrado.name } 
            }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Correo o contraseña incorrectos" }, { status: 401 });
        }
    } catch (error: any) {
        return NextResponse.json({ error: "Error al leer los datos" }, { status: 500 });
    }
}