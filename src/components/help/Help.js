import "../help/help.css";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";

export default function Help() {
  return (
    <>
      <Banner />
      <p>
        If you need any help, please visit this link:
        <Link to="https://react.dev/community">React Documentation</Link>
      </p>
    </>
  );
}
