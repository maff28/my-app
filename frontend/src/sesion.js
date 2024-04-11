import { jwtDecode } from "jwt-decode";
import * as API from "./ruta";

//* funcion para enviar los datos de inicio de sesion
export async function sesion(user_usuario, user_contrasena, navigate) {
  try {
    const token = await API.i_sesion(user_usuario, user_contrasena);
    localStorage.setItem("token", token);
    var idusuario= localStorage.getItem("usuario");
    console.log(idusuario);
    /* var Rol= API.RolUsuario(idusuario);
    
    console.log(Rol);
    switch (Rol){
      case 1:
        navigate("/admin");
        break;
      case 2:
        navigate("/estudiante");
        break;
      case 3:
        navigate("/lider");
        break;
      case 4:
         navigate("/lider");
      break;
      default:
        navigate("/NoPage");
        break;
    } */
    navigate("/estudiante");  
  } catch (error) {
    alert(error.message);
  }
}

//* funcio para descodificar el token y usar la informacion
export async function decode_token() {
  const token = localStorage.getItem("token");
  const decode_token = jwtDecode(token);
  console.log(decode_token);
  return decode_token;
}

//* funcion para cerrar la sesion
export async function cerrar_sesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("token");
  window.location.href = "/login";
}
