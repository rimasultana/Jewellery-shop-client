import Banner from "../assets/bigimg.webp";
import Rebanner from "../assets/hair.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
const JewelryHeroSection = () => {
  return (
    <section className="bg-[#fdf5ee] py-20 px-4 lg:px-20 relative my-14">
      <div className="text-center items-center lg:text-left lg:flex lg:items-center lg:justify-between space-y-10 lg:space-y-0">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-pink-500 uppercase tracking-wide font-semibold text-lg">
            Jewels As Unique As You
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-800">
            Commitment, Forever, In Every Sparkling Jewel
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Vestibulum augue nibh, elementum eget ante nec, consectetur viverra
            leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium
            elit, et eleifend orci cursus a.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
            <div className="text-center bg-pink-200 rounded-md py-2 px-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                20+
              </h3>
              <p className="text-gray-600 text-sm">Worldwide Branch</p>
            </div>
            <div className="text-center bg-pink-200 rounded-md py-2 px-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                200+
              </h3>
              <p className="text-gray-600 text-sm">Unique Designs</p>
            </div>
            <div className="text-center bg-pink-200 rounded-md py-2 px-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                3M
              </h3>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-1/2 flex  justify-center py-5">
          <motion.div className="relative">
            <motion.img
              src={Banner}
              alt="Jewelry Model"
              className="rounded-t-full  w-80 md:w-96 object-cover shadow-lg border-pink-500 border-4 "
              whileHover={{ scale: 0.9, rotate: 0 }}
              whileTap={{ scale: 1 }}
            />

            <motion.div
              className="absolute border-pink-700 bottom-10 -left-12 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 shadow-lg"
              whileHover={{ scale: 1.5, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={Rebanner}
                alt="Jewelry Detail"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-start mt-8">
        <button className="flex items-center gap-2 bg-teal-800 text-white font-bold py-3 px-6 rounded-md hover:bg-teal-700 transition duration-200">
          <a href="#Banner" className="flex items-center gap-3">
            Know More <FaArrowCircleRight className="text-lg" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default JewelryHeroSection;
