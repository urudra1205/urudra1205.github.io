import { Link } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
    >
      <Link href="/">
        <span className="text-xl font-bold font-display tracking-tighter hover:text-primary transition-colors cursor-pointer">
          ALEX.DESIGN
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
        <a href="#work" className="hover:text-primary transition-colors">WORK</a>
        <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
        <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
      </div>

      <div className="md:hidden">
        {/* Mobile menu trigger placeholder */}
        <button className="text-sm font-medium">MENU</button>
      </div>
    </motion.nav>
  );
}
