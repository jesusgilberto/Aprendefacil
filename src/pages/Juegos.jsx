import React, { useMemo, useState } from "react";

const JUEGOS_SENCILLOS = [
  {
    id: "numeros",
    titulo: "Números rápidos",
    icono: "🔢",
    color: "from-azul-principal to-lila-oscuro",
    preguntas: [
      {
        instruccion: "¿Cuál número sigue después del 7?",
        opciones: ["6", "8", "10"],
        correcta: "8",
        respuesta: "El número 8 continúa la secuencia de forma correcta.",
      },
      {
        instruccion: "¿Cuánto es 2 + 3?",
        opciones: ["4", "5", "6"],
        correcta: "5",
        respuesta: "La suma de 2 + 3 es 5.",
      },
      {
        instruccion: "¿Qué grupo tiene más objetos?",
        opciones: ["Un grupo con 3", "Un grupo con 5", "Ambos iguales"],
        correcta: "Un grupo con 5",
        respuesta: "El grupo con 5 objetos tiene más que el de 3.",
      },
      {
        instruccion: "¿Qué número es menor?",
        opciones: ["9", "2", "7"],
        correcta: "2",
        respuesta: "El número 2 es el menor de las opciones.",
      },
      {
        instruccion: "¿Qué viene antes del 10?",
        opciones: ["8", "9", "11"],
        correcta: "9",
        respuesta: "El número 9 va justo antes del 10.",
      },
    ],
  },
  {
    id: "palabras",
    titulo: "Palabra correcta",
    icono: "📝",
    color: "from-verde-mint to-azul-principal",
    preguntas: [
      {
        instruccion: "Completa la frase: Me gusta leer ____.",
        opciones: ["libros", "nubes", "sillas"],
        correcta: "libros",
        respuesta: "Leer libros es la opción que completa la oración.",
      },
      {
        instruccion: "¿Cuál de estas es una palabra corta?",
        opciones: ["elefante", "sol", "mariposa"],
        correcta: "sol",
        respuesta: "Sol es una palabra corta y fácil de leer.",
      },
      {
        instruccion: "¿Qué signo termina una oración?",
        opciones: ["Coma", "Punto", "Dos puntos"],
        correcta: "Punto",
        respuesta: "El punto se usa para terminar una oración.",
      },
      {
        instruccion: "¿Cuál palabra empieza con M?",
        opciones: ["Mesa", "Casa", "Libro"],
        correcta: "Mesa",
        respuesta: "Mesa empieza con la letra M.",
      },
      {
        instruccion: "¿Qué podemos hacer con las palabras?",
        opciones: ["Leer y escribir", "Solo dibujar", "Solo saltar"],
        correcta: "Leer y escribir",
        respuesta: "Las palabras nos ayudan a leer y escribir ideas.",
      },
    ],
  },
  {
    id: "mundo",
    titulo: "Mundo cercano",
    icono: "🌎",
    color: "from-amarillo-soleado to-rosa-principal",
    preguntas: [
      {
        instruccion: "¿Qué lugar sirve para aprender con maestros y amigos?",
        opciones: ["Escuela", "Bosque", "Playa"],
        correcta: "Escuela",
        respuesta: "La escuela es el lugar correcto para aprender y compartir.",
      },
      {
        instruccion: "¿Cuál de estos es un lugar natural?",
        opciones: ["Montaña", "Mesa", "Puerta"],
        correcta: "Montaña",
        respuesta: "La montaña es un lugar natural.",
      },
      {
        instruccion: "¿Qué usamos para orientarnos?",
        opciones: ["Mapa", "Papel de regalo", "Pintura"],
        correcta: "Mapa",
        respuesta: "El mapa nos ayuda a ubicarnos mejor.",
      },
      {
        instruccion: "¿Qué es parte de una comunidad?",
        opciones: ["Casa", "Nube", "Estrella"],
        correcta: "Casa",
        respuesta: "La casa forma parte de los espacios cercanos de la comunidad.",
      },
      {
        instruccion: "¿Qué aprendemos del mundo cercano?",
        opciones: ["Lugares y costumbres", "Solo colores", "Solo canciones"],
        correcta: "Lugares y costumbres",
        respuesta: "Aprendemos lugares y costumbres de nuestro entorno.",
      },
    ],
  },
];

