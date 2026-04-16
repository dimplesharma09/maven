"use client";

// import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ek ke baad ek items animate honge
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="w-full bg-[#282828] text-gray-300 py-20 md:py-28" // Dark background color
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* 🔹 Left Column (Text) */}
          <motion.div className="lg:col-span-2" variants={textVariants}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
              ABOUT <span className="text-[#DEBB70]"> MAVEN</span> 
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                We believe that every structure has its own character, designed to create meaningful interactions and 
                lasting emotions for those who inhabit it.
              </p>
              <p>
                Our studio focuses on the harmony of form, function, and color to create possibilities that are both 
                practical and inspiring.
              </p>
              <p>
                We blend modern aesthetics with site-specific needs and proven construction techniques, all delivered 
                with the precision and warmth your project deserves.
              </p>
            </div>
          </motion.div>

          {/* 🔹 Right Column (Image with Overlay) */}
          <motion.div
            className="lg:col-span-3 relative"
            variants={imageVariants}
          >
            {/* Yeh div 'frame' banata hai jiske andar image aur box hain.
              Padding (p-12) se image aur box ke beech space banta hai.
            */}
            <div className="relative p-12 sm:p-16">
              {/* ⚠️ Zaroori: Yahaan apni team ki B&W image ka path daalein */}
              <div >
              <img
                src="/assets/Image/about-img.jpg" 
                alt="Maven Projects Team"
              
                className="w-full h-1/2 object-cover grayscale" // Grayscale filter
              />
              </div>
              
              {/* White Overlay Box */}
              <div className="absolute bottom-0 right-0 bg-white p-6 md:p-8 shadow-xl">
                <h3 className="text-gray-900 text-lg sm:text-xl font-semibold uppercase tracking-wider leading-tight">
                  Over 30 Years of
                  <br />
                  Experience in
                  <br />
                  Architecture
                </h3>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}