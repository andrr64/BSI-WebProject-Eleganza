import React from 'react'
import HoverInformation from '../HoverInformation';

export default function ProductSizeSelector({
    product,
    currentIndex,
    callback
}) {
    if (product.list_size.length === 0){
        return (
            <div></div>
        )
    }
    return (
    <div>
        <div className='mb-2 flex items-center'>
            <h2 className="text-base text-gray-800 font-semibold mr-2">
                Select size
            </h2>
            <HoverInformation title={'Meme'} description={'Lorem ipsum'}/>
        </div>
        <div className="flex flex-wrap gap-2">
        {product.list_size.map((size, index) => (
            <button onClick={() => callback(index)} key={index}>
                <span className={`transition ease-in-out duration-300 rounded-md border ${currentIndex !== index && 'hover:bg-gray-200'} border-gray-200 px-4 py-2 flex items-center justify-center ${currentIndex === index && 'bg-blue-600 text-white'} peer-checked:text-white`}>
                    {size}
                </span>
            </button>
        ))}
        </div>
    </div>
    );
}
