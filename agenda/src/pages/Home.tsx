import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTodos } from "../services/todos.service";
import { Link } from "react-router-dom"; 
import './styles/Home.css';

const Home: React.FC = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        retry: false,
    });

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (isError || error) {
        return <h1>Upps, fallo algo</h1>;
    }

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>

          
            <ol>
                {data?.map((element) => (
                    <li key={element.id}>{element.title}</li>
                ))}
            </ol>
        </div>
    );
};

export default Home;
