import React from 'react'
import emptyCart from "../../assets/lotties/empty-cart.json"
import Lottie from "react-lottie";
import { useNavigate } from 'react-router-dom';
import { IoBagOutline } from "react-icons/io5";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: emptyCart,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid"
  }
};

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className="mx-auto my-auto text-center">
          <Lottie
            options={defaultOptions}
            height={400}
          />
          <h1 className='text-2xl text-slate-600 font-inter font-bold'>Keranjang Kosong</h1>
          <button className='mt-4 btn flex mx-auto my-auto' onClick={() => navigate(-1)}>
            <IoBagOutline/>
             Kembali Belanja
          </button>
        </div>
      </div>
    </>
  )
}
