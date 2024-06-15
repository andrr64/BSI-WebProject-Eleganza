import React from 'react'
import { formatRupiah } from '../../utility/Format'

export default function ProductPrice({product}) {
  return (
    <div className="flex space-x-2 my-4 items-center">
        <p className="text-3xl font-semibold text-black">{formatRupiah(product.price)}</p>
        <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">Stok Tersedia</span>
    </div>
  )
}
