import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Tareas from './components/Tareas';
import Reports from './components/Reports';
import Bienvenida from './components/Bienvenida';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  if (cargando) return <div className="text-center p-10">Cargando...</div>;

  return (
    <BrowserRouter>
      {usuario ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/reportes" element={<Reports />} />
    
          </Routes>
        </>
      ) : (
        <Bienvenida />
      )}
    </BrowserRouter>
  );
}
