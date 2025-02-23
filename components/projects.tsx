"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projectsData = [
  {
    title: "Todos With Special features",
    image: "/Todos.png",
    liveLink: "https://todo-app-hatio1.netlify.app/",
    githubLink: "https://github.com/username/todo-app"
  },
  {
    title: "FlashCard Generator",
    image: "/flashcard.png",
    liveLink: "https://shahnawaz-flashcardgenerator.netlify.app/",
    githubLink: "https://github.com/Shahnawaz1967/flashcardgenerator.git"
  },
  {
    title: "netflix-clone",
    image: "/netflix.png",
    liveLink: "https://netflix-clone-1-gquj.onrender.com/",
    githubLink: "https://github.com/Shahnawaz1967/netflix-clone.git"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              variants={projectVariants}
              key={index}
              className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 group"
            >
              <div className="relative w-full h-80">
                <Image src={project.image} alt={project.title} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4 flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold transition-colors duration-300 text-black bg-white dark:text-white dark:bg-black px-2 py-1 rounded"
                >
                  Live Link
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
