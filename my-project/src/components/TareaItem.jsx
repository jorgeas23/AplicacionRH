import { motion } from 'framer-motion';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

export default function TareaItem({ tarea, onEditar, onEliminar }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{tarea.titulo}</h3>
          <p className="text-gray-600">{tarea.descripcion}</p>
          <p className="text-sm text-gray-400 mt-1">Fecha: {tarea.fecha}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onEditar(tarea)}
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => onEliminar(tarea.id)}
            className="text-red-600 hover:text-red-800 transition"
          >
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.li>
  );
}
