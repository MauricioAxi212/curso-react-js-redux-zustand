import React, { useState } from 'react';
import '../Login/Login.css';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include', 
    });

    const data = await response.json();
    if (response.ok) {
      setMessage('¡Registro exitoso! Ahora estás logueado.');
      
    } else {
      setMessage(data.message || 'Error en el registro');
    }
  };

  return (
    <div className="login-container">
    
    <form onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
        {message && <p>{message}</p>}
        <input
            type="text"
            placeholder="Escribe tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
        <a href="/login" target="_blank" rel="noopener noreferrer">
            <button type="button">Iniciar sesión</button>
        </a>
    </form>
</div>
);
};

export default Register;
