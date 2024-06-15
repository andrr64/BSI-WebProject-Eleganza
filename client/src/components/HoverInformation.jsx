import React from 'react'
import { CiCircleQuestion } from 'react-icons/ci'

export default function HoverInformation({
    title, description
}) {
  return (
    <>
        <div className="dropdown dropdown-end dropdown-right dropdown-hover">
            <CiCircleQuestion className="cursor-pointer"/>
            <div className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
            <div className="card-body">
                <h2 className='card-title'>{title}</h2>
                <p className='font-normal'>{description}</p>
            </div>
            </div>
        </div>
    </>
  )
}
