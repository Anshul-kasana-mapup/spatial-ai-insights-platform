
import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface Application {
  id: number;
  title: string;
  image: string;
  bulletPoints: string[];
}

const ApplicationsSection = () => {
  const applications: Application[] = [
    {
      id: 1,
      title: "Smart Toll Management",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
      bulletPoints: [
        "Automated vehicle detection reduces revenue leakage by 18%",
        "AI congestion prediction optimizes lane usage during peak hours"
      ]
    },
    {
      id: 2,
      title: "Disaster Response Routing",
      image: "https://images.unsplash.com/photo-1523444449159-1252705c3317?auto=format&fit=crop&w=600&q=80",
      bulletPoints: [
        "Emergency routing algorithms that account for damaged infrastructure",
        "Dynamic resource allocation for first responder teams"
      ]
    },
    {
      id: 3,
      title: "Urban Development Analytics",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
      bulletPoints: [
        "Heat maps of traffic patterns for smart urban planning",
        "Infrastructure capacity optimization for growing communities"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextApplication = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % applications.length);
  };

  const prevApplication = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + applications.length) % applications.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-mapup-navy to-mapup-navy-dark">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how MapUp is transforming transportation across multiple sectors
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative max-w-4xl mx-auto">
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-mapup-navy rounded-xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={applications[currentIndex].image} 
                    alt={applications[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{applications[currentIndex].title}</h3>
                  <ul className="space-y-3">
                    {applications[currentIndex].bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-mapup-accent shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-4">
              <button 
                onClick={prevApplication}
                className="p-2 rounded-md bg-mapup-blue/20 hover:bg-mapup-blue/40 text-white transition-colors"
                aria-label="Previous application"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {applications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-mapup-accent" : "bg-mapup-blue-light/30"
                    }`}
                    aria-label={`Go to application ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextApplication}
                className="p-2 rounded-md bg-mapup-blue/20 hover:bg-mapup-blue/40 text-white transition-colors"
                aria-label="Next application"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <AnimateOnScroll key={app.id} delay={index * 0.1}>
                <div className="bg-mapup-navy rounded-xl overflow-hidden h-full hover:transform hover:translate-y-[-5px] transition-transform duration-300 border border-white/10">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{app.title}</h3>
                    <ul className="space-y-3">
                      {app.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-mapup-accent shrink-0 mt-1" />
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
