import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Link, useNavigate } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animation/register.json"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
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
  const handleGoogleUser = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login Successfully!")
        navigate("/")
      })
      .catch((error) => {
        toast.error("failed Login.Try again!", error)
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "700px", width: "500px" }}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-500 font-bold text-white">
                  Login
                </button>
              </div>
              <div className="divider">Or</div>

              <button
                onClick={handleGoogleUser}
                className="btn bg-pink-100 font-bold"
              >
                Google
              </button>

              <p className="text-center">
                Don`t have an account?{" "}
                <Link to={"/register"} className="text-red-600">
                  Register
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
