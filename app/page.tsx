"use client";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";
import Link from "next/link";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  return (
    <main>
      {/* Header for logo or title */}
      <header className="logo-banner">
        <h1>Grace Assembly of God</h1> {/* You can replace this with an actual logo image */}
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#Home">Home</a>
        <Link href="/events">Events</Link> {/* Corrected link here */}
        <a href="#Groups">Groups</a>
        <a href="#Next Steps">Next Steps</a>
        <a href="#Kids/YTH">Kids/YTH</a>
        <a href="#Learning Center">Learning Center</a>
        <a href="#About">About</a>
        <a href="#Resources">Resources</a>
        <a href="#Give">Give</a>
      </nav>

      {/* Centered Text */}
      <div className="centered-text">
        <p>JOIN US FOR CHURCH THIS SUNDAY!</p>
      </div>
    </main>
  );
}