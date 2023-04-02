import { useTheme } from "../../context/ThemeContext";
import "../home/home.css";
import gif from "../../assets/create-react-app-gif.svg";
import dependecies from "../../assets/dependecies.png";
import Banner from "../banner/Banner";
import { useState } from "react";

export default function Home() {
  const { themeStyles } = useTheme();
  const [showText, setShowText] = useState(false);

  // Mouse hover and Mouse Leave functionality to copy the code

  const handleMouseEnter = () => {
    setShowText(!showText);
  };
  const handleMouseLeave = () => {
    setShowText(showText);
  };

  return (
    <>
      <Banner />
      <div
        className="home-container"
        style={{ background: themeStyles.bg, color: themeStyles.text }}
      >
        <div className="card">
          <p className="title">Less to Learn</p>
          <p>
            You don't need to learn and configure many build tools. Instant
            reloads help you focus on development. When it's time to deploy,
            your bundles are optimized automatically.
          </p>
        </div>
        <div className="card">
          <p className="title">Only One Dependency</p>
          <p>
            Your app only needs one build dependency. We test Create React App
            to make sure that all of its underlying pieces work together
            seamlessly – no complicated version mismatches.
          </p>
        </div>
        <div className="card">
          <p className="title">No Lock-In</p>
          <p>
            Under the hood, we use webpack, Babel, ESLint, and other amazing
            projects to power your app. If you ever want an advanced
            configuration, you can ”eject” from Create React App and edit their
            config files directly.
          </p>
        </div>
      </div>
      <div
        className="info"
        style={{ background: themeStyles.bg, color: themeStyles.text }}
      >
        <div className="react-app-info">
          <h1>Get started in seconds</h1>
          <p>
            Whether you’re using React or another library, Create React App lets
            you <b>focus on code, not build tools.</b>
          </p>
          <p>
            To create a project called <i>my-app</i> , run this command:
          </p>
          <div
            className="code-info"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>npx create-react-app my-app</span>
            {showText && <span className="hover-text">copy</span>}
          </div>
        </div>
        <div className="react-svg">
          <img src={gif} alt="React Gif" />
        </div>
      </div>
      <div
        className="install-container"
        style={{ background: themeStyles.bg, color: themeStyles.text }}
      >
        <div className="dependency">
          <img
            src={dependecies}
            alt="dev-Dependencies"
            className="dependecy-img"
          />
        </div>
        <div className="react-install-info">
          <h1>Easy to Maintain</h1>
          <p>
            Updating your build tooling is typically a daunting and
            time-consuming task. When new versions of Create React App are
            released, you can upgrade using a single command:
          </p>

          <div
            className="code-info"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>npm install react-scripts@latest</span>
            {showText && <span className="hover-text">copy</span>}
          </div>
        </div>
      </div>
    </>
  );
}
