"use client";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      alert(`¡Bienvenida de nuevo!`);
    } else {
      alert(data.message || "Credenciales incorrectas");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px" }}>
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          onChange={(e) => setForm({...form, email: e.target.value})} 
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          onChange={(e) => setForm({...form, password: e.target.value})} 
          required
        />
        <button type="submit" style={{ backgroundColor: "#28a745", color: "white", padding: "12px", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
          ENTRAR
        </button>
      </form>
    </div>
  );
}