
import AnimateOnScroll from './AnimateOnScroll';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ProblemItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="mt-1 p-1 rounded-full bg-red-500/20">
      <X className="w-4 h-4 text-red-500" />
    </div>
    <p className="text-gray-300">{text}</p>
  </div>
);

const SolutionItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="mt-1 p-1 rounded-full bg-mapup-accent/20">
      <Check className="w-4 h-4 text-mapup-accent" />
    </div>
    <p className="text-gray-300">{text}</p>
  </div>
);

const ProblemSolutionSection = () => {
  const problems = [
    "Traffic congestion leading to economic losses",
    "Slow cargo logistics and extended delivery times",
    "Inefficient toll collection systems",
    "Manual infrastructure planning"
  ];

  const solutions = [
    "Real-time traffic prediction using AI to reduce congestion by 27%",
    "Smart routing algorithms that optimize paths in real-time",
    "Automated toll revenue protection with leakage detection",
    "AI-powered decision support for infrastructure planning"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-mapup-navy to-mapup-navy-dark">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problems We Solve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transportation networks face critical challenges that our AI-powered solutions address.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="bg-mapup-navy-dark rounded-xl p-8 border border-red-500/20 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="p-2 rounded-full bg-red-500/20 mr-3">
                  <X className="w-5 h-5 text-red-500" />
                </span>
                Current Industry Challenges
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <ProblemItem key={index} text={problem} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="bg-mapup-navy-dark rounded-xl p-8 border border-mapup-accent/20 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="p-2 rounded-full bg-mapup-accent/20 mr-3">
                  <Check className="w-5 h-5 text-mapup-accent" />
                </span>
                Our AI-Powered Solutions
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <SolutionItem key={index} text={solution} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
