import React from 'react'
import NavigationBar from '../../components/navbar/NavigationBar'
import Lottie from 'react-lottie'
import checkoutSuccess from '../../assets/lotties/checkout-success.json'
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../AppRoute';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: checkoutSuccess,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid"
    }
};

export default function Checkoutuccess() {
    const navigate = useNavigate()
    return (
        <div className='h-screen text-slate-600 flex items-center justify-center'>
            <NavigationBar />
            <div className='mx-auto my-auto text-center'>
                <Lottie 
                    options={defaultOptions}
                    height={400}
                />
                <h1 className='text-3xl font-semibold'>Transaksi Sukses</h1>
                <button className='btn mt-3' onClick={() => navigate(ROUTE.homepage)}>
                    Kembali Belanja
                </button>
            </div>
        </div>
    )
}