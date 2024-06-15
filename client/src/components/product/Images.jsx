import React from 'react'

export default function ProductImages({
    images,
    imageIndex,
    callback
}) {
  return (
    <div className="w-full lg:sticky top-0 text-center">
        <div className="lg:h-[600px]">
        <img
            src={images[imageIndex]}
            alt="Product Image"
            className="lg:w-11/12 w-full h-full rounded-xl object-cover object-top"
        />
        </div>
        <div className="flex flex-wrap my-5 gap-x-8 gap-y-6 justify-start mx-auto mt-5">
        {
            images.map((val, index) => (
            <img 
                src={val} 
                key={index} 
                onClick={() => callback(index)} 
                className={`w-20 cursor-pointer rounded-xl transition hover:scale-105 ease-in-out duration-300 ${imageIndex === index ? 'opacity-50 outline outline-2 outline-indigo' : ''}`}
            />
            ))
        }
        </div>
    </div>
  )
}
