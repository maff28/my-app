import{cerrar_sesion} from '../../sesion';

export default function NavbarPrueba() {
  var nombre = localStorage.getItem("Nombre");
  return (
    <>
         <nav class="sb-topnav navbar navbar-expand navbar-dark fondofo">
            <a class="navbar-brand ps-4">Lider</a>
            
            <div class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
               
            </div>
           
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 justificate-end">
            <b class="pe-3 pt-2 text-light">{nombre}</b>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        {/* <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li> */}
                        <li><a class="dropdown-item" onClick={cerrar_sesion}href="#!">Cerrar Sesion</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
  );
}
