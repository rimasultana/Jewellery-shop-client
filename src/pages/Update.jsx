import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import toast from "react-hot-toast";

const Update = () => {
  const [datas, setDatas] = useState({});
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`http://localhost:5000/jewellery/${id}`, data)
      .then(() => {
        toast.success("update successfully!");
      })
      .catch((error) => {
        toast.error("Error updating product:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jewellery/${id}`)
      .then((res) => {
        setDatas(res.data);
        reset(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id, reset]);

  return (
    <div>
      <section className="bg-gray-100 min-h-screen">
        <div className="w-full sm:w-[90%] md:w-[60%] mx-auto bg-white p-5 sm:p-8 md:p-14 shadow-md rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center my-4 text-2xl sm:text-3xl font-bold">
              Update Product
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 sm:gap-5 py-3">
              <div className="flex flex-col">
                <label htmlFor="title">
                  <span>Product Title</span>
                </label>
                <input
                  {...register("title")}
                  defaultValue={datas.title}
                  type="text"
                  placeholder="Enter Product Title"
                  className="border-gray-100 border-2 py-2 sm:py-3 px-2 rounded-md my-2"
                  id="title"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price">
                  <span>Product Price</span>
                </label>
                <input
                  {...register("price")}
                  defaultValue={datas.price}
                  type="number"
                  placeholder="Enter Product Price"
                  className="border-gray-100 border-2 py-2 sm:py-3 px-2 rounded-md my-2"
                  id="price"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">
                <span>Description</span>
              </label>
              <textarea
                {...register("description")}
                defaultValue={datas.description}
                className="border-gray-100 border-2  p-2 sm:p-3 rounded-md my-2"
                cols="30"
                rows="5"
                placeholder="Description"
                id="description"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="img">
                <span>Product Image</span>
              </label>
              <input
                {...register("img")}
                defaultValue={datas.img}
                className="py-2 sm:py-3 px-2 rounded-md my-2 border-gray-100 border-2"
                type="text"
                placeholder="Photo"
                id="img"
              />
            </div>
            <div className="my-8">
              <input
                type="submit"
                value="Update"
                className="w-full py-2 sm:py-3 rounded-md border-2 border-gray-200 bg-pink-500 text-white text-center cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Update;
