import Banner from "./Banner";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/jewellery")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:5000/jewellery/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          alert("Product deleted successfully!");
        }
        fetchProducts();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Banner />
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
                    src={item.photo}
                    alt={item.title}
                    className="rounded-xl h-64 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-semibold text-primary">
                      ${item.price}
                    </p>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm"
                    >
                      <FaTrash className="text-white" />
                    </button>
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
    </div>
  );
};

export default Home;
