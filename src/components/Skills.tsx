import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Palette, Layers, Pen, Grid3x3, Code2, FileCode, Database, Smartphone } from "lucide-react";

const skills = [
  { name: "Figma", level: 95, icon: Palette, category: "design" },
  { name: "UI/UX Design", level: 92, icon: Layers, category: "design" },
  { name: "Prototyping", level: 90, icon: Pen, category: "design" },
  { name: "Design Systems", level: 93, icon: Grid3x3, category: "design" },
  { name: "React", level: 78, icon: Code2, category: "dev" },
  { name: "TypeScript", level: 75, icon: FileCode, category: "dev" },
  { name: "Tailwind CSS", level: 85, icon: Database, category: "dev" },
  { name: "Responsive Design", level: 88, icon: Smartphone, category: "dev" },
];

export function Skills() {
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

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const designSkills = skills.filter((s) => s.category === "design");
  const devSkills = skills.filter((s) => s.category === "dev");

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block">
            Vještine
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-400">Dizajn</h3>
            </div>

            <div className="space-y-6">
              {designSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                          <Icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 tabular-nums">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-purple-500/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-indigo-400">Development</h3>
            </div>

            <div className="space-y-6">
              {devSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                          <Icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-indigo-400 tabular-nums">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-indigo-500/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
