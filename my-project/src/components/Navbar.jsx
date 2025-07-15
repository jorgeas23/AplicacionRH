import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Sesión cerrada");
  };

  return (
    <nav className="bg-blue-700 text-white p-4 flex items-center">
      <div className="font-bold text-xl">Gestor de Tareas</div>

      <div className="flex gap-6 ml-auto items-center">
        <Link to="/">Inicio</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/reportes">Reportes</Link>

        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL}
              alt="Foto de usuario"
              className="w-8 h-8 rounded-full border border-white"
            />
            <button onClick={handleLogout} className="hover:underline text-sm">
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
