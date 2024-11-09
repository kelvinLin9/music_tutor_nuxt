export default defineEventHandler((event) => {
  const data = {
    message: 'Hello World'
  }
  return { data }
})