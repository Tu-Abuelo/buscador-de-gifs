import { useState, useEffect } from 'react'
import getTrendinGifs from '../Services/getTrendingGifs'

export function useTrendinGifs () {
  const [trendinGifs, setTrendinGifs] = useState([])

  useEffect(function () {
    getTrendinGifs().then(gif => setTrendinGifs(gif))
  }, [])

  return { trendinGifs }
}
