import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
const AddProduct = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.photo = user?.photoURL;
    data.name = user?.displayName;
    console.log(data);

    axios
      .post("http://localhost:5000/jewellery", data)
      .then((result) => {
        if (result?.data.insertedId) {
          toast.success("Successfully Add product!");
          reset()
        }
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="w-full sm:w-[90%] md:w-[60%] mx-auto bg-white p-5 sm:p-8 md:p-14 shadow-md rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center my-4 text-2xl sm:text-3xl font-bold">
              Add A New Product
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 sm:gap-5 py-3">
              <div className="flex flex-col">
                <label htmlFor="">
                  <span>Product Title</span>
                </label>
                <input
                  {...register("title", {
                    required: "Product title Required!",
                  })}
                  type="text"
                  placeholder="Enter Product Title"
                  className="border-gray-100 border-2 py-2 sm:py-3 px-2 rounded-md my-2"
                />
                {errors.title && (
                  <p className="text-red-500">{errors?.title?.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  <span>Product Price</span>
                </label>
                <input
                  {...register("price", { required: "Price is required!" })}
                  type="number"
                  placeholder="Enter Product Price"
                  className="border-gray-100 border-2 py-2 sm:py-3 px-2 rounded-md my-2"
                />
                {errors.price && (
                  <p className="text-red-500">{errors?.price?.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">
                <span>Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required!",
                })}
                className="border-gray-100 border-2  p-2 sm:p-3 rounded-md my-2"
                cols="30"
                rows="5"
                placeholder="Description"
              />
              {errors.description && (
                <p className="text-red-500">{errors?.description?.message}</p>
              )}
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="">
                <span>Product Image</span>
              </label>
              <input
                {...register("img", { required: "Image is required!" })}
                className="py-2 sm:py-3 px-2 rounded-md my-2 border-gray-100 border-2"
                type="text"
                placeholder="Photo"
              />
              {errors.img && (
                <p className="text-red-600">{errors?.img?.message}</p>
              )}
            </div>
            <div className="my-8">
              <input
                type="submit"
                value="Submit"
                className="w-full py-2 sm:py-3 rounded-md border-2 border-gray-200 bg-pink-500 text-white text-center cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
