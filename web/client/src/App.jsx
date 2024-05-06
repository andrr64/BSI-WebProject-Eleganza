import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Man from "./pages/Collection/Man";
import Woman from "./pages/Collection/Woman";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBarControl />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/collection/man' element={<Man />} />
        <Route path='/collection/woman' element={<Woman />} />
      </Routes>
      <FooterControl />
    </BrowserRouter>
  )
}

function FooterControl(){
  const location = useLocation();
  if (location.pathname === '/signin' || location.pathname === '/signup'){
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