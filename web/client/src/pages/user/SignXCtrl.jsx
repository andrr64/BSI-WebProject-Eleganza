import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../AppRoute";

export function SignXCtrl () {
  const {currentUser} = useSelector((state) => state.user);
  return currentUser?
    <Navigate to={ROUTE.user.profile}/>:
    <Outlet/>
}