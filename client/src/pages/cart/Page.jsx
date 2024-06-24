import React, { useEffect, useState } from 'react';
import { getUserRedux } from '../../App';
import { serverDelUserCartItem, serverGetUserCartItems } from '../../api/API';
import ShoppingCart from './ShoppingCart';
import OrderSummary from './OrderSummary';
import Page from '../RenderPage';
import { ROUTE } from '../../AppRoute';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { showQuestion } from '../../components/Alert';
import EmptyCart from './EmptyCart';

const CartPage = () => {
  const [cartItems, setCartData] = useState([]);
  const { currentUser } = getUserRedux();
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      setServerStatus(true);
      const response = await serverGetUserCartItems(currentUser._id);
      if (response.status) {
        setCartData(response.data);
      } else {
        if (cartItems.length === 0) {
          return navigate(ROUTE.cart);
        }
        setServerStatus(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const callbackHandleDelete = async (product_id) => {
    const answer = await showQuestion('Hapus Produk?', 'Anda yakin ingin menghapus produk dari keranjang?', 'Hapus');
    if (answer) {
      const response = await serverDelUserCartItem(currentUser._id, product_id);
      if (response.status === true) {
        await getData();
      }
    }
  }

  const renderContent = () => {
    if (cartItems.length !== 0) {
      return (
        <section className="relative z-10 my-10 after:content-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              <ShoppingCart productItems={cartItems} callbackHandleDelete={callbackHandleDelete} />
              <OrderSummary total={cartItems.reduce((sum, item) => sum + item.price, 0)} />
            </div>
          </div>
        </section>
      )
    } else {
      return <EmptyCart/>
    }
  }

  return Page(loading, serverStatus, renderContent, true, false)
};

export default CartPage;
