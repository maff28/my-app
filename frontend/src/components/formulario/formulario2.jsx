import React from "react";
import {} from "react-bootstrap";
import { useNavigate } from "react-router";
import { sesion } from "../../sesion";







export default function Formulario2() {
  const navigate = useNavigate();
  const handlelogin = () => {
    var user_usuario = document.getElementById("user_usuario").value;
    var user_contrasena = document.getElementById("user_contrasena").value;
    sesion(user_usuario, user_contrasena, navigate); 
  };
  return (
    <main class="mb-5">
        <div class="container mt-5">  
            <div class="row container ">
                <div class="col-md-6">
                    <div class="card card-body bg-light">
                        <div id="vtorre2" >
                            <form class="ps-3">
                                <div class="mb-3">
                                    <label class="form-label text-primary">Tipo de solicitud</label>
                                    <select class="form-select" id="autoSizingSelect">
                                    <option selected>Selecciona el tipo de solicitud</option>
                                    <option value="1">Retiro de modulos</option>
                                    <option value="2">Homologacion</option>
                                    <option value="3">Cambio de grupo</option>
                                    <option value="4">Transferencia interna</option>
                                    <option value="5">Credito</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-primary">Archivo</label>
                                    <input type="file" class="form-control" id="inputGroupFile01"/>
                                </div>

                                <div class="mb-3 ">
                                    <label class="form-label text-primary">Notificar mediante</label>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                                        <label class="form-check-label" for="validationFormCheck2">Whatsapp</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
                                        <label class="form-check-label" for="validationFormCheck3">Correo Electronico</label>
                                    </div>
                                </div>

                                <div class="mb-3 text-primary">
                                    <label class="form-label">Detalles de la solicitud</label>
                                    <textarea class="form-control " placeholder="descripcion" id="floatingTextarea"></textarea>    
                                </div>
                                <div class="mb-2">
                                    <button type="button" class="btn btn-outline-primary btn-lg btn-block mt-3" onclick="agregarem()">Realizar solicitud</button>
                                </div>
                            </form>   
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="ms-3 ">
                        <img src="../picture/comunicado.avif" class=" img-fluid rounded-circle d-block img2" alt="" srcset=""/>
                        <h5 class=" mb-4 text-light textobimg"><strong>Crea una solicitud </strong></h5>
                    </div>
                </div>
            </div>
        </div>     
    </main>
  );
}
