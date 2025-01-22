import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Jewellery Shop</h2>
            <p className="text-lg">Explore our beautiful collection of jewelry, crafted with love and care.</p>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-white hover:text-pink-500">Home</a></li>
              <li><a href="/about" className="text-white hover:text-pink-500">About</a></li>
              <li><a href="/product" className="text-white hover:text-pink-500">Products</a></li>
              <li><a href="/contact" className="text-white hover:text-pink-500">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-pink-500">
              <AiOutlineFacebook className="text-2xl" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-pink-500">
              <AiOutlineTwitter className="text-2xl" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
              <AiOutlineInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Jewellery Shop. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;