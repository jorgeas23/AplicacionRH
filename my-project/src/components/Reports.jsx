import Graficas from './Graficas';

export default function Reports() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Reportes y Análisis</h1>
      <p className="text-center text-gray-600 mb-8">
        Visualiza estadísticas y reportes para mejorar tu productividad y seguimiento de tareas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-2">Tareas Completadas</h2>
          <p className="text-gray-700">Resumen de todas las tareas finalizadas este mes.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-2">Pendientes por Usuario</h2>
          <p className="text-gray-700">Número de tareas pendientes asignadas por usuario.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-2">Fechas límite próximas</h2>
          <p className="text-gray-700">Revisión de las tareas más urgentes por vencer.</p>
        </div>
      </div>

      <Graficas />
    </div>
  );
}
