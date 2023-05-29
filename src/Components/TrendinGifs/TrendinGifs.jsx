import { useLocation } from 'wouter'
import './TrendinGifs.css'

export default function TrendinGifs ({ title }) {
  const [path, push] = useLocation()
  const handleClick = (e) => {
    push(`/${e.target.textContent}`)
  }

  return (
    <li>
      <p className='tendencias' onClick={handleClick}>{title}</p>
    </li>
  )
}
