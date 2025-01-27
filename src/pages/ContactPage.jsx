import { Link } from "react-router";
import contact from "../assets/contact.avif";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-24 bg-gradient-to-r from-pink-300 to-teal-200 relative overflow-hidden">
        <div
          style={{ backgroundImage: `url(${contact})` }}
          className="absolute w-full h-full bg-no-repeat bg-cover opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-serif font-semibold text-black">
            Contact
          </h1>
          <nav className="mt-2 text-gray-600">
            <Link to={"/"}>
              <span className="text-black font-medium">Home</span> /{" "}
            </Link>
            <Link to={"/contact"}>
              <span className="text-gray-500">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
