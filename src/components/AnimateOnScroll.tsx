
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animation?: "fadeInUp" | "fadeIn";
}

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

export default function AnimateOnScroll({ 
  children, 
  delay = 0, 
  className = "",
  animation = "fadeInUp"
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const variants = animation === "fadeInUp" ? fadeInUpVariants : fadeInVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      custom={{ delay }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
