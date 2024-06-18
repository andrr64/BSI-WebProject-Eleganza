import React, { useEffect, useState } from 'react'
import { IconCart } from '../Icons'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTE } from '../../AppRoute'
import { serverGetItemsLength } from '../../api/API';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT, showAlert } from '../Alert';

export default function Cart() {
  
  const [itemsLength, setItemsLength] = useState('1');
  const {currentUser} = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const getItemsLength = async() => {
      setItemsLength((await serverGetItemsLength(currentUser._id)).data);
    }
    getItemsLength();
  });

  const handleOnClick = () => {
    if (!currentUser){
      return showAlert(ALERT.WARNING, 'Login terlebih dahulu.');
    }
    return navigate(ROUTE.cart);
  }

  return (
    <button onClick={() => handleOnClick()} className='hover:bg-gray-700 transition ease-in-out duration-300 flex items-center gap-1 my-auto py-2 px-3 rounded-full bg-gray-600' to={ROUTE.cart}>
        <IconCart size='26px'/>
        {currentUser && (<div className='bg-red-600 px-2 rounded-full text-center'>{itemsLength}</div>)}
    </button>
  )
}
