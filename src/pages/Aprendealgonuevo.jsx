import React, { useState } from 'react'

const LIBRO_DE_TEMAS = [
  {
    titulo: 'Números y cantidades',
    icono: '🔢',
    color: 'from-azul-principal to-lila',
    resumen:
      'Descubre cómo contar, comparar y resolver pequeñas situaciones usando números.',
    paginas: [
      'El número cero no siempre existió. Durante miles de años, muchas civilizaciones contaban sin utilizar el 0. Fueron matemáticos de la India quienes desarrollaron el concepto del cero como un número, lo que revolucionó las matemáticas.Un "googol" es un número real.',
      'Identificar números en la vida diaria, como en edades, casas o calendarios.',
      'Comparar más, menos e igual usando ejemplos simples y cercanos.',
      'Resolver sumas y restas cortas con apoyo visual y paso a paso.',
      'Reconocer patrones numéricos para encontrar secuencias y ordenar ideas.',
    ],
  },
  {
    titulo: 'Palabras y lecturas',
    icono: '📝',
    color: 'from-verde-mint to-azul-principal',
    resumen:
      'Practica lectura, escritura y comprensión con actividades claras y divertidas.',
    paginas: [
      'Leer palabras cortas en voz alta para ganar seguridad y fluidez.',
      'Reconocer sílabas para formar nuevas palabras y ampliar el vocabulario.',
      'Entender mensajes breves y descubrir la idea principal de un texto.',
      'Escribir oraciones sencillas con mayúscula inicial y punto final.',
      'Usar palabras nuevas en ejemplos propios para recordar mejor lo aprendido.',
    ],
  },
  {
    titulo: 'Mundo y entorno',
    icono: '🌎',
    color: 'from-amarillo-soleado to-rosa-principal',
    resumen:
      'Explora lugares, paisajes y costumbres para entender mejor el mundo que te rodea.',
    paginas: [
      'Reconocer tu casa, tu escuela y los espacios importantes de tu comunidad.',
      'Distinguir paisajes como montañas, ríos, playas y ciudades.',
      'Identificar elementos naturales y elementos hechos por las personas.',
      'Ubicar puntos de referencia cercanos para orientarte mejor en un mapa simple.',
      'Conocer diferentes costumbres y valorar la diversidad de lugares y personas.',
    ],
  },
]

const AprendeAlgoNuevo = () => {
  const [temaSeleccionado, setTemaSeleccionado] = useState(LIBRO_DE_TEMAS[0])
  const [paginaActual, setPaginaActual] = useState(0)
  const [direccionAnimacion, setDireccionAnimacion] = useState('next')

  const paginaActualTexto = temaSeleccionado.paginas[paginaActual]
  const cambiarTema = (tema) => {
    setTemaSeleccionado(tema)
    setPaginaActual(0)
    setDireccionAnimacion('next')
  }

  const irAnterior = () => {
    setDireccionAnimacion('prev')
    setPaginaActual((pagina) => Math.max(pagina - 1, 0))
  }

  const irSiguiente = () => {
    setDireccionAnimacion('next')
    setPaginaActual((pagina) => Math.min(pagina + 1, temaSeleccionado.paginas.length - 1))
  }

  return (
    <div className="w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(102,191,255,0.12)] backdrop-blur sm:p-6 lg:p-8">
        <div className="max-w-3xl text-left">
          <span className="inline-flex rounded-full bg-azul-claro px-4 py-2 text-sm font-semibold text-azul-oscuro">
            Aprende algo nuevo a tu ritmo
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Elige un tema y recorre sus ideas paso a paso
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Selecciona entre números y cantidades, palabras y lecturas, o mundo y entorno.
            Cada tema tiene cinco ideas clave para revisar sin que la sección se vea demasiado larga.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Selecciona', text: 'Cambia de tema con un clic.' },
            { title: 'Explora', text: 'Mira cinco ideas cortas por tema.' },
            { title: 'Navega', text: 'Avanza o retrocede entre hojas.' },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-800">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 sm:p-5">
            <h2 className="text-lg font-bold text-slate-800">Temas</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Elige uno para mostrar su contenido.</p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {LIBRO_DE_TEMAS.map((tema) => {
                const activo = tema.titulo === temaSeleccionado.titulo

                return (
                  <button
                    key={tema.titulo}
                    type="button"
                    onClick={() => cambiarTema(tema)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      activo
                        ? 'border-azul-principal bg-white shadow-md'
                        : 'border-slate-200 bg-white/70 hover:border-azul-claro hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-azul-claro text-lg">
                        {tema.icono}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">{tema.titulo}</h3>
                        <p className="text-xs leading-5 text-slate-500">{tema.resumen}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </aside>

          <div className="rounded-3xl bg-gradient-to-br from-white to-azul-claro/35 p-4 shadow-[0_20px_50px_rgba(46,151,232,0.12)] sm:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-white p-4 ring-1 ring-slate-100 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-azul-oscuro">
                    Contenido activo
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-800">{temaSeleccionado.titulo}</h2>
                </div>
                <span className="inline-flex self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {paginaActual + 1} / {temaSeleccionado.paginas.length}
                </span>
              </div>

              <article
                key={`${temaSeleccionado.titulo}-${paginaActual}-${direccionAnimacion}`}
                className={`mt-4 rounded-[1.5rem] bg-linear-to-r ${temaSeleccionado.color} p-5 text-white shadow-lg ${
                  direccionAnimacion === 'next' ? 'book-flip-next' : 'book-flip-prev'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">{temaSeleccionado.icono} Hoja {paginaActual + 1}</h3>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Lee y pasa la hoja
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-white/95">
                  {paginaActualTexto}
                </p>
              </article>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">Usa los botones para ver una idea a la vez.</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={irAnterior}
                    disabled={paginaActual === 0}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-azul-claro hover:text-azul-oscuro disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={irSiguiente}
                    disabled={paginaActual === temaSeleccionado.paginas.length - 1}
                    className="rounded-full bg-azul-principal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-azul-oscuro disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AprendeAlgoNuevo
