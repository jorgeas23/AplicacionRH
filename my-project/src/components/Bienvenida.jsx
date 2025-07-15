import { useState } from "react";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Bienvenida() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert("Error con Google: " + error.message);
    }
  };

  const loginCorreo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const registrar = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Error al registrarse: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">

        {/* Imagen local desde carpeta public */}
        <img
          src="/image.png"
          alt="Logo tareas"
          className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md"
        />

        <h1 className="text-3xl font-extrabold text-blue-700 mb-2">TaskFlow</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Una mejor manera de organizar y cumplir tus objetivos diarios.
        </p>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <button
          onClick={loginCorreo}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-2 transition duration-300"
        >
          Iniciar sesión con correo
        </button>

        <button
          onClick={registrar}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2 transition duration-300"
        >
          Registrarse
        </button>

        <hr className="my-3" />

        <button
          onClick={loginGoogle}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}
