import React from 'react'
import { MATERIAS } from '../utils/materias-utils'
const Materias = () => {
  return (
    <div className="text-center px-6 py-10">
      <h1 className="text-4xl font-comic text-rosa-principal mb-8">
        Página de Materias
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MATERIAS.map((materia, index) => (
          <div 
            key={index}
            className={`p-6 rounded-xl text-white bg-linear-to-r ${materia.color} shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-2">
              {materia.icono} {materia.titulo}
            </h2>

            <img 
              src={materia.imagen}
              className="mx-auto my-4 w-40"
              alt={materia.titulo}
            />

            <p className="text-sm text-white/90">
              {materia.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Materias
