"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    upload: null, // for file uploads
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // handle file input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = new FormData();
    form.append("email", formData.email);
    if (formData.upload) {
      form.append("upload", formData.upload); // append the file if exists
    }

    try {
      const response = await fetch("https://formspree.io/f/xpwzagjy", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ email: "", upload: null }); // Reset form data
      } else {
        console.error("Error sending form:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Your file:
        <input
          type="file"
          name="upload"
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {success && <p>Form submitted successfully!</p>}
    </form>
  );
}