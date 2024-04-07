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
