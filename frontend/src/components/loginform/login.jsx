import React from "react";
import "./login.css"
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Aquí puedes realizar la lógica de validación del formulario antes de navegar
        // Por ejemplo, validar que los campos no estén vacíos
        
        // Almacenar los valores en sessionStorage
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);

        // Navegar a otra página
        navigate('/ruta-de-destino');
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Usuario" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
}



