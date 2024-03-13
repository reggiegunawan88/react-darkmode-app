import { ThemeProvider } from './context/theme-context'
import Home from './pages/Home/Home'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
