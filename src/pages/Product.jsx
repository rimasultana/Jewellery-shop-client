import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-hot-toast";

const Product = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.photo = user?.photoURL;
    data.name = user?.displayName;

    axios
      .post("http://localhost:5000/jewellery", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Product added successfully!");
      })
      .catch((error) => {
        toast.error("Something went wrong, please try again.", error);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>
        <div className="card bg-base-100 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Product Title</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Enter product title"
                  className="input input-bordered focus:input-primary"
                />
                {errors.title && (
                  <span className="text-red-500">Title is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="input input-bordered focus:input-primary"
                  min="0"
                  step="0.01"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-500">Price is required</span>
                )}
              </div>
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Description</span>
                </label>
                <textarea
                  placeholder="Enter product description"
                  className="textarea textarea-bordered focus:textarea-primary h-32"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <span className="text-red-500">Description is required</span>
                )}
              </div>
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Product Image</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  {...register("photo", { required: true })}
                  className="input input-bordered focus:input-primary"
                />
                {errors.photo && (
                  <span className="text-red-500">Photo is required</span>
                )}
              </div>
            </div>
            <div className="form-control mt-8">
              <button className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
