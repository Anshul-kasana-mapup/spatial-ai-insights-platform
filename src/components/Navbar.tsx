
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-mapup-navy-dark/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">MapUp</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
            Solutions
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <button className="bg-mapup-accent hover:bg-mapup-accent/90 text-black rounded-md px-4 py-2 font-medium">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
