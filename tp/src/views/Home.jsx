import { personas } from '../data/personas';
import PersonaCard from '../components/PersonaCard';

export default function Home() {
  return (
    <div>
      <h1>Listado de Personas</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {personas.map(persona => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </div>
    </div>
  );
}