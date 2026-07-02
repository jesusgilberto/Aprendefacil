import React from "react";
import ContactForm from "../components/forms/ContactForm";

const Contactos = () => {
  const handleQuickEmail = () => {
    window.location.href = "mailto:gilbertoramirez89461@gmail.com";
  };

  const handleCall = () => {
    window.location.href = "tel:+526692229506";
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-azul-principal">
          Contacto
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* TARJETA IZQUIERDA*/}
          <div className="lg:w-[400px] w-full">
            <div className="bg-white/95 rounded-2xl shadow-lg border-4 border-azul-claro p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1">Teléfono</h3>
                  <p className="text-gray-600 text-sm">+52 669 222 9506</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">gilbertoramirez89461@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1">Ubicación</h3>
                  <p className="text-gray-600 text-sm">Mazatlán, Sinaloa, México</p>
                </div>

                <div className="pt-3">
                  <h3 className="text-base font-bold text-gray-800 mb-3">
                    Contacto Rápido
                  </h3>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleQuickEmail}
                      className="bg-amarillo-soleado hover:bg-amarillo-oscuro text-gray-800 font-medium py-2 px-4 rounded-lg transition text-sm shadow"
                    >
                      Email Rápido
                    </button>

                    <button
                      onClick={handleCall}
                      className="border-2 border-azul-principal text-azul-principal hover:bg-azul-claro font-medium py-2 px-4 rounded-lg transition text-sm"
                    >
                      Llamar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TARJETA DERECHA */}
          <div className="lg:w-[400px] w-full">
            <div className="bg-white/95 rounded-2xl shadow-lg border-4 border-rosa-claro p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;