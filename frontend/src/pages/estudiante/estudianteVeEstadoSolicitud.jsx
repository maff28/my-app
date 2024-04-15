import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Lateral2 from "../../components/navbar/lateral2";
import Table2 from "../../components/table/table2";

export default function EstudianteVeEstadiSolicitud() {
  return (
    <div class="fondox">
      <NavbarPrueba2/>
      <div class="todo ">
          <div class=" p-0">
            <Lateral2/>
          </div>
          <div class=" ld ">
            < Table2/>
          </div>
      </div>
      <Footer1/>
    </div>
  );
}
