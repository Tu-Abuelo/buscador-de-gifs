import { useContext, useEffect, useState } from 'react'
import getGifs from '../Services/getGifs'
import GifsContext from '../Context/GifsContext'

export function useGifs ({ keyword, rating, lang }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(0)

  useEffect(() => {
    getGifs({ keyword, rating, lang })
      .then(gif => setGifs(gif))
  }, [keyword, rating, lang])

  useEffect(function () {
    if (page === 0) return
    getGifs({ keyword, page, rating, lang })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
      })
  }, [page, keyword, rating, lang])

  return { gifs, setPage, rating, lang }
}
