/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivatRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (!user && loading) {
    return (
      <p className="border-2 h-10 w-10 rounded-full animate-spin border-dotted border-teal-800">
        Loading
      </p>
    )
  }
  if(!user && !loading){
    return <Navigate to={"/register"}/>
  }

  return <>{children}</>;
};

export default PrivatRoute;
