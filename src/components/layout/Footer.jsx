import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-white py-6 mx-4 my-8 rounded-2xl shadow-lg border-4 border-rosa-principal">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-bold text-gray-800 mb-2">
          © 2025 Todos los derechos reservados
        </p>
        <p className="text-gray-600">
          <strong>Ramírez Lizárraga Jesús Gilberto</strong>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="text-sm text-gray-500">Plataforma Educativa Interactiva</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer