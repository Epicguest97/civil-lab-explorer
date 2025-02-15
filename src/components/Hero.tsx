
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Civil Engineering Laboratories
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our state-of-the-art facilities and equipment dedicated to advancing civil engineering education and research.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
