import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { SignInController } from "./pages/user/SignInController";
import { SignUpController } from "./pages/user/SignUpController";
import { ROUTE } from "./AppRoute";
import Homepage from "./pages/Homepage";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import ProfileController from "./pages/user/ProfileController";
import NotFound from "./pages/NotFound";
import Experiment from "./pages/Experiment";
import CollectionCategory from "./pages/collection/Category";
import CollectionGender from "./pages/collection/Gender";
import CollectionBrand from "./pages/collection/Brand";
import NavigationBar from "./components/navbar/NavigationBar";
import Footer from "./components/Footer";
import ServerError from "./pages/ServerError";

// Layout component that includes the NavigationBar
const MainLayout = () => (
  <>
    <NavigationBar />
    <Outlet />
    <Footer/>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTE.homepage} element={<Homepage />} />
          <Route path={ROUTE.man} element={<Man />} />
          <Route path={ROUTE.woman} element={<Woman />} />
          <Route path={ROUTE.collection_brand} element={<CollectionBrand />} />
          <Route path={ROUTE.collection_category} element={<CollectionCategory />} />
          <Route path={ROUTE.collection_gender} element={<CollectionGender />} />
        </Route>
        <Route path={ROUTE.user.signin} element={<SignInController />} />
        <Route path={ROUTE.user.signup} element={<SignUpController />} />
        <Route path={ROUTE.user.profile} element={<ProfileController />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notfound" element={<ServerError />} />
        <Route path="/experiment" element={<Experiment />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
