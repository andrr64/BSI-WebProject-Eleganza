import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../AppRoute';
import CartPage from './Page';

export default function CartPageController() {
    const {currentUser} = useSelector((state) => state.user);
    
    return (
        currentUser === null ?
        <Navigate to={ROUTE.user.signin}/> : 
        <CartPage/>
    )
}

