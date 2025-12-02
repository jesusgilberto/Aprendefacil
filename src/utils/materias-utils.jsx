import { getImg } from './images-utils'

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