import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 640

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT)

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return { isMobile }
}

export default useMobile
