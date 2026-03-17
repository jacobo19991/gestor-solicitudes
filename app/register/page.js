'use client';
import React, { useState } from 'react';

export default function RegisterPage() {
  // Aquí es donde se define formData, por eso te daba error antes
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('¡Usuario registrado con éxito!');
        setFormData({ name: '', email: '', password: '' });
      } else {
        setStatus('Error al registrar usuario.');
      }
    } catch (err) {
      setStatus('Error de conexión.');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '50px auto', backgroundColor: '#f4f4f4', borderRadius: '8px', color: 'black' }}>
      <h2 style={{ textAlign: 'center' }}>Crear Cuenta</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" placeholder="Nombre" required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="email" placeholder="Correo" required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" placeholder="Contraseña" required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Registrar
        </button>
      </form>
      {status && (
        <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
          {status}
        </p>
      )}
    </div>
  );
}