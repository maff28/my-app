import axios from "axios";

const url = "http://127.0.0.1:8000";

export async function get_users() {
  try {
    const users = await axios.get(`${url}/get_users`);
    const data = await users.data.resultado;
    console.log(data);
    console.log("toy dentro");
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

export async function formulario() {
  console.log("hola");
  try {
    let user_id =document.getElementById("user_id").value
    let user_nombre= document.getElementById("user_nombre").value
    const data={}
    data+={"id": user_id, "nombre": user_nombre}
    const r = await Update_user(user_id,data);
    console.log(data)
    alert("so, funciona")
    
    
  } catch (error) {
    console.error(error);
  }
}