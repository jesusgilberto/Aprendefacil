// src/data/data.js

// Importar TODAS las imágenes de la carpeta assets/img
const images = import.meta.glob('../assets/img/*', { eager: true })

// Helper para obtener la imagen por nombre
const getImg = (file) => images[`../assets/img/${file}`]?.default

export const MENU_ITEMS = [
  { path: '/inicio', label: 'Inicio' },
  { path: '/materias', label: 'Materias' },
  { path: '/juegos', label: 'Juegos' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/contactos', label: 'Contacto' }
]

export const MATERIAS = [
  {
    titulo: "Matemáticas",
    imagen: getImg('matematicas.png'),
    descripcion: "Las matemáticas son importantes porque nos ayudan a resolver problemas cotidianos...",
    color: "from-blue-500 to-purple-600",
    icono: "🔢"
  },
  {
    titulo: "Español",
    imagen: getImg('espanol.png'),
    descripcion: "El español es importante porque nos ayuda a comunicarnos mejor...",
    color: "from-green-500 to-teal-600",
    icono: "📝"
  },
  {
    titulo: "Geografía",
    imagen: getImg('geografia.png'),
    descripcion: "La geografía es importante porque nos ayuda a entender el mundo en el que vivimos...",
    color: "from-orange-500 to-red-600",
    icono: "🌎"
  }
]

export const JUEGOS_FUTUROS = [
  {
    titulo: "Matemáticas Divertidas",
    descripcion: "Juegos interactivos para aprender operaciones matemáticas",
    icono: "➕",
    color: "from-blue-400 to-purple-500"
  },
  {
    titulo: "Aventura del Español",
    descripcion: "Aprende gramática y vocabulario jugando",
    icono: "📝",
    color: "from-green-400 to-teal-500"
  },
  {
    titulo: "Explorador Geográfico",
    descripcion: "Descubre países, capitales y banderas",
    icono: "🌎",
    color: "from-orange-400 to-red-500"
  }
]
