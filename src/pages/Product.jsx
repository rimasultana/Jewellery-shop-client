import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jewellery")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-base-200 py-12 px-4 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-pink-500">
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
                  <h2 className="card-title ">{item.title}</h2>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-semibold text-primary">
                      ${item.price}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                       {item.description}
                    </p>

                    <p className="text-sm text-gray-500">
                      Added by: {item.name}
                    </p>
                  </div>
                  <Link
                    to={`/viewdetails/${item._id}`}
                    className="btn bg-teal-800 text-white btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
