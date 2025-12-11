import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-border">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground font-mono mb-8">Got a project in mind?</p>
          <a 
            href="mailto:hello@alex.design" 
            className="text-6xl md:text-9xl font-display font-bold tracking-tighter hover:text-primary transition-colors duration-300 block"
          >
            LET'S TALK
          </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-border/20 text-sm text-muted-foreground font-mono">
          <p>© 2025 Alex Design. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
