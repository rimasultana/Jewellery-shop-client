/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/pic1.jpg";
import img2 from "../assets/pic5.jpg";
import img3 from "../assets/pic3.jpg";

const JewelryGallery = () => {
  return (
    <div className="m-4 sm:m-12 lg:m-32">
      {/* Title */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-8">
        Women's Jewelry Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img
            src={img1}
            alt="Emerald Jewelry"
            className="w-full h-60 sm:h-80 rounded-md lg:h-96 object-cover group-hover:h-96 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-pink-500 bg-opacity-75 text-white font-bold text-xl transition-opacity duration-300 ease-in-out">
            Women's Jewelry
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-md"></div>
          <img
            src={img2}
            alt="Emerald Jewelry"
            className="w-full h-60 sm:h-80 rounded-md lg:h-96 object-cover group-hover:h-96 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-pink-500 bg-opacity-75 text-white font-bold text-xl transition-opacity duration-300 ease-in-out rounded-md">
            Women's Jewelry
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img
            src={img3}
            alt="Diamond Necklace"
            className="w-full h-60 sm:h-80 lg:h-96 rounded-md object-cover group-hover:h-96 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-pink-500 bg-opacity-75 text-white font-bold text-xl transition-opacity duration-500 ease-in-out rounded-md">
            Women's Jewelry
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryGallery;
