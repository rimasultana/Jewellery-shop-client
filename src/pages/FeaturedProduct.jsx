import { FaShippingFast } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className="bg-teal-800 text-white py-14  my-5">
      <div className="container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex items-center space-x-4">
          <FaShippingFast className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Free Shipping</h3>
            <p className="text-sm">
              Ante Dignissim Porttitor Curabitur Ante Tempus Cursus Consequat
              Habitant Ex.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <MdOutlineShoppingBag className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Online Shopping</h3>
            <p className="text-sm">
              In Donec Mattis Viverra Senectus Sapien Proin Dictum Dignissim
              Malesuada.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <IoStorefrontOutline className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Store Pickup</h3>
            <p className="text-sm">
              Quis Bibendum A, Fringilla Elementum Nostra Penatibus Placerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
