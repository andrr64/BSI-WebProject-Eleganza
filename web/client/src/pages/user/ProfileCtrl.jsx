import { useSelector } from "react-redux"
import {Outlet, Navigate } from "react-router-dom";
import { ROUTE } from "../../AppRoute";

export default function ProfileCtrl() {
  const {currentUser} = useSelector((state) => state.user);

  return currentUser?
    <Outlet/>: 
    <Navigate to={ROUTE.user.signin} />
}
