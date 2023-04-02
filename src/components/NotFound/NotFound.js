import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>Page not found</p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
