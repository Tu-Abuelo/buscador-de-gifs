import React from 'react'
import Gifs from '../Gifs/Gifs'
import './ListOfGifs.css'

export default function ListOfGifs ({ gifs }) {
  return (
    <section className='contain'>
      {
        gifs.map(gifes => <Gifs
          key={gifes.id}
          title={gifes.title}
          id={gifes.id}
          url={gifes.url}
                          />)
    }
    </section>
  )
}
