import React from 'react'
import dinosaurioGif from '../../assets/video/dinosaurio-34.gif'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <img 
          src={dinosaurioGif}
          alt="Cargando..." 
          className="w-32 h-32 mx-auto mb-4"
        />
        <p className="font-comic text-2xl text-rosa-principal">Cargando...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner