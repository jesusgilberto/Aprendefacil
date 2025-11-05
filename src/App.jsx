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
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadApp = async () => {
      try {
        // Simular carga de recursos necesarios
        await Promise.all([
          // Aquí puedes agregar llamadas a APIs o carga de datos
          new Promise(resolve => setTimeout(resolve, 800))
        ]);
      } catch (err) {
        setError('Error al cargar la aplicación');
        console.error('Error loading app:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadApp();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">Error</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-rosa-principal text-white rounded hover:bg-rosa-oscuro"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          
          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-rosa-principal">
                Página no encontrada
              </h2>
              <p className="mt-4 text-gray-600 max-w-md">
                La página que buscas no existe.
              </p>
            </div>
          } />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}