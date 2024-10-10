"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";
import Link from "next/link";
import ContactForm from './components/ContactForm'; // Ensure correct path

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <header className="logo-banner">
        <h1>Grace Assembly of God</h1>
      </header>

      <nav className="navbar">
        <a href="#Home">Home</a>
        <Link href="/events">Events</Link>
        <a href="#Groups">Groups</a>
        <a href="#Next Steps">Next Steps</a>
        <a href="#Kids/YTH">Kids/YTH</a>
        <a href="#Learning Center">Learning Center</a>
        <a href="#About">About</a>
        <a href="#Resources">Resources</a>
        <a href="#Give">Give</a>
      </nav>

      <div className="centered-text">
        <p>JOIN US FOR CHURCH THIS SUNDAY!</p>
      </div>

      <ContactForm />
    </main>
  );
}