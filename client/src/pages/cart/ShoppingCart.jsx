import React from 'react'
import ProductItem from '../../components/cart/ProductItem'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

export default function ShoppingCart({
    productItems,
    callbackHandleDelete
}) {
    const navigate = useNavigate();
    return (
        <div className="font-inter col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <button className='btn flex gap-2' onClick={() => navigate(-1)}>
                <FaArrowLeft/>
                <span>Kembali</span>
            </button>
            <div className="flex mt-5 items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-2xl leading-10 text-black">Keranjang</h2>
                <h2 className="font-manrope font-bold text-lg leading-8 text-gray-600">{productItems.length} Produk</h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-7">
                    <p className="font-normal leading-8 text-gray-400">Detail Produk</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <div className="grid grid-cols-5">
                        <div className="col-span-3">
                            <p className="font-normal leading-8 text-gray-400 text-center">Kuantitas</p>
                        </div>
                        <div className="col-span-2">
                            <p className="font-normal leading-8 text-gray-400 text-center">Total</p>
                        </div>
                    </div>
                </div>
            </div>
            {productItems.map((item, index) => (
                <ProductItem
                    key={index}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    quantity={item.quantity}
                    total={Number(item.price) * Number(item.quantity)}
                    image={item.picture}
                    id={item.id}
                    callbackHandleDelete={callbackHandleDelete}
                />
            ))}
        </div>
    )
}