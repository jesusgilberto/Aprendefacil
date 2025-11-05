import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [loading, setLoading] = useState(false)

  const handleNavigation = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
          <img 
            src="/video/dinosaurio-34.gif" 
            alt="Cargando..." 
            className="w-32 h-32"
          />
        </div>
      )}
      
      <header className="relative">
        <div className="flex items-center justify-start gap-5 mt-5 p-3 border-4 border-rosa-principal rounded-2xl mx-4 relative overflow-hidden">
          {/* Video de fondo */}
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/video/vecteezy_soap-bubbles-floating-in-the-air-with-natural-green-blurred_14927511.mov" type="video/mp4" />
          </video>
          
          {/* Logo */}
          <img 
            src="/img/aprende.png" 
            alt="Logo Aprende" 
            className="w-32 h-32 rounded-xl z-10"
          />
          
          {/* Navegación */}
          <nav className="bg-white rounded-2xl px-6 py-3 border-4 border-rosa-principal shadow-lg z-10">
            <ul className="flex flex-wrap justify-center gap-4">
              {[
                { path: "/inicio", label: "Inicio" },
                { path: "/materias", label: "Materias" },
                { path: "/juegos", label: "Juegos" },
                { path: "/nosotros", label: "Nosotros" },
                { path: "/contactos", label: "Contacto" }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-white font-bold text-lg px-6 py-3 rounded-full bg-rosa-claro hover:bg-rosa-principal transition-all duration-300 hover:scale-110 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header