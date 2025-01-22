import { motion } from "framer-motion";
import { FaRocket, FaHandsHelping, FaUsers } from "react-icons/fa"; // Importing icons
import img3 from "../assets/pic3.jpg";

const About = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full object-cover mb-8">
        <img
          src={img3}
          alt="Banner Image"
          className="object-cover w-full h-72 sm:h-96 rounded-lg shadow-lg"
        />
        <div className="absolute rounded-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-500 px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          We are a passionate team dedicated to delivering high-quality products and services that make a difference. Our mission is to provide exceptional value and create long-lasting relationships with our customers.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-4xl text-blue-500 mb-4">
              <FaRocket />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              We strive to offer innovative solutions that meet the ever-evolving needs of our clients. Our mission is to push boundaries and deliver excellence in every project we take on.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-4xl text-green-500 mb-4">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-gray-600">
              We believe in integrity, collaboration, and innovation. Our core values guide us in delivering exceptional service while fostering an inclusive and supportive workplace.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-4xl text-yellow-500 mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Our Team</h3>
            <p className="mt-4 text-gray-600">
              Our team is our greatest asset. We are a diverse group of professionals who work together to create meaningful solutions for our clients. Each member brings unique expertise and passion to the table.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
