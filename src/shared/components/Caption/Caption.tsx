import './styles/main.css'

interface CaptionProps {
  title: string
  caption: string
}

function Caption({ title, caption }: CaptionProps) {
  return (
    <div className="caption-text-section">
      <span className="caption-text">{title}</span>
      <span className="caption-caption">{caption}</span>
    </div>
  )
}

export default Caption
