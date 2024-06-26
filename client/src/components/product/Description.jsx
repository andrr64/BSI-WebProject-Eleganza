import React from 'react'
import { goToBrandCollection } from '../../AppRoute'
import { Link, useNavigate } from 'react-router-dom'
import ProductPrice from './Price'
import ProductOverallRating from './OverallRating'

export default function ProductDescription({
    product
}) {
  console.log(product);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-wrap items-start gap-4">
        <div className='space-y-2'>
          <h2 className="text-2xl font-inter font-extrabold text-gray-800">{product.name}</h2>
          <button className='button bg-black text-white rounded-lg px-4 text-sm py-1' onClick={() => navigate(goToBrandCollection(product.brand.title))}>
            {product.brand.title}
          </button>
        </div>
        <div className="ml-auto flex flex-wrap gap-4">
          <button
            type="button"
            className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              fill="currentColor"
              className="mr-1"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              />
            </svg>
            100
          </button>
          <button
            type="button"
            className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0"
                data-original="#000000"
              />
              <path
                d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0"
                data-original="#000000"
              />
              <path
                d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0"
                data-original="#000000"
              />
              <path
                d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0"
                data-original="#000000"
              />
              <path
                d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0"
                data-original="#000000"
              />
            </svg>
            Share
          </button>
        </div>
      </div>
      <ProductPrice product={product} />
      <ProductOverallRating totalReviews={2} rating={0}/>
      <div className="my-6">
        <p className="text-base text-gray-500">
          {product.data.description}
        </p>
      </div>
    </div>
  )
}
