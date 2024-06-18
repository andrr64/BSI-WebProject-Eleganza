import React, { useEffect, useState } from 'react';
import { getUserRedux } from '../../App';
import { serverGetUserCartItems } from '../../api/API';
import ShoppingCart from './ShoppingCart';
import OrderSummary from './OrderSummary';
import Page from '../RenderPage';

const CartPage = () => {
  const [cartItems, setCartData] = useState([]);
  const { currentUser } = getUserRedux();
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(true);
  
  const getData = async () => {
    try {
      setLoading(true);
      setServerStatus(true);
      const response = await serverGetUserCartItems(currentUser._id);
      if (response.status) {
        setCartData(response.data);
      } else {
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

  const renderContent = () => (
    <section className="relative z-10 my-10 after:content-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <ShoppingCart productItems={cartItems} />
          <OrderSummary />
        </div>
      </div>
    </section>
  )

  return Page(loading, serverStatus, renderContent, true, false)
};

export default CartPage;
