import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../../AppRoute";
import SignUp from "./SignUp";

export function SignUpController () {
  const {currentUser} = useSelector((state) => state.user);
  console.log(currentUser);
  return currentUser === null?
    <SignUp/>:
    <Navigate to={ROUTE.homepage}/>;
}