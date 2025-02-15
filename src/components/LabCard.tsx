
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LabCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const LabCard = ({ title, description, image, slug }: LabCardProps) => {
  return (
    <Link to={`/lab/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="rounded-lg bg-white/80 backdrop-blur-sm shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-gray-100"
      >
        <div className="aspect-video relative overflow-hidden rounded-md mb-4">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </motion.div>
    </Link>
  );
};

export default LabCard;
