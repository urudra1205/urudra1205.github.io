import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-8">About Me</h2>
        </div>
        
        <div className="md:col-span-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display leading-tight mb-12"
          >
            I'm a multidisciplinary designer focused on creating meaningful digital experiences. 
            With a background in traditional graphic design and code, I bridge the gap between 
            art direction and technical implementation.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Capabilities</h3>
              <ul className="space-y-2 text-muted-foreground font-mono text-sm">
                <li>Art Direction</li>
                <li>UI/UX Design</li>
                <li>Interaction Design</li>
                <li>Frontend Development</li>
                <li>Brand Strategy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Recognition</h3>
              <ul className="space-y-2 text-muted-foreground font-mono text-sm">
                <li>Awwwards — Site of the Day</li>
                <li>Behance — Featured in Interaction</li>
                <li>CSS Design Awards — Special Kudos</li>
                <li>Dribbble — Trending Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
