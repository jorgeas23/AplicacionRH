import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Graficas from './Graficas';

export default function Home() {
  const navigate = useNavigate();
  const [verExplicacion, setVerExplicacion] = useState(false);

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-700">Una mejor manera de trabajar</h1>
      <p className="text-lg mt-4 text-gray-700">
        Vincula tus tareas con objetivos y mejora tu flujo de trabajo con tecnología.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate("/tareas")}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition-all duration-300"
        >
          Comenzar
        </button>
        <button
          onClick={() => setVerExplicacion(!verExplicacion)}
          className="border border-blue-700 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300"
        >
          Ver cómo funciona
        </button>
      </div>

      {verExplicacion && (
        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow max-w-2xl mx-auto text-left text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona esta app?</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Inicia sesión con tu cuenta de Google.</li>
            <li>Agrega tareas escribiendo un título, descripción y fecha límite.</li>
            <li>Consulta tus tareas registradas desde el panel de Tareas.</li>
            <li>Consulta un resumen visual con gráficas.</li>
          </ul>
        </div>
      )}

      <Graficas />
    </div>
  );
}

