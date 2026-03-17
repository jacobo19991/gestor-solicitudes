import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        // Buscamos la ruta del archivo en tu computadora
        const filePath = path.join(process.cwd(), 'usuarios.json');
        
        // Leemos los usuarios actuales
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const usuarios = JSON.parse(fileData);

        // Agregamos el nuevo
        const nuevoUsuario = { 
            name, 
            email, 
            password, 
            id: Date.now() 
        };
        
        usuarios.push(nuevoUsuario);

        // Guardamos de vuelta en el archivo
        fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));

        return NextResponse.json({ message: "¡Usuario registrado localmente!" }, { status: 201 });

    } catch (error: any) {
        console.log("Error local:", error.message);
        return NextResponse.json({ error: "Error al guardar", detalle: error.message }, { status: 500 });
    }
}