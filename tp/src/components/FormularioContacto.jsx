import { useState } from 'react';

export default function FormularioContacto() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre) nuevosErrores.nombre = 'Nombre obligatorio';
    if (!form.apellido) nuevosErrores.apellido = 'Apellido obligatorio';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) nuevosErrores.email = 'Email inválido';
    if (!form.edad || isNaN(form.edad) || form.edad <= 0) nuevosErrores.edad = 'Edad inválida';
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validaciones = validar();
    if (Object.keys(validaciones).length > 0) {
      setErrores(validaciones);
      setMensaje('');
    } else {
      setErrores({});
      setMensaje('¡Formulario enviado con éxito!');
      setForm({ nombre: '', apellido: '', email: '', edad: '' });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
        {errores.apellido && <p style={{ color: 'red' }}>{errores.apellido}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
      </div>
      <div>
        <label>Edad:</label>
        <input type="number" name="edad" value={form.edad} onChange={handleChange} />
        {errores.edad && <p style={{ color: 'red' }}>{errores.edad}</p>}
      </div>
      <button type="submit">Enviar</button>
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
    </form>
  );
}
