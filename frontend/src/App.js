import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import NoPage from './pages/NoPage';
import Estudiante from './pages/estudiante/home_estudiante';
import { Prueba } from './pages/prueba';
import { ProtectedRoute} from './components/protectedRoute.';
import EstudianteCreaSoli from './pages/estudiante/estudianteCreaSoli';
import EstudianteVeEstadiSolicitud from './pages/estudiante/estudianteVeEstadoSolicitud';
import Lider from './pages/lider/home_lider.jsx';
import Solicitudes_sin_asignar from './pages/lider/solicitudes_sin_asignar.jsx';
import Solicitudes_pendientes from './pages/lider/solicitudes_pendientes.jsx';
import Solicitudes_finalizadas from './pages/lider/solicitudes_finalizadas.jsx';




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/estudiante' element={<ProtectedRoute><Estudiante /></ProtectedRoute>} />
          <Route path='/estudianteCreaSoli' element={<ProtectedRoute><EstudianteCreaSoli /></ProtectedRoute>} />
          <Route path='/estudianteVeEstadoSolicitud' element={<ProtectedRoute><EstudianteVeEstadiSolicitud /></ProtectedRoute>} />
          <Route path='/Lider' element={<ProtectedRoute><Lider /></ProtectedRoute>} />
          <Route path='/Solicitudes_sin_asignar' element={<ProtectedRoute><Solicitudes_sin_asignar/></ProtectedRoute>} />
          <Route path='/Solicitudes_Pendientes' element={<ProtectedRoute><Solicitudes_pendientes/></ProtectedRoute>} />
          <Route path='/Solicitudes_finalizadas' element={<ProtectedRoute><Solicitudes_finalizadas/></ProtectedRoute>} />
          <Route path='/prueba' element={<Prueba/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
