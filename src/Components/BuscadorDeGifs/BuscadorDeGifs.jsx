import React from 'react'
import './BuscadorDeGifs.css'
import { useLocation } from 'wouter'
import { FaHome } from 'react-icons/fa'
import useUpdate from './useUpdate'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGS = ['en', 'es', 'pt']

function Buscador ({ initalKeyword = '', initialRating = 'g', initialLang = 'en' }) {
  const [path, push] = useLocation()
  const { keyword, rating, lang, updateKeyword, updateRating, updateLang } = useUpdate({ initalKeyword, initialLang, initialRating })

  const handleSubmit = (e) => {
    e.preventDefault()
    push(`/${keyword}/${rating}/${lang}`)
  }

  const returnHmome = (e) => {
    e.preventDefault()
    push('/')
  }

  const handleKeywordChange = (e) => {
    updateKeyword(e.target.value)
  }

  const handelRatingChange = (e) => {
    updateRating(e.target.value)
  }

  const handelLangChange = (e) => {
    updateLang(e.target.value)
  }

  return (
    <header className='header'>
      <form onSubmit={handleSubmit} className='header-form'>
        <button className='buscar'>Buscar</button>
        <input onChange={handleKeywordChange} value={keyword} className='buscador' placeholder='Introdusca el gif' />
        <select onChange={handelRatingChange} value={rating} className='options'>
          <option disabled>Rating</option>
          {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
        </select>
        <select onChange={handelLangChange} value={lang} className='options'>
          <option disabled>Idiomas</option>
          {LANGS.map(lang => <option key={lang}>{lang}</option>)}
        </select>
      </form>

      <button className='returnHome' onClick={returnHmome}><FaHome className='icon' /></button>
    </header>
  )
}

export default React.memo(Buscador)
