import Descriptions from 'shared/components/Descriptions/Descriptions'
import Caption from 'shared/components/Caption/Caption'

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
          topCaption={<Caption title="2m+" caption="nisi ut aliquid" />}
          bottomCaption={<Caption title="100m+" caption="autem quibusdam" />}
        />
        <Descriptions
          align="right"
          topCaption={<Caption title="1k+" caption="rerum facilis" />}
          bottomCaption={<Caption title="120k" caption="libero tempore" />}
        />
      </div>
    </div>
  )
}

export default MobileView
