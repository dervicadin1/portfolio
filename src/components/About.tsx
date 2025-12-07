import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Palette, Code2, Sparkles, Zap } from "lucide-react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block">
            O meni
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - 3D Gradient Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] backdrop-blur-sm border border-purple-500/20 p-8 flex items-center justify-center overflow-hidden">
              {/* Animated Gradient Mesh */}
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              />

              {/* Center Gradient Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative w-48 h-48 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #c4b5fd, #8b5cf6, #6366f1, #4c1d95)",
                  filter: "blur(1px)",
                }}
              />

              {/* Orbiting Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 rounded-full border-2 border-purple-500/30" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-80 h-80 rounded-full border border-indigo-500/20" />
              </motion.div>
            </div>

            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-3xl -z-10 rounded-2xl" />
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Kao <span className="text-purple-400">Figma dizajner</span> sa strastvenom ljubavlju prema tehnologiji, 
              specijalizujem se za kreiranje modernih, intuitivnih i vizuelno impresivnih korisničkih interfejsa 
              koji ostavljaju trajni utisak.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Moj pristup kombinuje <span className="text-indigo-400">kreativni dizajn</span> sa tehničkim razumevanjem, 
              omogućavajući mi da kreiram dizajne koji nisu samo estetski privlačni, već i funkcionalni, 
              pristupačni i optimizovani za moderan web development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <Palette className="w-8 h-8 mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-purple-400 mb-1">Design First</h3>
                <p className="text-sm text-gray-400">Pixel-perfect dizajn</p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group">
                <Code2 className="w-8 h-8 mb-3 text-indigo-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-indigo-400 mb-1">Development</h3>
                <p className="text-sm text-gray-400">Čist, moderan kod</p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 group">
                <Sparkles className="w-8 h-8 mb-3 text-violet-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-violet-400 mb-1">Kreativnost</h3>
                <p className="text-sm text-gray-400">Inovativna rešenja</p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <Zap className="w-8 h-8 mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-blue-400 mb-1">Performance</h3>
                <p className="text-sm text-gray-400">Brzo i efikasno</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
