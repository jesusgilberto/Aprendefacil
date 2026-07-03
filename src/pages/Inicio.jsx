import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className="w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(102,191,255,0.15)] backdrop-blur">
        <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center rounded-full bg-azul-claro px-4 py-2 text-sm font-semibold text-azul-oscuro">
              Aprende jugando, explora con curiosidad
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Un espacio divertido para descubrir algo nuevo cada día
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                AprendeFácil es un sitio donde encontrarás información general explicada 
                de forma sencilla. Descubre datos, conceptos y temas útiles que pueden ayudarte 
                a aprender algo nuevo cada día.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/aprendealgonuevo"
                className="inline-flex items-center justify-center rounded-full bg-azul-principal px-6 py-3 text-base font-semibold text-white shadow-lg shadow-azul-principal/25 transition hover:-translate-y-0.5 hover:bg-azul-oscuro"
              >
                Aprende algo nuevo
              </Link>
              <Link
                to="/juegos"
                className="inline-flex items-center justify-center rounded-full border border-rosa-principal/30 bg-white px-6 py-3 text-base font-semibold text-rosa-oscuro transition hover:-translate-y-0.5 hover:border-rosa-principal hover:bg-rosa-claro/40"
              >
                Explorar juegos
              </Link>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {[
                { title: 'Aprendizaje guiado', text: 'Recursos simples para avanzar paso a paso.' },
                { title: 'Contenido visual', text: 'Colores y tarjetas pensadas para captar atención.' },
                { title: 'Actividades prácticas', text: 'Ejercicios y retos para reforzar lo aprendido.' },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-gradient-to-br from-white to-azul-claro/40 p-4 shadow-sm ring-1 ring-slate-100"
                >
                  <h2 className="text-sm font-bold uppercase tracking-wide text-slate-800">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-amarillo-soleado/25 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-azul-claro via-white to-rosa-claro p-6 shadow-[0_18px_50px_rgba(46,151,232,0.15)] ring-1 ring-white/80">
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-azul-oscuro">
                  Ruta rápida
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-800">
                  Todo lo esencial en un solo lugar
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Accede a materias, juegos, información del proyecto y datos de contacto desde
                  una sola experiencia visual.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    { label: 'Aprende algo nuevo', href: '/aprendealgonuevo', tone: 'bg-azul-claro text-azul-oscuro' },
                    { label: 'Juegos', href: '/juegos', tone: 'bg-rosa-claro text-rosa-oscuro' },
                    { label: 'Nosotros', href: '/nosotros', tone: 'bg-verde-mint/30 text-verde-oscuro' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${item.tone}`}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio