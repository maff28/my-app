import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Lateral2 from "../../components/navbar/lateral2";
import Table1 from "../../components/table/table1";

export default function EstudianteVeHistorial() {
  return (
    <div class="fondox">
      <NavbarPrueba2/>
      <div class="todo ">
          <div class=" p-0">
            <Lateral2/>
          </div>
          <div class=" ld ">
            < Table1/>
          </div>
      </div>
      <Footer1/>
    </div>
  );
}
