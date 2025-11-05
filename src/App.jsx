import Header from './components/layout/Header'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-rosa-principal text-center">
          Contenido debajo del Header
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-md">
          contenido principal de tu aplicación o las secciones de tu página.
        </p>
      </main>
    </div>
  );
}
