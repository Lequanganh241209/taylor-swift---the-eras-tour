import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="hero-container text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Enhance Your Writing Skills
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-8"
      >
        Submit your Writing Task 2 essays and get professional feedback!
      </motion.p>
      <Button className="bg-accent hover:bg-secondary">
        Get Started
      </Button>
    </section>
  );
};

export default Hero;
