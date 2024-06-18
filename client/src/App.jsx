import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInController } from "./pages/user/SignInController";
import { SignUpController } from "./pages/user/SignUpController";
import { ROUTE } from "./AppRoute";
import Homepage from "./pages/Homepage";
import ProfileController from "./pages/user/ProfileController";
import NotFound from "./pages/NotFound";
import Experiment from "./pages/Experiment";
import CollectionCategory from "./pages/collection/Category";
import CollectionGender from "./pages/collection/Gender";
import CollectionBrand from "./pages/collection/Brand";
import ServerError from "./pages/ServerError";
import ProductPage from "./pages/product/Page";
import CartPageController from "./pages/cart/Controller";
import { useSelector } from "react-redux";

export function getUserRedux(){
  return useSelector((state) => state.user);
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.homepage} element={<Homepage />} />
        <Route path={ROUTE.user.signin} element={<SignInController />} />
        <Route path={ROUTE.user.signup} element={<SignUpController />} />
        <Route path={ROUTE.user.profile} element={<ProfileController />} />
        <Route path={ROUTE.collection.brand} element={<CollectionBrand />} />
        <Route path={ROUTE.collection.gender} element={<CollectionGender />} />
        <Route path={ROUTE.collection.category} element={<CollectionCategory />} />
        <Route path={ROUTE.product.detail} element={<ProductPage />} />
        <Route path={ROUTE.cart} element={<CartPageController />} />
        <Route path={ROUTE.server.error} element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/experiment" element={<Experiment />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
