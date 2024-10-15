import React from 'react'
import './Gifs.css'

function Gifs ({ title, id, url }) {
  return (
    <div className='gifs'>

      <picture>
        <p className='tittle'>{title}</p>
        <a href={url}><img alt={title} src={url} /></a>
      </picture>

    </div>
  )
}

export default React.memo(Gifs)
