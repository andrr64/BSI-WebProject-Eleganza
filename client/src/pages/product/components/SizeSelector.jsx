import React from 'react'
import HoverInformation from '../../../components/HoverInformation';

export default function ProductSizeSelector({
    data,
    currentIndex,
    callback
}) {
    if (data.length === 0){
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
        {data.map((size, index) => (
            <button onClick={() => callback(index)} key={index}>
                <span className={`rounded-md border border-gray-200 px-4 py-2 flex items-center justify-center ${currentIndex === index && 'bg-blue-600 text-white'} peer-checked:text-white`}>
                    {size}
                </span>
            </button>
        ))}
        </div>
    </div>
    );
}
