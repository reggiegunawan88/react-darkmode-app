import { useContext } from "react";
import Button from "components/Button/Button";
import Descriptions from "components/Descriptions/Descriptions";
import { ThemeContext } from "context/theme-context";
import "./styles/main.css";
import "./styles/responsive.css";

function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="root-container" data-theme={isDarkMode ? "dark" : "light"}>
      <div className="main-container">
        {/* Top title section */}
        <span className="top-title-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam
        </span>

        {/* Content section */}
        <div className="content">
          <Descriptions
            align="left"
            subtitle1="2m+"
            caption1="nisi ut aliquid"
            subtitle2="100m+"
            caption2="autem quibusdam"
          />
          <div className="title-text">
            <p>
              Consectetur, <span className="red-colored-text">adipisci</span>{" "}
              velit, sed <span className="red-colored-text">quia non</span>
            </p>
          </div>
          <Descriptions
            align="right"
            subtitle1="1k+"
            caption1="rerum facilis"
            subtitle2="120k"
            caption2="libero tempore"
          />
        </div>

        {/* Button section */}
        <div className="button-section">
          <Button
            text={isDarkMode ? "toggle light mode" : "toggle dark mode"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
