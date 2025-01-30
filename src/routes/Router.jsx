import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import PostJewellery from "../pages/PostJewellery";
import MainLayout from "../layout/mainLayout";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import AddProduct from "../pages/AddProduct";
import Product from "../pages/Product";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";
import ContactPage from "../pages/ContactPage";
import PrivatRoute from "./PrivatRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/post",
        element: <PostJewellery />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Regester />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivatRoute>
            <AddProduct />
          </PrivatRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivatRoute>
            <ViewDetails />
          </PrivatRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
]);
export default router;
