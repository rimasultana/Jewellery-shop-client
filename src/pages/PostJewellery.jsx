import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PostJewellery = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/jewellery", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          toast.success("Post data successfully!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error posting data!");
      });
  };

  return (
    <div className="card bg-base-100 w-11/12 mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-xl">Post Data</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">URL</span>
          </label>
          <input
            {...register("photo")}
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Jewelry Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostJewellery;
