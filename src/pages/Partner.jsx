import Marquee from "react-fast-marquee";
import SVG from "../components/SVG";

const Partner = () => {
  return (
    <div className="bg-pink-50 py-14">
      <div className="text-center mb-8 px-4">
        <h3 className="text-pink-500 text-2xl md:text-3xl">Glamorous Life</h3>
        <h1 className="text-2xl md:text-4xl font-bold">
          Elevate Your Style Shines Bright
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <Marquee speed={150} delay={10} className="space-x-10 md:space-x-20">
          <div className="flex gap-24 items-center">
            <div className="flex items-center gap-5 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Pearl Jewellery</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Bridal Jewellery</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Chunky Necklaces</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Gemstone Jewellery</span>
            </div>
          </div>
        </Marquee>

        <Marquee speed={150} delay={10} direction="right" className="space-x-10 md:space-x-20">
          <div className="flex gap-24 items-center">
            <div className="flex items-center gap-5 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Diamond Earrings</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Gold Bracelets</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Luxury Watches</span>
            </div>
            <div className="flex items-center gap-3 text-lg md:text-3xl font-bold">
              <span>
                <SVG />
              </span>
              <span>Antique Jewellery</span>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
