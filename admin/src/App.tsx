import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import Transaction from './pages/Transaction';
import Users from './pages/Users';
import Products from './pages/Products';
import FormProduct from './pages/Products/form';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard - Eleganza" />
              <ECommerce />
            </>
          }
        />

        <Route
          path="/users"
          element={
            <>
              <PageTitle title="Users - Eleganza" />
              <Users />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <PageTitle title="Products - Eleganza" />
              <Products/>
            </>
          }
        />

        <Route
          path="/product/:mode"
          element={
            <>
              <PageTitle title="Products - Eleganza" />
              <FormProduct/>
            </>
          }
        />

        <Route
          path='/transaction'
          element={
            <>
              <PageTitle title='Transaction - Admin' />
              <Transaction />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
