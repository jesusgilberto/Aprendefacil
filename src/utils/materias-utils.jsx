import { getImg } from './images-utils'

export const MATERIAS = [
  {
    titulo: "Matemáticas",
    imagen: getImg('matematicas.png'),
    descripcion: "Las matemáticas son importantes porque nos ayudan a resolver problemas cotidianos...",
    color: "from-azul-principal to-lila",
    icono: "🔢"
  },
  {
    titulo: "Español",
    imagen: getImg('espanol.png'),
    descripcion: "El español es importante porque nos ayuda a comunicarnos mejor...",
    color: "from-verde-mint to-azul-principal",
    icono: "📝"
  },
  {
    titulo: "Geografía",
    imagen: getImg('geografia.png'),
    descripcion: "La geografía es importante porque nos ayuda a entender el mundo en el que vivimos...",
    color: "from-amarillo-soleado to-rosa-principal",
    icono: "🌎"
  }
]