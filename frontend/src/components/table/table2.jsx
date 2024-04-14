
import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const url = "http://127.0.0.1:8000";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function Table2() {

  const [users, setUsers] = useState([]);

  //tomo informacion de la base de datos y la almaceno en el arreglo 'users'
  const get_SolicitudesSinAsignarr = async () => {
    try {
      const users = await axios.get(`${url}/get_SolicitudesSinAsignar/`);
      const dato = await users.data.resultado;
      console.log(dato);
      console.log("adentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_SolicitudesSinAsignarr();
  }, []);

  

  const columns = [
    {
      name: "idSolicitud",
      label: "ID solicitud",
      
    },
    {
      name: "idUsuario",
      label: "Estudiante",
    },
    {
      name: "IdTipoSolicitud",
      label:"Tpo solicitud"
    },
  ];

  const options = {
    filterType: "dropdown",
    
    
    
  };

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"ACME Employee list"}
          data={users}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Table2;