const Juegos = () => {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(JUEGOS_SENCILLOS[0]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState("");
  const [mensaje, setMensaje] = useState("Elige un juego y responde una pregunta sencilla.");

  const preguntaSeleccionada = juegoSeleccionado.preguntas[preguntaActual];

  const esCorrecta = useMemo(() => {
    if (!respuestaSeleccionada) {
      return null;
    }

    return respuestaSeleccionada === preguntaSeleccionada.correcta;
  }, [preguntaSeleccionada.correcta, respuestaSeleccionada]);

  const seleccionarJuego = (juego) => {
    setJuegoSeleccionado(juego);
    setPreguntaActual(0);
    setRespuestaSeleccionada("");
    setMensaje("Elige una respuesta para empezar.");
  };

  const responder = (opcion) => {
    setRespuestaSeleccionada(opcion);

    if (opcion === preguntaSeleccionada.correcta) {
      setMensaje(`Correcto. ${preguntaSeleccionada.respuesta}`);
      return;
    }

    setMensaje("Todavía no. Intenta otra opción.");
  };

  const irAnterior = () => {
    setPreguntaActual((pregunta) => Math.max(pregunta - 1, 0));
    setRespuestaSeleccionada("");
    setMensaje("Elige una respuesta para empezar.");
  };

  const irSiguiente = () => {
    setPreguntaActual((pregunta) => Math.min(pregunta + 1, juegoSeleccionado.preguntas.length - 1));
    setRespuestaSeleccionada("");
    setMensaje("Elige una respuesta para empezar.");
  };

  return (
    <div className="w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(200,140,255,0.12)] backdrop-blur lg:p-10">
        <div className="max-w-3xl text-left">
          <span className="inline-flex rounded-full bg-rosa-claro px-4 py-2 text-sm font-semibold text-rosa-oscuro">
            Jugar también es aprender
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Juegos sencillos para practicar y divertirse
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Elige un juego, responde la pregunta y recibe una respuesta inmediata. Todo está
            organizado dentro de un solo contenedor para que sea fácil explorar cada actividad.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Elige', text: 'Selecciona un juego sencillo desde la barra lateral.' },
            { title: 'Responde', text: 'Marca la opción que creas correcta.' },
            { title: 'Comprueba', text: 'Recibe una respuesta clara al instante.' },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-800">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 sm:p-5">
            <h2 className="text-lg font-bold text-slate-800">Juegos</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Selecciona uno para mostrar su contenido.</p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {JUEGOS_SENCILLOS.map((juego) => {
                const activo = juego.id === juegoSeleccionado.id;

                return (
                  <button
                    key={juego.id}
                    type="button"
                    onClick={() => seleccionarJuego(juego)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      activo
                        ? 'border-rosa-principal bg-white shadow-md'
                        : 'border-slate-200 bg-white/70 hover:border-rosa-claro hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rosa-claro text-lg">
                        {juego.icono}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">{juego.titulo}</h3>
                        <p className="text-xs leading-5 text-slate-500">{juego.instruccion}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="rounded-3xl bg-gradient-to-br from-white to-rosa-claro/40 p-4 shadow-[0_20px_50px_rgba(200,140,255,0.12)] sm:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-white p-4 ring-1 ring-slate-100 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosa-oscuro">
                    Juego activo
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-800">{juegoSeleccionado.titulo}</h2>
                </div>
                <span className="inline-flex self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {preguntaActual + 1} / {juegoSeleccionado.preguntas.length}
                </span>
              </div>

              <article
                className={`mt-4 rounded-[1.5rem] bg-linear-to-r ${juegoSeleccionado.color} p-5 text-white shadow-lg`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">{juegoSeleccionado.icono} Pregunta {preguntaActual + 1}</h3>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Responde
                  </span>
                </div>

                <p className="mt-4 text-base leading-7 text-white/95">{preguntaSeleccionada.instruccion}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {preguntaSeleccionada.opciones.map((opcion) => {
                    const activo = respuestaSeleccionada === opcion;

                    return (
                      <button
                        key={opcion}
                        type="button"
                        onClick={() => responder(opcion)}
                        className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                          activo
                            ? 'border-white bg-white text-slate-800 shadow-md'
                            : 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {opcion}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl bg-white/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    5 preguntas en este juego
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/95">
                    Vuelve a usar los botones para avanzar pregunta por pregunta.
                  </p>
                </div>
              </article>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <p className={`text-sm font-semibold ${esCorrecta === true ? 'text-verde-oscuro' : esCorrecta === false ? 'text-rosa-oscuro' : 'text-slate-600'}`}>
                  {mensaje}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">Avanza por las 5 preguntas del juego actual.</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={irAnterior}
                    disabled={preguntaActual === 0}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-rosa-claro hover:text-rosa-oscuro disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={irSiguiente}
                    disabled={preguntaActual === juegoSeleccionado.preguntas.length - 1}
                    className="rounded-full bg-rosa-principal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rosa-oscuro disabled:cursor-not-allowed disabled:opacity-40"
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
  );
};

export default Juegos;
