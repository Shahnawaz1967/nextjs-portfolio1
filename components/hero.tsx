"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="intro" className="flex min-h-screen flex-col items-center justify-center pt-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 md:px-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hey, I'm <span className="text-red-500 font-space-mono">MD Shahnawaz Alam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-500 mb-6 font-space-mono">I'm a Full Stack Web Developer</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-space-mono">
          I'm a Full-Stack Developer with expertise in React.js, Next.js, and the MERN stack, skilled in problem-solving with Data Structures and Algorithms (DSA). I build dynamic and high-performance web applications with a focus on clean code and scalable architecture.
          </p>
          <div className="flex gap-4 mb-8">
            <Link
              href="/shahnawaz.pdf"
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Resume
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Shahnawaz1967"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mdsahnawaz24/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </Link>
             
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[3/4] max-w-md mx-auto px-4 md:px-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professinal%20pic-ANnjikhsDdu0ZP7KwCWyrzMImCLnad.png"
            alt="Professional headshot"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

