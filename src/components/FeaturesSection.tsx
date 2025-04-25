
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  technicalAdvantage: string;
  businessImpact: string;
}

const FeatureCard = ({ icon, title, technicalAdvantage, businessImpact }: FeatureCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 h-full hover:transform hover:translate-y-[-5px] transition-transform duration-300">
      <div className="mb-4 text-mapup-blue-light">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <div className="mb-4">
        <div className="text-sm text-mapup-accent font-medium mb-1">Technical Advantage</div>
        <p className="text-gray-300">{technicalAdvantage}</p>
      </div>
      
      <div>
        <div className="text-sm text-mapup-accent font-medium mb-1">Business Impact</div>
        <p className="text-gray-300">{businessImpact}</p>
      </div>
      
      <div className="mt-5 pt-4 border-t border-white/10 flex justify-end">
        <button className="text-mapup-blue-light hover:text-mapup-accent flex items-center text-sm font-medium transition-colors">
          Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>,
      title: "Dynamic Route Optimization",
      technicalAdvantage: "Real-time processing of traffic data with predictive congestion models",
      businessImpact: "15-30% reduction in fleet fuel costs and delivery time improvements"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      title: "Toll Analytics Suite",
      technicalAdvantage: "Computer vision and sensor fusion for vehicle identification with 99.8% accuracy",
      businessImpact: "Detects revenue leakage and improves traffic flow during peak hours"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: "Infrastructure Health Monitoring",
      technicalAdvantage: "ML-based anomaly detection for early warning of infrastructure issues",
      businessImpact: "Extends infrastructure lifespan by 40% and reduces maintenance costs"
    }
  ];

  return (
    <section id="features" className="section-padding bg-mapup-navy">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Complex Transportation Networks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-driven platform integrates cutting-edge technologies to solve your most challenging transportation problems
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
