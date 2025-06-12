import { useNavigate } from 'react-router-dom';

export default function PersonaCard({ persona }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/persona/${persona.id}`);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      width: '200px'
    }}>
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <button onClick={handleClick}>Ver más</button>
    </div>
  );
}
