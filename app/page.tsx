"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  return (
    <main style={{ paddingTop: '60px' }}>
      <h1>Grace Assembly of God</h1>
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#Home">Home</a>
        <a href="#Events">Events</a>
        <a href="#Groups">Groups</a>
        <a href="#Next Steps">Next Steps</a>
        <a href="#Kids/YTH">Kids/YTH</a>
        <a href="#Learning Center">Learning Center</a>
        <a href="#About">About</a>
        <a href="#Resources">Resources</a>
        <a href="#Give">Give</a>
      </nav>
      {/* Header */}
      {/*will put a video or something here*/}

      {/* Add any other content for the landing page here */}
      {/* Centered Text */}
  <div className="centered-text">
    <p>JOIN US FOR CHURCH THIS SUNDAY!</p>
  </div>
    </main>
  );
}