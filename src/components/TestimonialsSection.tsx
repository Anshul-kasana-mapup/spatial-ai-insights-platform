
import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Reduced delivery delays by 37% across our entire fleet. MapUp's route optimization has been a game-changer for our logistics operations.",
      author: "Sarah Johnson",
      position: "Logistics Director",
      company: "Global Express",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 2,
      quote: "The toll analytics suite has helped us identify and eliminate revenue leakage points we didn't even know existed.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "HighwayTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 3,
      quote: "Our urban planning team now makes data-driven decisions that have reduced congestion by 24% in our downtown core.",
      author: "Elena Rodriguez",
      position: "City Planner",
      company: "Metropolitan Planning Authority",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-mapup-navy-dark to-mapup-navy">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
        </AnimateOnScroll>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-mapup-blue-dark/50 to-mapup-navy rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="text-center">
                <div className="mb-6">
                  <svg width="45" height="36" className="mx-auto text-mapup-blue-light opacity-70" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.04125 0 0 6.04125 0 13.5C0 18.9674 3.47723 23.5951 8.35248 25.4248C7.07754 29.0278 4.05045 31.95 0 33.5812C1.89844 35.1 4.59375 36 7.55625 36C16.3125 36 23.625 27.9619 23.625 18C23.625 8.03813 19.4062 0 13.5 0ZM34.875 0C27.4162 0 21.375 6.04125 21.375 13.5C21.375 18.9674 24.8522 23.5951 29.7275 25.4248C28.4525 29.0278 25.4255 31.95 21.375 33.5812C23.2734 35.1 25.9688 36 28.9313 36C37.6875 36 45 27.9619 45 18C45 8.03813 40.7812 0 34.875 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-2xl md:text-3xl font-display mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <div className="font-bold">{testimonials[currentIndex].author}</div>
                    <div className="text-mapup-blue-light">{testimonials[currentIndex].position}</div>
                    <div className="text-gray-400">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-mapup-accent" : "bg-mapup-blue-light/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-12">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-mapup-navy-dark/70 backdrop-blur-sm border border-white/10 text-white hover:bg-mapup-blue/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-12">
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-mapup-navy-dark/70 backdrop-blur-sm border border-white/10 text-white hover:bg-mapup-blue/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
