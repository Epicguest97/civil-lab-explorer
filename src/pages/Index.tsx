
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import LabCard from "@/components/LabCard";

const Index = () => {
  const labs = [
    {
      title: "Structural Engineering Laboratory",
      description: "State-of-the-art facility for testing and analyzing various structural elements, equipped with modern testing machines and instruments.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      slug: "structural-lab",
    },
    {
      title: "Geotechnical Engineering Laboratory",
      description: "Comprehensive soil testing facility with advanced equipment for soil mechanics and foundation engineering studies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      slug: "geotechnical-lab",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Laboratories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labs.map((lab) => (
              <LabCard key={lab.slug} {...lab} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
