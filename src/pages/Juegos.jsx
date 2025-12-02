import React from "react";
import { JUEGOS_FUTUROS } from "../utils/juegos-utils"; 

const Juegos = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-comic text-rosa-principal">Página de Juegos</h1>
      <p className="mt-4 text-gray-600">Contenido de la página de juegos</p>

      {/* Listado de juegos */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {JUEGOS_FUTUROS.map((juego, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl text-white shadow-lg bg-linear-to-r ${juego.color}`}
          >
            <div className="text-5xl mb-3">{juego.icono}</div>
            <h2 className="text-2xl font-bold">{juego.titulo}</h2>
            <p className="mt-2 text-sm opacity-90">{juego.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juegos;
