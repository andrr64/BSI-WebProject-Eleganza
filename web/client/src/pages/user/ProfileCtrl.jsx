import { useSelector } from "react-redux"
import {Outlet, Navigate } from "react-router-dom";

export default function ProfileCtrl() {
  const {currentUser} = useSelector((state) => state.user);

  return currentUser?
    <Outlet/>: 
    <Navigate to={'/signin'} />
}
