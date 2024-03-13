import Descriptions from 'components/Descriptions/Descriptions'
import Subtitle from 'components/Subtitle/Subtitle'

function MobileView() {
  return (
    <div className="content">
      <div className="title-text">
        <p>
          Consectetur, <span className="red-colored-text">adipisci</span> velit, sed <span className="red-colored-text">quia non</span>
        </p>
      </div>
      <div className="descriptions-section">
        <Descriptions
          align="left"
          topText={<Subtitle title="2m+" caption="nisi ut aliquid" />}
          bottomText={<Subtitle title="100m+" caption="autem quibusdam" />}
        />
        <Descriptions
          align="right"
          topText={<Subtitle title="1k+" caption="rerum facilis" />}
          bottomText={<Subtitle title="120k" caption="libero tempore" />}
        />
      </div>
    </div>
  )
}

export default MobileView
