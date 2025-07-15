import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dataTareas = [
  { name: 'Completadas', value: 8 },
  { name: 'Pendientes', value: 5 },
];

const dataPorDia = [
  { dia: 'Lun', tareas: 2 },
  { dia: 'Mar', tareas: 1 },
  { dia: 'Mié', tareas: 4 },
  { dia: 'Jue', tareas: 3 },
  { dia: 'Vie', tareas: 5 },
];

const COLORS = ['#2563eb', '#93c5fd']; // Azul fuerte y azul claro

export default function Graficas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="p-4 shadow rounded-lg bg-white">
        <h2 className="text-center text-lg font-semibold mb-4">Estado de tareas</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={dataTareas}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {dataTareas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 shadow rounded-lg bg-white">
        <h2 className="text-center text-lg font-semibold mb-4">Tareas por día</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dataPorDia}>
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tareas" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
