import React from "react";
import {} from "react-bootstrap";
import * as API from "../../ruta";

export default function Formulario1() {
  return (
        <div class="bgl_login pt-4 pb-4">
            <div class="fondo conlogin ">
                <div class="row ">
                    <div class="fs-1 tituloformulogin fw-bold mt-5 text-light">
                        <p>Inicio de sesion</p>
                    </div>
                    <form  class=" mt-4 ms-5">
                    <div class=" mt-4 tamano_imput ">
                        <label class="form-label text-light">Usuario</label>
                        <input class="form-control  bg-light"type="text"placeholder="Pepito" id="user_id"/>
                    </div>
                    <div class=" mt-3 tamano_imput">
                        <label class="form-label text-light">Contraseña</label>
                        <input class="form-control bg-light"type="text"placeholder="clave123" id="user_nombre"/>
                    </div>
                    <div class="mt-4 tamano_imput">
                        <button class="btn btn-primary w-100  mt-4 fw-semibold shadow-sm" type="button" value="Acceder" onclick={API.formulario}>
                        Iniciar sesión  
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  );
}
