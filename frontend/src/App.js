import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { Prueba } from './pages/prueba';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/prueba' element={<Prueba/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
