import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Employees from './components/Employees';
import Reports from './components/Reports';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleados" element={<Employees />} />
        <Route path="/reportes" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

