"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            alert("¡Bienvenido!");
            router.push("/solicitudes");
        } else {
            alert(data.error || "Datos incorrectos");
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
            <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-white p-8 rounded shadow-md">
                <input name="email" type="email" placeholder="Correo" className="border p-2 rounded" required />
                <input name="password" type="password" placeholder="Contraseña" className="border p-2 rounded" required />
                <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
                    ENTRAR
                </button>
            </form>
        </main>
    );
}