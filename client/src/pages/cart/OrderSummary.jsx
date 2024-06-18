import React from 'react'

export default function OrderSummary() {
  return (
    <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
    <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">Order Summary</h2>
    <div className="mt-8">
      <div className="flex items-center justify-between pb-6">
        <p className="font-normal text-lg leading-8 text-black">3 Items</p>
        <p className="font-medium text-lg leading-8 text-black">$480.00</p>
      </div>
      <form>
        <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Shipping</label>
        <div className="flex pb-6">
          <div className="relative w-full">
            <div className="absolute left-0 top-0 py-3 px-4">
              <span className="font-normal text-base text-gray-300">Second Delivery</span>
            </div>
            <input type="text" className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400" placeholder="$5.00" />
            <button id="dropdown-button" data-target="dropdown-delivery" className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-0 pl-2" type="button">
              <svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <div id="dropdown-delivery" aria-labelledby="dropdown-delivery" className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 bg-white right-0">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code</label>
        <div className="flex pb-4 w-full">
          <div className="relative w-full">
            <div className="absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
            <input type="text" className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400" placeholder="xxxx xxxx xxxx" />
            <button id="dropdown-button" data-target="dropdown" className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-0 pl-2" type="button">
              <svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <div id="dropdown" className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-between border-t border-gray-200 py-6">
        <p className="font-normal text-lg leading-8 text-black">Subtotal</p>
        <p className="font-medium text-lg leading-8 text-black">$485.00</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <p className="font-normal text-lg leading-8 text-black">Shipping Fee</p>
        <p className="font-medium text-lg leading-8 text-black">$5.00</p>
      </div>
      <div className="flex items-center justify-between pb-6">
        <p className="font-normal text-lg leading-8 text-black">You have to Pay</p>
        <p className="font-semibold text-lg leading-8 text-black">$485.00</p>
      </div>
      <button className="flex items-center w-full px-5 py-4 rounded-full gap-2 border-none outline-0 group font-bold text-lg leading-8 text-white shadow-sm shadow-indigo-500/30 transition-all duration-500 bg-indigo-600 hover:bg-indigo-700 justify-center">
        Checkout Now
        <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  </div>
  )
}
