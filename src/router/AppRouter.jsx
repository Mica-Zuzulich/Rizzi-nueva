import { Routes, Route } from 'react-router-dom' // <--- Eliminamos BrowserRouter de la importación
import Home from '../pages/Home/Home'
import Proyectos from '../pages/Proyectos/Proyectos'
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros'
import Contacto from '../pages/Contacto/Contacto'

export const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Home style={{}} />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
)