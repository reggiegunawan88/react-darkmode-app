import { ReactNode } from 'react'
import './styles/main.css'
import './styles/responsive.css'

interface Props {
  align: 'left' | 'right'
  topText: ReactNode
  bottomText: ReactNode
}

function Descriptions({ align, topText, bottomText }: Props) {
  return (
    <div className={`descriptions-container ${align === 'left' ? 'subtitle-text-left' : 'subtitle-text-right'}`}>
      {topText}

      {/* Divider */}
      <div className={`hr-container ${align === 'left' ? 'hr-left-sided' : 'hr-right-sided'}`}>
        <div className="hr-line" />
      </div>

      {bottomText}
    </div>
  )
}

export default Descriptions
