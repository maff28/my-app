
import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

const url = "http://127.0.0.1:8000";

function Table2() {

  const [users, setUsers] = useState([]);

  //tomo informacion de la base de datos y la almaceno en el arreglo 'users'
  const get_userss = async () => {
    try {
      const users = await axios.get(`${url}/get_users`);
      const dato = await users.data.resultado;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_userss();
  }, []);



  const columns = [
    {
      name: "nombre",
      label: "Nombre",
      
    },
    {
      name: "apellido",
      label: "Apellido",
    },
    {
      name: "id",
      label:"ID"
    },
  ];



  const options = {
    filterType: "checkbox",
  };



  return (
    <>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4 ">
            <h1 class="mt-4">Tables</h1>
            <MUIDataTable
                  title={"hola"}
                  columns={columns}
                  data={users}
                  options={options}
                />
          </div>
        </main>
      </div>
    </>
  );
}

export default Table2;
