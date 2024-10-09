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
    <main>
    {/* Navigation Bar */}
    { padding-top: 60px; /* Adjust this value based on your navbar height */}
    <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> a </meta>
    {/* Header */}
    <h1> Grace Assembly of God</h1>
    <h2> Spring City, PA</h2>
    {/* Add any other content for the landing page here */}
  </main>
);
}
