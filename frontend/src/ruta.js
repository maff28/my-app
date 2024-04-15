import axios from 'axios';

const url = "http://127.0.0.1:8000";


export async function RolUsuario(IdXUsuario) {
  console.log("afuera");
  try {
    console.log("ruta");
    const response = await axios({
      method: "GET",
      url: `${url}/get_rolxusuario/${IdXUsuario}`,
    }); 
    const data = await response.data.IdRol;
    console.log(data);
    console.log("toy dentro en rolex");
    return data;
  } catch (error) {
    console.error(error);
  }
}



export async function get_users() {
  try {
    const users = await axios.get(`${url}/get_users`);
    const data = await users.data.resultado;
    console.log(data);
    console.log("toy get_users");
    return data;
  } catch (error) {
    console.error(error);
  }
}




export async function Update_user(user_id,data) {
  try {
    const user = await axios.PUT(`${url}/update_user/${user_id}`,data);
    const response = await user.data.content;
    console.log(response);
    console.log("toy dentro");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function i_sesion(usuario,contrasena) {
  try {
    console.log(usuario,contrasena);
    const response = await axios({
      method: "POST",
      url: `${url}/loginuser`,
      data: {
        usuario: usuario,
        contrasena: contrasena
      },
    }); 
    const dato = response.data.access_token;
    const persona =response.data.usuario;
    console.log(persona);
    console.log(dato);
    localStorage.setItem("usuario", persona.id);
    return dato;
  } catch (error) {
    if (error.response && error.response.status === 404){
      throw new Error(error.response.data.detail);
    } else { 
      throw new Error("error al iniciar sesion");
    }
  }
}


export async function Crea_Solicitud(idUsuario,IdTipoSolicitud,Asunto) {
  try {
    console.log(idUsuario,IdTipoSolicitud,Asunto);
    axios({
      method: "post",
      url: `${url}/create_Solicitud`,
      data: {
        idUsuario: idUsuario,
        IdTipoSolicitud: IdTipoSolicitud,
        Asunto: Asunto
      },
      
    });
  } catch (error) {
      return error;
  }
}
