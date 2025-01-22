import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import PostJewellery from "../pages/PostJewellery";
import MainLayout from "../layout/mainLayout";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import Prodict from "../pages/Prodict";
import Contact from "../pages/Contact";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404 Error</h1>,
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
        path:"/post",
        element:<PostJewellery/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Regester/>
      },
      {
        path:"/product",
        element:<Prodict/>
      },
      {
        path:"/addproduct",
        element:<AddProduct/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
]);
export default router;
