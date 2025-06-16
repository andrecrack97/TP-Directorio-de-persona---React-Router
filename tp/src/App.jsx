import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import PersonaDetalle from './views/PersonaDetalle';
import Estadisticas from './views/Estadisticas';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';
import './App.css';

import { useState, useEffect } from 'react';
import personasIniciales from './data/people.json';

function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(personasIniciales);
  }, []);

  const agregarPersona = (persona) => {
    // Agregamos ID nuevo para evitar conflictos si no hay uno
    const nuevaPersona = { ...persona, id: crypto.randomUUID() };
    setPersonas([...personas, nuevaPersona]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home personas={personas} />} />
        <Route path="persona/:id" element={<PersonaDetalle />} />
        <Route path="estadisticas" element={<Estadisticas />} />
        <Route path="contacto" element={<Contacto agregarPersona={agregarPersona} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
