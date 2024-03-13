import { useEffect, useState } from 'react'

const useMobile = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768)

  function handleWindowSizeChange() {
    setMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return { mobile }
}

export default useMobile
