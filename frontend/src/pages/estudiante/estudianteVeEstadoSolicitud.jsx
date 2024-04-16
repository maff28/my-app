import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Lateral2 from "../../components/navbar/lateral2";
import Table2 from "../../components/table/table2";
import Table8 from "../../components/table/table8";
import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://127.0.0.1:8000";


export default function EstudianteVeEstadiSolicitud() {

  const [userss, setUserss] = useState([]);

    var idusuario = parseInt(localStorage.getItem("usuario"));
    console.log(idusuario);
    var get_SolicitudesPendientesPorIdPersona = async (idUsuario) => {
        try {
            const users = await axios.get(`${url}/get_SolicitudesPendientesPorIdUsuario/${idUsuario}`);
            const dato = await users.data;
            console.log(dato);
            console.log("toy dentro");
            setUserss(dato);
        } catch (error) {
        console.error(error);
        }
    };

    
    
    useEffect(() => {
        get_SolicitudesPendientesPorIdPersona(idusuario);
    }, []);


  const [users, setUsers] = useState([]);

    var idusuario = parseInt(localStorage.getItem("usuario"));

    console.log(idusuario);
    var get_Solicitud = async (idUsuario) => {
        try {
            const users = await axios.get(`${url}/get_Solicitud/${idUsuario}`);
            const dato = await users.data;
            console.log(dato);
            console.log("toy dentro");
            setUsers(dato);
        } catch (error) {
        console.error(error);
        }
    };

    
    
    useEffect(() => {
        get_Solicitud(idusuario);
    }, []);
  return (
    <div class="fondox">
      <NavbarPrueba2/>
      <div class="todo ">
          <div class=" p-0">
            <Lateral2/>
          </div>
          <div class=" ld " >
          {userss.map((Usuarios) => (
              <div key={Usuarios.id}>
                <div class="mb-1">
                <div class=" soli bg-light ">
                    <div class="">
                      <div class="modal-header modo">
                        <h5 class="modal-title" id="exampleModalLabel">ID de Tu solicitud: {Usuarios.id}</h5>
                        <h5 class="modal-title" id="exampleModalLabel">Tipo de solicitud: {Usuarios.valor}</h5>
                        <h5 class="estado2">{Usuarios.estado}</h5>
                      </div>
                      <div class="raya"></div>
                      
                      <div class="raya"></div>
                      <div class="caja">
                        <div class="modal-body mt-3 modo ">
                          <h5>Archivo</h5>
                          <a class="nav-link " href="#">imgen.jpg</a>
                          
                        </div>
                        
                        <div class="modal-body mt-3 mb-2 modo ">
                        <h5>Asunto</h5>
                        <p class="">{Usuarios.Asunto}</p>
                       
                      </div>
                      
                      </div>
                      <b class="ps-4">Fecha de creacion: {Usuarios.FechaCreacion}</b>
                    </div>
                </div>
                </div>
              </div>
            ))}
          {users.map((Usuarios) => (
              <div key={Usuarios.id}>
                <div class="mb-1">
                <div class=" soli bg-light ">
                    <div class="">
                      <div class="modal-header modo">
                        <h5 class="modal-title" id="exampleModalLabel">ID de Tu solicitud: {Usuarios.id}</h5>
                        <h5 class="modal-title" id="exampleModalLabel">Tipo de solicitud: {Usuarios.valor}</h5>
                        <h5 class="estado">{Usuarios.estado}</h5>
                      </div>
                      <div class="raya"></div>
                      
                      <div class="raya"></div>
                      <div class="caja">
                        <div class="modal-body mt-3 modo ">
                          <h5>Archivo</h5>
                          <a class="nav-link " href="#">imgen.jpg</a>
                          
                        </div>
                        
                        <div class="modal-body mt-3 mb-2 modo ">
                        <h5>Asunto</h5>
                        <p class="">{Usuarios.Asunto}</p>
                       
                      </div>
                      
                      </div>
                      <b class="ps-4">Fecha de creacion: {Usuarios.FechaCreacion}</b>
                    </div>
                </div>
                </div>
              </div>
            ))}
          
          </div>
      </div> 
      <Footer1/>
    </div>  
  );
}
