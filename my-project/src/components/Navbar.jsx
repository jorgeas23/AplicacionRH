import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-red-900 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Sistema RH</div>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/empleados">Empleados</Link>
        <Link to="/reportes">Reportes</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
