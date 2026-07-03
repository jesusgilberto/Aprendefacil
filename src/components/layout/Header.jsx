import React from "react";
import { Link, useLocation } from "react-router-dom";
import aprendeImage from "/src/assets/img/aprende.png";

const Header = ({ onLoadingChange }) => {
  const location = useLocation();

  const handleNavigation = () => {
    onLoadingChange(true);
    setTimeout(() => onLoadingChange(false), 800);
  };

  const menuItems = [
    { path: '/inicio', label: 'Inicio' },
    { path: "/aprendealgonuevo", label: "Aprende algo nuevo" },
    { path: "/juegos", label: "Juegos" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/contactos", label: "Contacto" },
  ];

  return (
    <header className="w-full bg-white/75 backdrop-blur-md shadow-md border-b-2 border-azul-claro fixed top-0 left-0 z-50 animate-gradient-x">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo + Título */}
        <Link
          to="/inicio"
          onClick={handleNavigation}
          className="flex items-center gap-3"
        >
          <img
            src={aprendeImage}
            alt="Logo Aprende Fácil"
            className="w-10 h-10 md:w-12 md:h-12 rounded-md"
          />
          <h1 className="font-semibold text-lg md:text-xl text-gray-800">
            <span className="text-azul-principal">Aprende</span>{" "}
            <span className="text-lila-oscuro font-bold">Fácil</span>
          </h1>
        </Link>

        {/* Navegación */}
        <nav>
          <ul className="flex gap-3 md:gap-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleNavigation}
                  className={`px-3 py-2 text-sm md:text-base rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-azul-principal text-white font-semibold shadow"
                      : "text-gray-700 hover:text-azul-principal hover:bg-azul-claro/50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
