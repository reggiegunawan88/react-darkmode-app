import './styles/main.css'

interface SubtitleProps {
  title: string
  caption: string
}

function Subtitle({ title, caption }: SubtitleProps) {
  return (
    <div className="subtitle-text-section">
      <span className="subtitle-text">{title}</span>
      <span className="subtitle-caption">{caption}</span>
    </div>
  )
}

export default Subtitle
