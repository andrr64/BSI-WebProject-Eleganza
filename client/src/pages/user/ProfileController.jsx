import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../../AppRoute";
import { serverApiJsonGet } from "../../api/API";
import { signOutSuccess } from "../../redux/user/userSlice";
import Profile from "./Profile";

export default function ProfileController() {
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
          dispatch(signOutSuccess());
      }
    };
    if (currentUser !== null){
      isValidToken();
    }
  }, []);
  return currentUser ? <Profile/> : <Navigate to={ROUTE.user.signin} />;
}