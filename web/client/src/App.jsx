import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { SignInController } from "./pages/user/SignInController";
import { SignUpController } from "./pages/user/SignUpController";
import {ROUTE} from "./AppRoute";
import Homepage from "./pages/Homepage"
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import ProfileController from "./pages/user/ProfileController";
import NotFound from "./pages/NotFound";
import Experiment from "./pages/Experiment";
import NavigationBar from "./components/navbar/NavigationBar";

function NavigationBarControl() {
  const location = useLocation();
  if (
    location.pathname === ROUTE.user.signin ||
    location.pathname === ROUTE.user.signup
  ) return null;
  return <NavigationBar/>; 
}

function App() {
  return (
    <BrowserRouter>
      <NavigationBarControl/>
      <Routes>
        <Route path={ROUTE.homepage} element={<Homepage />} />
        <Route path={ROUTE.man} element={<Man />} />
        <Route path={ROUTE.woman} element={<Woman />} />
        <Route path={ROUTE.user.signin} element={<SignInController />} />
        <Route path={ROUTE.user.signup} element={<SignUpController />} />
        <Route path={ROUTE.user.profile} element={<ProfileController/>} />
        <Route path='*' element={<NotFound/>} /> {/* Rute untuk URL tidak valid*/}
        <Route path="/experiment" element={<Experiment/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;