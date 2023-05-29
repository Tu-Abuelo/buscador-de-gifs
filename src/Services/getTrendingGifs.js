const API_KEY = 'bpMXtHQFemqNnLncGQXHdi37WXZvE3vy'

export default function getTrendinGifs () {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
      const { data } = res
      return data
    })
}
