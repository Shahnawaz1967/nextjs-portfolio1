"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ email: "", subject: "", message: "" })
      } else {
        console.error("Failed to send message:", await response.text())
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    }
  }

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
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-black dark:text-white focus:border-red-500 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-black dark:text-white focus:border-red-500 focus:outline-none"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Enter your message..."
              rows={6}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-black dark:text-white focus:border-red-500 focus:outline-none resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
        <div className="mt-12 flex justify-center space-x-6">
          <Link
            href="https://github.com/Shahnawaz1967"
            target="_blank"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mdsahnawaz24"
            target="_blank"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:heyshah24@gmail.com"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>
        <footer className="mt-12 text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Made by Shahnawaz
        </footer>
      </div>
    </section>
  )
}
