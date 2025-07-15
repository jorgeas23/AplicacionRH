import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import TareaItem from "./TareaItem";

export default function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({
    titulo: "",
    descripcion: "",
    fecha: ""
  });
  const [editandoId, setEditandoId] = useState(null);

  const tareasRef = collection(db, "tareas");

  const obtenerTareas = async () => {
    try {
      const snapshot = await getDocs(tareasRef);
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTareas(lista);
    } catch (error) {
      console.error("Error al obtener tareas:", error.message);
      alert("No se pudieron obtener las tareas. Verifica las reglas de Firestore.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        obtenerTareas();
      } else {
        alert("Debes iniciar sesión para ver las tareas.");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setNuevaTarea({
      ...nuevaTarea,
      [e.target.name]: e.target.value
    });
  };

  const agregarOEditarTarea = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      alert("Debes iniciar sesión.");
      return;
    }

    try {
      if (editandoId) {
        // Actualizar tarea existente
        const tareaRef = doc(db, "tareas", editandoId);
        await updateDoc(tareaRef, nuevaTarea);
        alert("Tarea actualizada.");
        setEditandoId(null);
      } else {
        // Agregar nueva tarea
        await addDoc(tareasRef, nuevaTarea);
        alert("Tarea agregada con éxito.");
      }

      await obtenerTareas();
      setNuevaTarea({ titulo: "", descripcion: "", fecha: "" });
    } catch (error) {
      console.error("Error al guardar tarea:", error.message);
      alert("No se pudo guardar la tarea.");
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await deleteDoc(doc(db, "tareas", id));
      await obtenerTareas();
    } catch (error) {
      console.error("Error al eliminar tarea:", error.message);
      alert("No se pudo eliminar la tarea.");
    }
  };

  const cargarTareaParaEditar = (tarea) => {
    setNuevaTarea({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      fecha: tarea.fecha,
    });
    setEditandoId(tarea.id);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gestión de Tareas</h1>

      <form onSubmit={agregarOEditarTarea} className="mb-8 space-y-4 max-w-md">
        <input
          type="text"
          name="titulo"
          placeholder="Título de la tarea"
          value={nuevaTarea.titulo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={nuevaTarea.descripcion}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="fecha"
          value={nuevaTarea.fecha}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className={`${
            editandoId ? "bg-yellow-500" : "bg-green-600"
          } text-white px-4 py-2 rounded hover:opacity-90`}
        >
          {editandoId ? "Guardar Cambios" : "Agregar Tarea"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Lista de tareas:</h2>
      {tareas.length === 0 ? (
        <p>No hay tareas registradas aún.</p>
      ) : (
        <ul className="space-y-4">
          {tareas.map((tarea) => (
            <TareaItem
              key={tarea.id}
              tarea={tarea}
              onEditar={() => cargarTareaParaEditar(tarea)}
              onEliminar={eliminarTarea}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
