"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";
import './App.css'; // Adjust this path if your CSS file is in a different folder

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  return (
    <main>
    {/* Navigation Bar */}
    { padding-top: 60px; /* Adjust this value based on your navbar height */}
    <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>

    {/* Header */}
    <div className="container"></div>
    <h1 className="right-heading">Grace Assembly of God</h1>
    <h2 className="right-heading">Spring City, PA</h2>
    {/* Add any other content for the landing page here */}
    </div>
  </main>
);
}
