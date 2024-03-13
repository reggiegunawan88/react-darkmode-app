import { useContext } from 'react'
import { ThemeContext } from 'context/theme-context'
import './styles/main.css'

function Button({ text }: { text: string }) {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <button className="btn-style" onClick={toggleTheme}>
      {text}
    </button>
  )
}

export default Button
