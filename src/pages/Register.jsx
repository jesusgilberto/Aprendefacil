import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular registro exitoso
    navigate('/inicio')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rosa-claro via-white to-verde-mint/35 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/95 p-8 rounded-3xl shadow-xl border-4 border-rosa-claro">
        <h2 className="text-xl font-semibold text-lila-oscuro">Registrarse</h2>

        <label className="block mt-4 text-sm text-gray-700">Nombre</label>
        <input required type="text" className="w-full mt-1 p-2 border-2 border-rosa-claro rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-claro" />

        <label className="block mt-3 text-sm text-gray-700">Email</label>
        <input required type="email" className="w-full mt-1 p-2 border-2 border-rosa-claro rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-claro" />

        <label className="block mt-3 text-sm text-gray-700">Contraseña</label>
        <input required type="password" className="w-full mt-1 p-2 border-2 border-rosa-claro rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-claro" />

        <button type="submit" className="mt-6 w-full px-4 py-2 bg-azul-principal text-white rounded-lg shadow hover:bg-azul-oscuro transition">Crear cuenta</button>

        <p className="mt-4 text-sm text-gray-600">¿Ya tienes cuenta? <Link to="/login" className="text-azul-principal">Inicia sesión</Link></p>
      </form>
    </div>
  )
}

export default Register
