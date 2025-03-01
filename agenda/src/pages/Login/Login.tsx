import React, { useEffect, useState } from 'react';

import {useNavigate} from 'react-router-dom'
import './Login.css';
//aqui importe los iconos 
import { FcManager } from "react-icons/fc";
import { useAuthStore } from '../../store/authStore';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error] = useState<string | null>(null);

    const navigate = useNavigate()

    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const loginAction = useAuthStore((state) => state.login)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        loginAction(username, password)
        // loginService(username, password)
        // .then((response: AuthResponse) => {
        //     if (response && response?.status === 200) { 
        //         navigate('/home')
        //     }else{
        //         setError('Usuario o contraseña incorrectos')
        //     } 
        // })
        // .catch((error) => setError(error.message));
    };

    return (
        <div className='login-container'>
            {
                error  && <p>{error}</p>
            }
            <form onSubmit={handleSubmit}>
            <h2>  Inicia sesión</h2>

            <FcManager size={80} />

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
                <button type="submit">Iniciar sesión</button>
                <a href="/register" target="_blank" rel="noopener noreferrer">
                    <button type="button">Registrarse</button>
                </a>

            </form>
        </div>
    );
};

export default Login;