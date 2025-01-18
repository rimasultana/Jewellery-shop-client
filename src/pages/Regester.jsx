import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Link } from "react-router";

const Regester = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);

  const handleRegsiter = (e) => {
    e.preventDefault();

    const from = new FormData(e.target);
    const name = from.get("name");
    const email = from.get("email");
    const photo = from.get("photo");
    const password = from.get("password");
    console.log(name, password, email, photo);

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleRegsiter} className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="text"
                  name="photo"
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
              <div className="form-control ">
                <button className="btn bg-pink-500 text-white font-bold">
                  Register
                </button>
              </div>

              <div className="divider">Or</div>

              <button onClick={handleGoogle} className="btn bg-pink-100">
                Google
              </button>
              <p className="text-center">
                Don`t have an account?{" "}
                <Link to={"/login"} className="text-red-600">
                  Log in
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
