import React from 'react'
import './Gifs.css'

function Gifs ({ title, id, url }) {
  return (
    <div className='gifs'>

      <p className='tittle'>{title}</p>
      <picture>
        <img alt={title} src={url} />
      </picture>

    </div>
  )
}

export default React.memo(Gifs)
