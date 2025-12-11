import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@assets/generated_images/minimalist_branding_mockup.png";
import project2 from "@assets/generated_images/mobile_app_interface_design.png";
import project3 from "@assets/generated_images/editorial_website_layout.png";

const projects = [
  {
    id: 1,
    title: "Lumina Identity",
    category: "Branding / Visual Identity",
    image: project1,
    year: "2024"
  },
  {
    id: 2,
    title: "Apex Finance",
    category: "Product Design / Mobile",
    image: project2,
    year: "2023"
  },
  {
    id: 3,
    title: "Vogue Editorial",
    category: "Web Design / Development",
    image: project3,
    year: "2023"
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-background">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
          SELECTED <br /> WORK
        </h2>
        <span className="hidden md:block text-muted-foreground font-mono text-sm">(2023 — 2025)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group cursor-pointer ${index === 2 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-secondary">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              />
            </div>
            
            <div className="flex justify-between items-start border-t border-border pt-4">
              <div>
                <h3 className="text-2xl font-display font-medium mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-mono text-sm">{project.category}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
