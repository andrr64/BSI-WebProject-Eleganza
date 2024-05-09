import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { SignXCtrl } from "./pages/user/SignXCtrl";
import {ROUTE} from "./AppRoute";
import Homepage from "./pages/Homepage"
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import ProfileCtrl from "./pages/user/ProfileCtrl";
import Profile from "./pages/user/Profile";
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
        <Route element={<SignXCtrl />}>
          <Route path={ROUTE.user.signin} element={<SignIn />} />
          <Route path={ROUTE.user.signup} element={<SignUp />} />
        </Route>
        <Route element={<ProfileCtrl />}>
          <Route path={ROUTE.user.profile} element={<Profile/>} />
        </Route>
        <Route path='*' element={<NotFound/>} /> {/* Rute untuk URL tidak valid*/}
        <Route path="/experiment" element={<Experiment/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;