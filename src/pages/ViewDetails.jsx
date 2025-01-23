import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ViewDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/jewellery/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  console.log(data);
  if (loading) {
    return <p className="rounded-full ">Loading</p>;
  }
  return (
    <div className="w-[50%] mx-auto bg-gray-200">
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <Link to={`/update/${data?._id}`} className="badge badge-outline">Update</Link>
            <div className="badge badge-outline">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
