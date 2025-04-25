
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { Truck, Building2, Banknote } from 'lucide-react';

const TrustCard = ({ 
  title, 
  icon: Icon, 
  bulletPoints 
}: { 
  title: string; 
  icon: React.ElementType; 
  bulletPoints: string[] 
}) => {
  return (
    <div className="bg-mapup-navy rounded-xl p-6 border border-white/10 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-full bg-mapup-blue/20">
          <Icon className="w-6 h-6 text-mapup-blue-light" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="mt-1 text-mapup-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TrustSection = () => {
  const trustCards = [
    {
      title: "Logistics Fleets",
      icon: Truck,
      bulletPoints: [
        "Fuel cost savings",
        "Route optimization",
        "Fleet management efficiency"
      ]
    },
    {
      title: "City Planners",
      icon: Building2,
      bulletPoints: [
        "Optimized metros",
        "Traffic flow analysis",
        "Infrastructure planning"
      ]
    },
    {
      title: "Toll Operators",
      icon: Banknote,
      bulletPoints: [
        "Revenue leakage detection",
        "Congestion management",
        "Peak hour optimization"
      ]
    }
  ];

  return (
    <section className="bg-mapup-navy-dark section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders Across</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI-based solutions are trusted by leading companies and government entities worldwide
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustCards.map((card, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <TrustCard {...card} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
