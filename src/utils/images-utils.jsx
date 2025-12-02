export const images = import.meta.glob('../assets/img/*', { eager: true })
export const getImg = (file) => images[`../assets/img/${file}`]?.default