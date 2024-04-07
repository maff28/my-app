import { useEffect, useState } from "react"
import * as API from '../ruta'


export function Prueba() {
    API.get_users()

    const [lista, setUsers] = useState([]);
    useEffect(() => {
        API.get_users().then(setUsers);
    }, [])

  return (
    <>
        <h1>hola</h1>
        <ul>
            {lista.map(user=>
            <li key={user.id}>Area:{user.usuario} nombre: {user.contrasena}</li>)}                
        </ul>
        {lista.map(Usuarios=>
        <div key={Usuarios.id}>
            <h1 >Usuario: {Usuarios.usuario}</h1> 
            <p> contraseña: {Usuarios.contrasena}</p>
        </div>
        )}

    </>
  );
}
