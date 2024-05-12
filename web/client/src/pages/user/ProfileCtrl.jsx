import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTE } from "../../AppRoute";
import { serverApiJsonGet } from "../../api/API";
import { signOutSuccess } from "../../redux/user/userSlice";

export default function ProfileCtrl() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const isValidToken = async () => {
      try {
        const res = await(await serverApiJsonGet('/user/check-token')).json();
        if (!res.status) {
          dispatch(signOutSuccess());
        }
      } catch (error) {
        console.log();
      }
    };
    if (currentUser !== null){
      isValidToken();
    }
  }, []);
  return currentUser ? <Outlet /> : <Navigate to={ROUTE.user.signin} />;
}