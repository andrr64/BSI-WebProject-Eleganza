import { useSelector } from "react-redux";
import { ROUTE } from "../../AppRoute";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

export function SignInController () {
  const {currentUser} = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser !== null){
      navigate(ROUTE.user.profile);
      return; 
    }
  }, [])
  
  return <SignIn/>;
}