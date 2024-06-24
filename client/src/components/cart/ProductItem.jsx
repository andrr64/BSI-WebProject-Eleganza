import React from 'react'
import { formatRupiah } from '../../utility/Format';
import { Link } from 'react-router-dom';
import { goToProductDetail } from '../../AppRoute';
import { FaTrash } from "react-icons/fa"
export default function ProductItem({ name, category, price, quantity, total, image, id, callbackHandleDelete}) {
    return (
        <div className="grid grid-cols-12 mt-8 pb-8 border-b border-gray-200 font-inter">
            <div className="col-span-12 md:col-span-7 md:pr-5">
                <div className="flex items-center gap-5 w-full max-w-[420px]">
                    <button onClick={(e) => callbackHandleDelete(id)}>
                        <FaTrash size={20} className='text-red-400'/>
                    </button>
                    <div className="flex items-center w-full max-w-[130px]">
                        <img className="w-full rounded-2xl h-full" src={image} alt={name} />
                    </div>
                    <div className="flex-1">
                        <Link className='tooltip' data-tip ='Klik Untuk Detail Produk' to={goToProductDetail(id)}>
                            <h4 className="font-semibold leading-7 text-black">{name}</h4>
                        </Link>
                        <p className="text-gray-500 text-sm mt-1.5">{category}</p>
                        <p className="font-bold text-lg leading-8 text-gray-700 mt-2">{formatRupiah(price)}</p>
                    </div>  
                </div>
            </div>
            <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-6 mt-8 md:mt-0">
                    <div className="col-span-3 flex justify-center">
                        <div className="h-11 flex items-center border border-gray-300 rounded-full shadow-xs overflow-hidden px-1">
                            <button className="px-5 py-1 text-lg leading-8 font-medium text-gray-700">-</button>
                            <span className="w-10 h-full flex items-center justify-center font-semibold text-lg leading-8 text-gray-700 bg-transparent outline-0">{quantity}</span>
                            <button className="px-5 py-1 text-lg leading-8 font-medium text-gray-700">+</button>
                        </div>
                    </div>
                    <div className="col-span-3 flex justify-center items-center">
                        <span className="font-semibold text-lg leading-8 text-black">{formatRupiah(total)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};