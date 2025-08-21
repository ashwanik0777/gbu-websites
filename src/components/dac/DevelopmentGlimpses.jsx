import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{
      scale: 1.03,
      y: -5,
    }}
    whileTap={{
      scale: 0.98,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={cn(
      "rounded-xl border bg-white text-gray-900 shadow-md cursor-pointer",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const Dialog = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DevelopmentGlimpses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      title: "Team Collaboration",
      description: "Students working together on DAC projects",
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      title: "Development Session",
      description: "Coding and development in progress",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      title: "Code Review",
      description: "Faculty mentoring students during code reviews",
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      title: "UI/UX Design",
      description: "Designing user interfaces for smart campus",
    },
    {
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      title: "Whiteboard Planning",
      description: "Project planning and architecture discussions",
    },
    {
      url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      title: "Presentation Day",
      description: "Students presenting their project demos",
    },
  ];

  const maxIndex = Math.max(1, images.length - 2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
  };

  return (
    <div className="mb-16 relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Development Glimpses
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * 33.33}%` }}
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
          style={{ width: `${images.length * 33.33}%` }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-1/3"
              whileHover={{ scale: 1.02 }}
            >
              <Card onClick={() => setActiveImage(image)}>
                <CardContent>
                  <div className="relative overflow-hidden rounded-xl">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold">{image.title}</h3>
                        <p className="text-sm opacity-90">
                          {image.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={!!activeImage} onClose={() => setActiveImage(null)}>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <motion.img
              src={activeImage.url}
              alt={activeImage.title}
              className="w-full rounded-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">{activeImage.title}</h3>
              <p className="text-gray-600">{activeImage.description}</p>
            </div>
          </motion.div>
        )}
      </Dialog>
    </div>
  );
};

export default DevelopmentGlimpses;
