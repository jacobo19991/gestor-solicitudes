"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("¡Usuario registrado desde la web!");
    } else {
      alert("Error al registrar");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input type="text" placeholder="Nombre" onChange={(e) => setForm({...form, nombre: e.target.value})} />
        <input type="email" placeholder="Correo" onChange={(e) => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setForm({...form, password: e.target.value})} />
        <button type="submit" style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
          Registrarse
        </button>
      </form>
    </div>
  );
}