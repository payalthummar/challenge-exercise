import { Link } from "react-router-dom";
import "../footer/footer.css";
import { RiShareBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-item-container">
        <div className="footer-item">
          <div className="footer-title">Docs</div>
          <ul className="list-link-item">
            <li>
              <Link to="/docs">Get Started</Link>
            </li>
            <li>
              <Link to="/docs">Learn React</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <div className="footer-title">Community</div>
          <ul className="list-link-item">
            <li>
              <Link to="/docs">
                Stack Overflow <RiShareBoxFill />
              </Link>
            </li>
            <li>
              <Link to="/docs">
                GitHub Discussions <RiShareBoxFill />
              </Link>
            </li>
            <li>
              <Link to="/docs">
                Twitter <RiShareBoxFill />
              </Link>
            </li>
            <li>
              <Link to="/docs">
                Contributor Covenant <RiShareBoxFill />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <div className="footer-title">Docs</div>
          <ul className="list-link-item">
            <li>
              <Link to="/docs">
                GitHub <RiShareBoxFill />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">Copyright @ 2023 by Payal Thummar</p>
    </footer>
  );
}
