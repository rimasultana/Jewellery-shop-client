import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Link, useNavigate } from "react-router";
import animation from "../assets/animation/login.json";
import { Player } from "@lottiefiles/react-lottie-player";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Register = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        toast.success("User created successfully.");
        reset();
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration failed. Please try again.");
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Google sign-in successful!", result);
        navigate("/")
      })
      .catch((error) => {
        toast.error("Google sign-in error:", error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: "400px", width: "300px" }} // Adjust for mobile
        />
      </div>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-3xl md:text-5xl font-bold">Register now!</h1>
  
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              aria-label="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
  
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
  
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("photoURL", { required: "Photo URL is required" })}
              type="text"
              placeholder="Photo URL"
              aria-label="Photo URL"
              className="input input-bordered"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm">{errors.photoURL.message}</p>
            )}
          </div>
  
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type="password"
              placeholder="Enter your password"
              aria-label="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <label className="label">
              <a
                href="/forgot-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
  
          <div className="form-control mt-4">
            <button className="btn bg-pink-500 text-white font-bold">
              Register
            </button>
          </div>
  
          <div className="divider my-4">Or</div>
  
          <button
            onClick={handleGoogle}
            className="btn bg-pink-500 text-white font-bold w-full"
          >
            Google
          </button>
  
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default Register;
