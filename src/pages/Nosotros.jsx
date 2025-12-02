import React from "react";
import { NOSOTROS } from "../utils/nosotros-utils";
 console.log('Imagen URL:', NOSOTROS.imagen);
const Nosotros = () => {
  return (
    <div className="bg-white py-6 mx-4 my-8 rounded-2xl shadow-lg border-4 border-rosa-principal">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-comic text-rosa-principal mb-8">
          {NOSOTROS.titulo}
        </h1>

        <img 
          src={NOSOTROS.imagen}
          className="mx-auto mb-6 w-48 h-48 object-cover rounded-full border-4 border-rosa-principal shadow-lg"
        
        />

        <p className="text-xl font-semibold mb-10 text-gray-800">
          {NOSOTROS.nombre}
        </p>

        <h2 className="text-3xl font-bold text-rosa-principal mb-4">Visión</h2>
        <div className="text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
          {NOSOTROS.vision.map((linea, index) => (
            <p key={index} className="mb-2">
              {linea}
            </p>
          ))}
        </div>

        {/* Misión */}
        <h2 className="text-3xl font-bold text-rosa-principal mb-4">Misión</h2>
        <div className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {NOSOTROS.mision.map((linea, index) => (
            <p key={index} className="mb-2">
              {linea}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;