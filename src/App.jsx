import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-rosa-principal text-center">
          Contenido debajo del Header
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-md">
          contenido principal de la aplicacion.
        </p>
      </main>
      <Footer />
    </div>
  );
}