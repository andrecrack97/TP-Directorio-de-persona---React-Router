import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import PersonaDetalle from './views/PersonaDetalle';
import Estadisticas from './views/Estadisticas';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="persona/:id" element={<PersonaDetalle />} />
        <Route path="estadisticas" element={<Estadisticas />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;