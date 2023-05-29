import React from 'react'
import TrendinGifs from '../TrendinGifs/TrendinGifs'
import { useTrendinGifs } from '../../Hooks/useTendenciesGifs'
import './ListTrendinGifs.css'

export default function ListTrendinGifs () {
  const gifs = useTrendinGifs()

  return (
    <>
      <h2>Tendencias</h2>
      <ul className='gifs-contain'>
        {gifs.trendinGifs.map(gifes => <TrendinGifs
          key={gifes}
          title={gifes}
                                       />)}
      </ul>
    </>
  )
}
