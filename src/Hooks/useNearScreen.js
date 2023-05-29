import { useEffect, useRef } from 'react'
import { useGifs } from './useGifs'

export default function useNearScreen ({ keyword }) {
  const elementRef = useRef()
  const { setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  useEffect(function () {
    const onChange = (entries, observer) => {
      const element = entries[0]
      if (element.isIntersecting) {
        handleNextPage()
      }
    }

    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(onChange, { rootMargin: '150px' })
    observer.observe(elementRef.current)
  }, [])

  return { elementRef }
}
