import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import PostJewellery from "../pages/PostJewellery";
import MainLayout from "../layout/mainLayout";
import Login from "../pages/Login";
import Regester from "../pages/Regester";

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
        path:"/regester",
        element:<Regester/>
      }
    ],
  },
]);
export default router;
