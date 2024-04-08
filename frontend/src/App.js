import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import NoPage from './pages/NoPage';
import Estudiante from './pages/estudiante/home_estudiante';
import { Prueba } from './pages/prueba';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/estudiante' element={<Estudiante/>} />
          <Route path='/prueba' element={<Prueba/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
