import { useParams } from 'react-router-dom';
import { personas } from '../data/personas';

export default function PersonaDetalle() {
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id));

  if (!persona) {
    return <p>No se encontró la persona con ID {id}</p>;
  }

  const mensajeEdad = persona.edad >= 18 ? 'Mayor de edad' : 'Menor de edad';

  return (
    <div>
      <h2>Detalle de {persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
      <p>{mensajeEdad}</p>
    </div>
  );
}
