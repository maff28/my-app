
import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import DownloadIcon from '@mui/icons-material/GetApp';
import ViewColumnIcon from '@mui/icons-material/DynamicFeed';
const url = "http://127.0.0.1:8000";
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


function Table3() {
  

  const [users, setUsers] = useState([]);

  const get_SolicitudesSinAsignarr = async () => {
    try {
      const users = await axios.get(`${url}/get_SolicitudesSinAsignar/`);
      const dato = await users.data.resultado;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_SolicitudesSinAsignarr();
  }, []);

  //tomo informacion de la base de datos y la almaceno en el arreglo 'users'
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
      label:"Tipo Solicitud",
    },
    {
      name: "idpersonaAsignada",
      label:"persona Asignada",
    },
    {
      name: "Archivos",
      label:"Archivo",
    },
    {
      name: "Asunto",
      label:"Asunto",
    },
    {
      name: "FechaCreacion",
      label:"fecha de creacion",
    },
    {
      name: "FechaUltimaModificacion",
      label:"Ultima modificacion",
    },
    {
      name: "estado",
      label:"Estado de la solicitud"
    },
    {
      name: "prioridad",
      label:"Prioridad",
    },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "vertical",
    tableBodyHeight: "400px",
    rowsPerPage: 5,
  };
  console.log()
  const components = {
    icons: {
      DownloadIcon,
      ViewColumnIcon,
    }
  };


  return (
    <div class="p-5 fondo_tabla"> 
      <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"ACME Employee list"}
          data={users}
          columns={columns}
          options={options}
          components={components}
        />
      </ThemeProvider>
    </CacheProvider>
    </div>
    
    
  );
}

export default Table3;
