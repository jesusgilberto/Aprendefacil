import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-azul-claro via-white to-rosa-claro px-4">
      <div className="w-full max-w-md bg-white/95 shadow-xl rounded-3xl p-8 text-center border-4 border-amarillo-soleado">
        <h2 className="text-2xl font-semibold text-azul-principal">Bienvenido a Aprende Fácil</h2>
        <p className="mt-3 text-gray-600">Inicia sesión o regístrate para continuar</p>

        <div className="mt-6 flex flex-col gap-3">
          <Link to="/login" className="px-4 py-2 bg-azul-principal text-white rounded-lg shadow hover:bg-azul-oscuro transition">Iniciar sesión</Link>
          <Link to="/register" className="px-4 py-2 border-2 border-azul-principal text-azul-principal rounded-lg hover:bg-azul-principal hover:text-white transition">Registrarse</Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">También puedes navegar sin cuenta (solo lectura)</p>
        <Link to="/inicio" className="mt-3 inline-block text-sm text-lila-oscuro hover:text-rosa-oscuro transition">Entrar como invitado</Link>
      </div>
    </div>
  )
}

export default Auth
