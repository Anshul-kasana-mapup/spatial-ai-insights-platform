
import { motion } from 'framer-motion';
import Button from './Button';
import AnimateOnScroll from './AnimateOnScroll';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-mapup-blue to-mapup-navy z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Transportation Networks with AI-Driven Geospatial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Optimize toll operations, predict traffic patterns, and automate infrastructure analysis using real-time spatial AI
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg" icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              }>
                Watch Demo Video
              </Button>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-mapup-navy/50 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <img 
                src="/placeholder.svg" 
                alt="MapUp Dashboard" 
                className="w-full h-auto rounded-lg"
              />
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-mapup-blue/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mapup-navy-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
