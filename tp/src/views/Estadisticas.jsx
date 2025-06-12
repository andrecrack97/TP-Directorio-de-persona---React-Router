import { personas } from '../data/personas';

export default function Estadisticas() {
  const total = personas.length;
  const mayoresDe35 = personas.filter(p => p.edad > 35);
  const maxEdad = Math.max(...personas.map(p => p.edad));
  const minEdad = Math.min(...personas.map(p => p.edad));
  const mayores = personas.filter(p => p.edad === maxEdad);
  const menores = personas.filter(p => p.edad === minEdad);
  const promedio = (personas.reduce((acc, p) => acc + p.edad, 0) / total).toFixed(1);

  return (
    <div>
      <h1>Estadísticas</h1>
      <ul>
        <li>Total de personas: {total}</li>
        <li>Personas con más de 35 años: {mayoresDe35.length}</li>
        <li>Persona(s) de mayor edad: {mayores.map(p => `${p.nombre} ${p.apellido}`).join(', ')}</li>
        <li>Persona(s) de menor edad: {menores.map(p => `${p.nombre} ${p.apellido}`).join(', ')}</li>
        <li>Promedio de edad: {promedio}</li>
      </ul>
    </div>
  );
}
