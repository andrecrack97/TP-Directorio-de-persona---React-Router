import FormularioContacto from '../components/FormularioContacto';

export default function Contacto({ agregarPersona }) {
  return (
    <div>
      <h1>Contacto</h1>
      <FormularioContacto agregarPersona={agregarPersona} />
    </div>
  );
}
