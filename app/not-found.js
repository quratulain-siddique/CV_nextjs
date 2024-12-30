import Link from "next/link";
export default function NotFound() {
    return (
      <div className="centerText">
        <h1  >Page Not Found</h1>
        <p  >The page you are looking for does not exist.</p>
        <br/>
        <Link  className="highlightedDiv blueColor" href="/"> Go to Home
      </Link>
      </div>
    );
  }