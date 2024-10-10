// app/components/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(""); // Clear previous status

    const data = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xpwzagjy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        setFormData({ email: "", message: "" }); // Clear the form
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setStatus(errorData.errors.map((error) => error.message).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <form id="my-form" onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Message:</label>
      <input
        type="text"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button id="my-form-button" type="submit">Submit</button>
      <p id="my-form-status">{status}</p>
    </form>
  );
}