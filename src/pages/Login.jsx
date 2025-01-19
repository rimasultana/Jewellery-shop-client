import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Link } from "react-router";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const handleSignUser = (e) => {
    e.preventDefault();
    const from = new FormData(e.target);
    const email = from.get("email");
    const password = from.get("password");

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  const handleGoogleUser = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSignUser} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  type="password"
                  name="password"
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
                <Link to={"/regester"} className="text-red-600">
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
