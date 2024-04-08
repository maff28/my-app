import { useEffect, useState } from "react";
import * as API from "../ruta";
import Formulario1 from "../components/formulario/formulario1.";

export function Prueba() {
  API.get_users();

  const [lista, setUsers] = useState([]);
  useEffect(() => {
    API.get_users().then(setUsers);
  }, []);

  return (
    <>
    <Formulario1/>
      
      {/* <ul>
        {lista.map((user) => (
          <li key={user.id}>
            Area:{user.usuario} nombre: {user.contrasena}
          </li>
        ))}
      </ul> */}
      {lista.map((Usuarios) => (
        <div key={Usuarios.id}>
          <h1>nombre: {Usuarios.nombre}</h1>
          
        </div>
      ))}
    </>
  );
}
