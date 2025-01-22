import img1 from "../assets/partner/daraz_bangladesh.jpg";
import img2 from "../assets/partner/Rokomari.com_Monogram.svg.png";
import img3 from "../assets/partner/images (3).jpg";
import img4 from "../assets/partner/Amazon_logo.svg.png";
import img5 from "../assets/partner/e090de4c8299f4e268b1a76090d2c4a7.jpg";

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50 w-11/12 mx-auto">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            <div className="flex justify-center items-center">
              <img
                src={img1}
                alt="Partner 1"
                className="max-w-full h-auto max-h-20 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={img2}
                alt="Partner 2"
                className="max-w-full h-auto max-h-20 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={img3}
                alt="Partner 3"
                className="max-w-full h-auto max-h-20 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={img4}
                alt="Partner 4"
                className="max-w-full h-auto max-h-20 object-contain"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={img5}
                alt="Partner 5"
                className="max-w-full h-auto max-h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
