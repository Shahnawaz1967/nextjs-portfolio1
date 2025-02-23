"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        console.error("Failed to send message:", result.error);
        alert(result.error);
        return;
      }
      alert("Message sent successfully!");

      // Reset form data after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        >
          Contact Me
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-black dark:text-white focus:border-red-500 focus:outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-black dark:text-white focus:border-red-500 focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message..."
            rows={6}
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-black dark:text-white focus:border-red-500 focus:outline-none resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
