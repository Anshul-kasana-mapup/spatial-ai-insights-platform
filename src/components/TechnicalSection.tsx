
import AnimateOnScroll from './AnimateOnScroll';

interface TechnicalCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  learnMoreLink: string;
}

const TechnicalCard = ({ title, icon, description, learnMoreLink }: TechnicalCardProps) => {
  return (
    <div className="bg-mapup-navy rounded-xl p-6 border border-mapup-blue/20 h-full hover:border-mapup-blue/40 transition-all duration-300">
      <div className="mb-4 text-mapup-blue-light">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a 
        href={learnMoreLink} 
        className="text-mapup-blue-light hover:text-mapup-blue font-medium inline-flex items-center gap-1 text-sm"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

const TechnicalSection = () => {
  const technologies = [
    {
      title: "Sensor Fusion Engine",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "Our proprietary sensor fusion technology combines data from multiple sources including traffic cameras, IoT devices, and mobile signal data to create a unified spatial model.",
      learnMoreLink: "#"
    },
    {
      title: "Edge AI Processing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      description: "Process traffic and geospatial data directly at the edge for real-time decisions with minimal latency, enabling instant traffic flow optimization.",
      learnMoreLink: "#"
    },
    {
      title: "Ethical AI Framework",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Built with privacy-first principles and transparent algorithms that maintain public trust while delivering powerful transportation insights.",
      learnMoreLink: "#"
    }
  ];

  return (
    <section className="section-padding bg-mapup-navy-dark">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Differentiators</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is built on cutting-edge technology that sets us apart from traditional solutions
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <TechnicalCard {...tech} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
