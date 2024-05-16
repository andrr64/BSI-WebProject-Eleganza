import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../../AppRoute";
import SignIn from "./SignIn";

export function SignInController () {
  const {currentUser} = useSelector((state) => state.user);
  return currentUser === null?
    <SignIn/>:
    <Navigate to={ROUTE.homepage}/>;
}