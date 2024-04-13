import { useEffect, useState } from "react";
import * as API from "../ruta";

import Table2 from "../components/table/table2";
import NavbarPrueba from "../components/navbar/navbarprueba";
import Table3 from "../components/table/tabla3";
import Lateral1 from "../components/navbar/lateral1";


export function Prueba() {
  API.get_users();

  const [lista, setUsers] = useState([]);
  useEffect(() => {
    API.get_users().then(setUsers);
  }, []);

  return (
      <div class="bg-secondary">

        <NavbarPrueba/>
        <div class="row">
          <div class="col-lg-2 ">
            <Lateral1/>
          </div>
          <div class="col-10">
            <Table3/>
            {lista.map((Usuarios) => (
              <div key={Usuarios.id}>
                <h1>nombre: {Usuarios.nombre}</h1>
              </div>
            ))}
          </div>
        </div>
      
        
        
      </div>
  );
}
