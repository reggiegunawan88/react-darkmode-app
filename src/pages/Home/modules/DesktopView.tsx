import Descriptions from 'shared/components/Descriptions/Descriptions'
import Caption from 'shared/components/Caption/Caption'

function DesktopView() {
  return (
    <div className="content">
      <Descriptions
        align="left"
        topCaption={<Caption title="2m+" caption="nisi ut aliquid" />}
        bottomCaption={<Caption title="100m+" caption="autem quibusdam" />}
      />
      <div className="title-text">
        <p>
          Consectetur, <span className="red-colored-text">adipisci</span> velit, sed <span className="red-colored-text">quia non</span>
        </p>
      </div>
      <Descriptions
        align="right"
        topCaption={<Caption title="1k+" caption="rerum facilis" />}
        bottomCaption={<Caption title="120k" caption="libero tempore" />}
      />
    </div>
  )
}

export default DesktopView
