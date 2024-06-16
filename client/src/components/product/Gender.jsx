import React from 'react'

export default function ProductGender({product}) {
  return (
    <>
    <div className="mb-5">
        <p className="font-semibold text-gray-800 flex items-center">
          Gender
        </p>
        <div className="mt-3">
          <p className="p-1 border rounded-lg inline px-4 py-2 text-gray-600">{product.gender}</p>
        </div>
    </div>
    </>
  )
}
