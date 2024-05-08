import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Man from "./pages/Collection/Man";
import Woman from "./pages/Collection/Woman";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ProfileCtrl from "./pages/user/ProfileCtrl";
import Profile from "./pages/user/Profile";
import { SignXCtrl } from "./pages/user/SignXCtrl";

function App() {
  return (
    <BrowserRouter>
      <NavigationBarControl />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection/man' element={<Man />} />
        <Route path='/collection/woman' element={<Woman />} />
        <Route element={<SignXCtrl />}>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route element={<ProfileCtrl />}>
          <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
      <FooterControl />
    </BrowserRouter>
  )
}

function FooterControl(){
  const location = useLocation();
  if (
    location.pathname === '/signin' || 
    location.pathname === '/signup'){
    return null;
  }
  return <Footer/>
}

function NavigationBarControl() {
  const location = useLocation();
  if (location.pathname === '/signin' || location.pathname === '/signup') {
    return null;
  }
  return <NavigationBar />;
}
export default App;