
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const LabPage = () => {
  const { slug } = useParams();
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null);
  
  // Mock data - replace with your actual lab data
  const labData = {
    "structural-lab": {
      title: "Structural Engineering Laboratory",
      description: "The Structural Engineering Laboratory is equipped with state-of-the-art facilities for testing and analyzing various structural elements.",
      equipment: [
        {
          name: "Universal Testing Machine",
          description: "Used for tension, compression, and bending tests of materials.",
          specifications: ["Capacity: 1000 kN", "Digital display", "Computer interface for data acquisition"],
        },
        {
          name: "Strain Measurement System",
          description: "Advanced system for measuring strain in structural elements.",
          specifications: ["Digital strain indicators", "Multiple channel capability", "High precision measurements"],
        },
      ],
    },
    "geotechnical-lab": {
      title: "Geotechnical Engineering Laboratory",
      description: "The Geotechnical Engineering Laboratory features comprehensive soil testing equipment for understanding soil mechanics and foundation engineering.",
      equipment: [
        {
          name: "Triaxial Testing System",
          description: "For determining shear strength parameters of soil samples.",
          specifications: ["Automated pressure control", "Data logging system", "Variable confining pressure"],
        },
        {
          name: "Direct Shear Apparatus",
          description: "Used for measuring soil shear strength parameters.",
          specifications: ["Digital display unit", "Automatic data acquisition", "Variable shear rates"],
        },
      ],
    },
  };

  const lab = labData[slug as keyof typeof labData];

  if (!lab) {
    return <div>Lab not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{lab.title}</h1>
        <p className="text-gray-600 mb-8">{lab.description}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Equipment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lab.equipment.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100 cursor-pointer"
              onClick={() => setSelectedEquipment(item)}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <Dialog open={selectedEquipment !== null} onOpenChange={() => setSelectedEquipment(null)}>
          {selectedEquipment && (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedEquipment.name}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{selectedEquipment.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Specifications:</h4>
                  {selectedEquipment.specifications.map((spec: string, index: number) => (
                    <div key={index} className="text-sm text-gray-500">
                      • {spec}
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </motion.div>
  );
};

export default LabPage;
