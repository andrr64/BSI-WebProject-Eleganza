import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function SignXCtrl () {
  const {currentUser} = useSelector((state) => state.user);
  return currentUser?
    <Navigate to={'/profile'}/>:
    <Outlet/>
}