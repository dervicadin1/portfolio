import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { CodeTerminal } from "./CodeTerminal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm text-gray-300">Dobrodošli u moj portfolio</span>
          </motion.div>

          {/* Main Title */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mb-2"
            >
              Zdravo, ja sam
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
              style={{ fontSize: "5rem", lineHeight: "1", fontWeight: "900" }}
            >
              Adin
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-200 mt-4"
              style={{ fontSize: "1.875rem" }}
            >
              Figma Dizajner & Front-end Developer
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-lg leading-relaxed"
          >
            Stvaram digitalna iskustva koja spajaju kreativnost i tehnologiju. 
            Specijalizovan za moderan UI/UX dizajn u Figmi sa fokusom na intuitivne i vizuelno impresivne interfejse.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Kontaktirajte me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg border border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Pogledaj radove
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg border border-gray-700 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:bg-purple-500/10 hover:transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg border border-gray-700 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:bg-purple-500/10 hover:transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 rounded-lg border border-gray-700 hover:border-purple-500 flex items-center justify-center transition-all duration-300 hover:bg-purple-500/10 hover:transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Code Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CodeTerminal />
        </motion.div>
      </div>
    </section>
  );
}
