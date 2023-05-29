const API_KEY = 'bpMXtHQFemqNnLncGQXHdi37WXZvE3vy'

export default function getGifs ({ keyword = 'random', page = 0, rating = 'g', lang = 'en', limit = 2 }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
      const { data } = res
      const gifs = data.map(image => {
        const { images, id, title } = image
        const { url } = images.downsized

        return { title, url, id }
      })

      return gifs
    })
}
