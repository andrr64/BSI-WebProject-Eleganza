import React, { useState } from 'react'
import { formatRupiah } from '../../utility/Format'
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../../AppRoute'

export default function OrderSummary({
  total
}) {
  const navigate = useNavigate()
  return (
    <div className="font-inter ol-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
      <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">Ringkasan Order</h2>
      <div className="mt-8">
        <div className="pb-6">
          <p className="font-normal leading-8 text-black">Anda Harus Membayar</p>
          <p className="text-3xl font-semibold mt-2 text-black">{formatRupiah(total)}</p>
        </div>
        <button onClick={(e) => navigate(ROUTE.checkout) } className="flex items-center w-full px-5 py-4 rounded-full gap-2 border-none outline-0 group font-bold text-lg leading-8 text-white shadow-sm shadow-indigo-500/30 transition-all duration-500 bg-indigo-600 hover:bg-indigo-700 justify-center">
          Checkout Now
          <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
