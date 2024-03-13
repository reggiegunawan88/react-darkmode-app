import Descriptions from 'components/Descriptions/Descriptions'
import Subtitle from 'components/Subtitle/Subtitle'

function DesktopView() {
  return (
    <div className="content">
      <Descriptions
        align="left"
        topText={<Subtitle title="2m+" caption="nisi ut aliquid" />}
        bottomText={<Subtitle title="100m+" caption="autem quibusdam" />}
      />
      <div className="title-text">
        <p>
          Consectetur, <span className="red-colored-text">adipisci</span> velit, sed <span className="red-colored-text">quia non</span>
        </p>
      </div>
      <Descriptions
        align="right"
        topText={<Subtitle title="1k+" caption="rerum facilis" />}
        bottomText={<Subtitle title="120k" caption="libero tempore" />}
      />
    </div>
  )
}

export default DesktopView
