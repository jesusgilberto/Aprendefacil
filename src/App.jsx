import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Inicio from './pages/Inicio';
import Materias from './pages/Materias';
import Juegos from './pages/Juegos';
import Nosotros from './pages/Nosotros';
import Contactos from './pages/Contactos';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 flex flex-col items-center">
        <Routes>
          <Route path="/" element={
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-rosa-principal">
                Contenido debajo del Header
              </h2>
              <p className="mt-4 text-gray-600 max-w-md">
                contenido principal de la aplicacion.
              </p>
            </div>
          } />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}