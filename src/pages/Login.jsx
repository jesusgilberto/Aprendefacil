import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular login exitoso
    navigate('/inicio')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-azul-claro/60 to-amarillo-soleado/30 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/95 p-8 rounded-3xl shadow-xl border-4 border-azul-claro">
        <h2 className="text-xl font-semibold text-azul-principal">Iniciar sesión</h2>

        <label className="block mt-4 text-sm text-gray-700">Email</label>
        <input required type="email" className="w-full mt-1 p-2 border-2 border-azul-claro rounded-lg focus:outline-none focus:ring-2 focus:ring-rosa-claro" />

        <label className="block mt-3 text-sm text-gray-700">Contraseña</label>
        <input required type="password" className="w-full mt-1 p-2 border-2 border-azul-claro rounded-lg focus:outline-none focus:ring-2 focus:ring-rosa-claro" />

        <button type="submit" className="mt-6 w-full px-4 py-2 bg-azul-principal text-white rounded-lg shadow hover:bg-azul-oscuro transition">Entrar</button>

        <p className="mt-4 text-sm text-gray-600">¿No tienes cuenta? <Link to="/register" className="text-azul-principal">Regístrate</Link></p>
      </form>
    </div>
  )
}

export default Login
