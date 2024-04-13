
import Header from "../../components/header/header";
import Footer1 from "../../components/footer/footer";
import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral1 from "../../components/navbar/lateral1";
import Carrusel3 from "../../components/carrusel1/carrusel3";

export default function Lider() {
  return (
    <>
      <NavbarPrueba/>
      <div class="todo">
        
        <div class=" p-0 lr">
          <Lateral1/>
        </div>
        <div class=" p-2">
          <Carrusel3/>
          <div class="row p-5">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
