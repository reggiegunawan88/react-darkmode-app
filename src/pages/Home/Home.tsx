import React, { Suspense, useContext } from 'react'
import { ThemeContext } from 'context/theme-context'
import useMobile from 'shared/hooks/useMobile'
import Button from 'shared/components/Button/Button'
import './styles/main.css'
import './styles/responsive.css'

const DesktopView = React.lazy(() => import('./modules/DesktopView'))
const MobileView = React.lazy(() => import('./modules/MobileView'))

function Home() {
  const { isDarkMode } = useContext(ThemeContext)
  const { isMobile } = useMobile()

  return (
    <div className="root-container" data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className="main-container">
        {/* Top title section */}
        <span className="top-title-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
        </span>

        {/* Content section */}
        <Suspense>{isMobile ? <MobileView /> : <DesktopView />}</Suspense>

        {/* Button section */}
        <div className="button-section">
          <Button text={isDarkMode ? 'toggle light mode' : 'toggle dark mode'} />
        </div>
      </div>
    </div>
  )
}

export default Home
