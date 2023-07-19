import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = ({ isLoggedIn }) => {
    // console.log(isLoggedIn);
    return isLoggedIn?.accessToken.length > 0 ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
};

export default PrivateRoutes;