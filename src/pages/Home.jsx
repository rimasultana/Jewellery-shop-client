import Banner from "./Banner";

import { useEffect, useState } from "react";
import JewelryGallery from "./img";
import axios from "axios";
import { Link } from "react-router";
import Features from "./FeaturedProduct";
import JewelryHeroSection from "./JewellerySection";
import Partner from "./Partner";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jewellery")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Banner />
      <JewelryGallery />

      <div className="min-h-screen bg-base-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Jewellery Collection
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div
                key={item._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <figure className="px-4 pt-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-xl h-64 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-semibold text-primary">
                      ${item.price}
                    </p>
                    <Link
                      to={`/viewdetails/${item._id}`}
                      className="btn btn-error btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Added by: {item.name}
                    </p>
                    <p className="text-sm text-gray-500">{item.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <JewelryHeroSection />
      <Features />
      <Partner/>
    </>
  );
};

export default Home;
