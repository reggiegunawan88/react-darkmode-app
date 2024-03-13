import { ReactNode } from 'react'
import './styles/main.css'
import './styles/responsive.css'

interface Props {
  align: 'left' | 'right'
  topCaption: ReactNode
  bottomCaption: ReactNode
}

function Descriptions({ align, topCaption, bottomCaption }: Props) {
  return (
    <div className={`descriptions-container ${align === 'left' ? 'caption-text-left' : 'caption-text-right'}`}>
      {topCaption}

      {/* Divider */}
      <div className={`hr-container ${align === 'left' ? 'hr-left-sided' : 'hr-right-sided'}`}>
        <div className="hr-line" />
      </div>

      {bottomCaption}
    </div>
  )
}

export default Descriptions
