import { createBrowserRouter } from "react-router";
import MainLayout from "../layOut/mainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import PostJewellery from "../pages/PostJewellery";

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
      }
    ],
  },
]);
export default router;
