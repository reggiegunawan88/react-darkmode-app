import "./styles/main.css";
import "./styles/responsive.css";

interface Props {
  align: "left" | "right";
  subtitle1: string;
  caption1: string;
  subtitle2: string;
  caption2: string;
}

function Descriptions({
  align,
  subtitle1,
  caption1,
  subtitle2,
  caption2,
}: Props) {
  return (
    <div
      className={`subtitle-container ${
        align === "left" ? "subtitle-text-left" : "subtitle-text-right"
      }`}
    >
      <div className="subtitle-text-section">
        <span className="subtitle-text">{subtitle1}</span>
        <span className="subtitle-caption">{caption1}</span>
      </div>

      {/* Divider */}
      <div
        className={`hr-container ${
          align === "left" ? "hr-left-sided" : "hr-right-sided"
        }`}
      >
        <div className="hr-line" />
      </div>

      <div className="subtitle-text-section">
        <span className="subtitle-text">{subtitle2}</span>
        <span className="subtitle-caption">{caption2}</span>
      </div>
    </div>
  );
}

export default Descriptions;
