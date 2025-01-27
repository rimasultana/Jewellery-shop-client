import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const ContactFrom = () => {
  return (
    <div className="bg-beige py-12 px-6">
      <div className="text-center mb-8">
        <h3 className="text-sm tracking-widest text-gray-600">GET IN TOUCH</h3>
        <h1 className="text-3xl font-semibold text-gray-900">
          Branching Out For You
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-5xl text-brown-600 mb-4" />
          <h2 className="text-lg font-medium">Ideal Location</h2>
          <p className="text-gray-600">
            No: 58 A, East Madison Street, Baltimore, MD, USA 4508
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-5xl text-brown-600 mb-4" />
          <h2 className="text-lg font-medium">Instant Connect</h2>
          <p className="text-gray-600">○○○ - 123 - 456789</p>
          <p className="text-gray-600">○○○○ 1234 56789</p>
        </div>

        <div className="flex flex-col items-center">
          <FaGlobe className="text-5xl text-brown-600 mb-4" />
          <h2 className="text-lg font-medium">Our Websites</h2>
          <Link to="https://www.swarnam.com" className="text-blue-600">
            www.swarnam.com
          </Link>
          <Link to="https://www.swarna.com" className="text-blue-600">
            www.swarna.com
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <FaEnvelope className="text-5xl text-brown-600 mb-4" />
          <h2 className="text-lg font-medium">Mail Us</h2>
          <p className="text-gray-600">info@example.com</p>
          <p className="text-gray-600">support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
