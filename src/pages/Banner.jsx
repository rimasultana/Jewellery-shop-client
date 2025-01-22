import img from "../assets/pic1.jpg";

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center px-6 md:px-12 h-screen "
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className=" rounded text-white text-left md:text-left max-w-5xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Designer Jewellery
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Discover the beauty of luxury with our handcrafted designer jewelry. <br />
          Perfect elegance for every occasion.
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
