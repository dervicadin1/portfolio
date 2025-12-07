import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ExternalLink, Figma, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Platforma za e-trgovinu",
    description: "Moderni administrativni panel za e-commerce platformu sa naprednim analytics i kompleksnim dashboard sistemom.",
    tags: ["UI/UX dizajn", "Figma", "Dashboard"],
    category: "UI/UX dizajn",
    image: "https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NzgxMDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Banking App Interface",
    description: "Kompletna mobilna banking aplikacija sa fokusom na user experience, sigurnost i intuitivnu navigaciju.",
    tags: ["Mobilni dizajn", "Figma", "Finansije"],
    category: "Mobilni dizajn",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ4NzI3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Travel Booking Platform",
    description: "Elegantna platforma za rezervaciju putovanja sa interaktivnim mapama i immersive galerijom destinacija.",
    tags: ["Web dizajn", "Figma", "Putovanja"],
    category: "Razvoj weba",
    image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzY0ODQ2NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    description: "Moderna fitness aplikacija sa real-time tracking, personalizovanim treninzima i detaljnim analytics.",
    tags: ["Mobilni dizajn", "UI/UX", "Health"],
    category: "UI/UX dizajn",
    image: "https://images.unsplash.com/photo-1750056393349-dfaf647f7400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwdGFibGV0fGVufDF8fHx8MTc2NDg3Mjc3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "Kreativna social media platforma sa naglaskom na vizuelni sadržaj i community engagement features.",
    tags: ["UI/UX", "Figma", "Social"],
    category: "Mobilni dizajn",
    image: "https://images.unsplash.com/photo-1630973981820-4a756320d1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwaG9sb2dyYXBoaWN8ZW58MXx8fHwxNzY0NzgzNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Kompleksni dashboard za praćenje performansi sa real-time data vizualizacijom i naprednim reportingom.",
    tags: ["Dashboard", "Figma", "Analytics"],
    category: "UI/UX dizajn",
    image: "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDg1MzM2MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = ["Sve", "UI/UX dizajn", "Razvoj weba", "Mobilni dizajn"];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Sve");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const filteredProjects =
    selectedCategory === "Sve"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block">
            Moji radovi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Odabrani projekti koji demonstriraju moje sposobnosti u dizajniranju i programiranju
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#13131a] border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-sm text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </button>
                    <button className="px-4 py-2.5 rounded-lg border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center">
                      <Figma className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 pointer-events-none rounded-xl"
                />
              </div>

              {/* 3D Shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 blur-xl -z-10 rounded-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
