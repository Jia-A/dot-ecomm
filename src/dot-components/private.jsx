import { Navigate, useLocation, Outlet } from "react-router-dom"
import { useAuth } from "../Context/authContext"


export const PrivateRoute = () => {
    const { token } = useAuth();
   const location = useLocation()

   return token ? (
       <Outlet/>
   ) : (
       <Navigate to="/login" state={{from : location}} replace/>
   )
}