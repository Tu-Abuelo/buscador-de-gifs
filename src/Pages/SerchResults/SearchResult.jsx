import React from 'react'
import { useGifs } from '../../Hooks/useGifs'
import Buscador from '../../Components/BuscadorDeGifs/BuscadorDeGifs'
import useNearScreen from '../../Hooks/useNearScreen'
import ListOfGifs from '../../Components/ListOfGifs/ListOfGifs'

export default function SearchResults ({ params }) {
  const { keyword, rating = 'g', lang = 'en' } = params
  const { gifs } = useGifs({ keyword, rating, lang })
  window.localStorage.setItem('lastGif', keyword)
  const { elementRef } = useNearScreen({ keyword })

  return (
    <>
      <Buscador initalKeyword={keyword} initialRating={rating} initialLang={lang} />
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
      <div ref={elementRef} />
    </>
  )
}
