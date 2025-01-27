/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import img1 from "../assets/pic1.jpg";
import img2 from "../assets/pic5.jpg";
import img3 from "../assets/pic3.jpg";

const JewelryGallery = () => {
  return (
    <div className="m-4 sm:m-12 lg:m-14">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-pink-600 mb-8">
        Women's Jewelry Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            <motion.img
              src={img1}
              alt="Emerald Jewelry"
              className="w-full h-60 sm:h-80 rounded-lg lg:h-96 object-cover transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-pink-200 bg-opacity-75 text-white font-bold text-xl transition-opacity duration-300 ease-in-out">
              Women's Jewelry
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-md"></div>
            <motion.img
              src={img2}
              alt="Emerald Jewelry"
              className="w-full h-60 sm:h-80 rounded-lg lg:h-96 object-cover transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-pink-200 bg-opacity-75 text-white font-bold text-xl transition-opacity duration-300 ease-in-out rounded-lg">
              Women's Jewelry
            </div>
          </motion.div>
        </div>
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            <motion.img
              src={img3}
              alt="Diamond Necklace"
              className="w-full h-60 sm:h-80 lg:h-96 rounded-lg object-cover transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-pink-200 bg-opacity-75 text-white font-bold text-xl transition-opacity duration-500 ease-in-out rounded-lg">
              Women's Jewelry
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JewelryGallery;
