import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral3 from "../../components/navbar/lateral3";
import Footer1 from "../../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://127.0.0.1:8000";



export default function Ver_roles() {
  const   handlelogin= async() => {
    var IdArea = parseInt(document.getElementById("user_IdArea").value);
    var usuario = document.getElementById("user_usuario").value;
    var nombre = document.getElementById("user_nombre").value;
    var documento = document.getElementById("user_documento").value;
    var contrasena = document.getElementById("user_contrasena").value;
    var apellido = document.getElementById("user_apellido").value;
    var telefono = document.getElementById("user_telefono").value;
    var correo = document.getElementById("user_correo").value;
    console.log("El usuaio es :",documento);
    axios({
      method: "post",
      url: `${url}/create_user`,
      data: {
        IdArea: IdArea,
        usuario: usuario,
        contrasena: contrasena,
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        telefono: telefono,
        correo: correo
      },
    });
    
    alert('Haz creado al usuario: '+usuario+'\ncontraseña: '+contrasena+'\nNombre : '+nombre+'\nApellido : '+apellido+'\nDocumento : '+documento+'\nTelefono : '+telefono);
    window.location.href = window.location.href;

  };

  

  const [users, setUsers] = useState([]);

  const get_SolicitudesSinAsignarr = async () => {
    try {
      const users = await axios.get(`${url}/get_ModulosxRoles`);
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
  
  return (

      <>
        <NavbarPrueba/>
      <div class="todo fondoZ2">
        
        <div class=" p-0 lr">
          <Lateral3/>
        </div>
        <div class=" ld ">
          <div class="row">
            <div class="col-4">
                <div class="card carta1">
                  
                <div class="card-body">
                  <h5 class="card-title">Administrador</h5>
                  <p class="card-text">administrador del software</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Crear solicitud</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
            <div class="col-4">
            <div class="card carta1">
                  
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card carta1">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card carta1">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer1/>
      </>
      
    
  );
}
