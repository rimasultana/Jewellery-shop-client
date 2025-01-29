import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";

const ViewDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/jewellery/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDeleteId = (_id) => {
    axios.delete(`http://localhost:5000/jewellery/${_id}`).then((res) => {
      if (res?.data?.deletedCount) {
        toast.success("Delete data!");
      }
    });
  };
  return (
    <div className="w-[50%] mx-auto bg-gray-200">
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={data.img} alt="Shoes" className="object-cover w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">
            {data.title}
            <div className="badge badge-secondary">exclusive</div>
          </h2>
          <p>{data.description}</p>
          <p>Added by: {data.name}</p>
          <div className="card-actions justify-center">
            <Link
              to={`/update/${data?._id}`}
              className="badge bg-teal-800 text-white py-5 px-10 text-xl"
            >
              Update
            </Link>
            <div
              onClick={() => handleDeleteId(data._id)}
              className="badge bg-red-700 text-white py-5 px-8 text-xl"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
