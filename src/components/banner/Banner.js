import "./banner.css";
import ReactLogo from "../../assets/create-react-app.svg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner-container">
      <img src={ReactLogo} alt="Create-React-App" style={{ width: "100px" }} />
      <h1>Create React App</h1>
      <p>Set up a modern web app by running one command</p>
      <Link to="/docs" className="banner-btn">
        Get Started
      </Link>
    </div>
  );
}
