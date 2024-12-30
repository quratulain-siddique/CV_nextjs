"use client";
import Link from "next/link";
import Image from "next/image";

export default function Error() {
    return (
        <div className="centerText">
          <h1  >Error Ecountered</h1>
          <p  >The content you are looking for encountered an error.</p>
          <br/>
          <Link  className="highlightedDiv blueColor" href="/"> Go to Home
        </Link>
        </div>
      );
  }