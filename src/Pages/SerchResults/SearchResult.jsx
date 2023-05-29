import React from 'react'

import Buscador from '../../Components/BuscadorDeGifs/BuscadorDeGifs'
import useNearScreen from '../../Hooks/useNearScreen'

export default function SearchResults ({ params }) {
  const { keyword, rating = 'g', lang = 'en' } = params

  window.localStorage.setItem('lastGif', keyword)
  const { elementRef } = useNearScreen({ keyword })

  return (
    <>
      <Buscador initalKeyword={keyword} initialRating={rating} initialLang={lang} />
      <h3>{decodeURI(keyword)}</h3>

      <div ref={elementRef} />
    </>
  )
}
