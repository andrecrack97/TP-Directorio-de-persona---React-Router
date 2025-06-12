import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    marginRight: '1rem',
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? '#0077cc' : 'black'
  });

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={linkStyle}>Inicio</NavLink>
      <NavLink to="/estadisticas" style={linkStyle}>Estadísticas</NavLink>
      <NavLink to="/contacto" style={linkStyle}>Contacto</NavLink>
    </nav>
  );
}
