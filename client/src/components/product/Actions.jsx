import React from 'react'

export default function ProductActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        <button className="w-full p-3 border border-gray-200 bg-gray-50 rounded-md text-gray-800">Add to cart</button>
        <button className="w-full p-3 bg-blue-600 border border-blue-600 rounded-md text-white">Buy now</button>
    </div>
  )
}
