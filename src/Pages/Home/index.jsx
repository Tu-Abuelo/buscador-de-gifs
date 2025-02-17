import React from 'react'
import { useGifs } from '../../Hooks/useGifs'
import Buscador from '../../Components/BuscadorDeGifs/BuscadorDeGifs'
import ListTrendinGifs from '../../Components/Tendencias/ListTrendinGifs'
import ListOfGifs from '../../Components/ListOfGifs/ListOfGifs'

export default function Home ({ params }) {
  const { keyword } = params
  const lastGif = window.localStorage.getItem('lastGif') || 'gatitos'
  const { gifs } = useGifs(lastGif !== undefined ? { keyword: lastGif } : { keyword })

  return (
    <>

      <Buscador />
      <ListTrendinGifs />
      <h1>Última búsqueda</h1>
      <h3>{decodeURI(lastGif)}</h3>
      <ListOfGifs gifs={gifs} />
    </>
  )
}
