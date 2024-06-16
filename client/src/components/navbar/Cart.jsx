import React from 'react'
import { IconCart } from '../Icons'
import { Link } from 'react-router-dom'
import { ROUTE } from '../../AppRoute'

export default function Cart() {
  return (
    <Link className='my-auto' to={ROUTE.cart}>
        <IconCart size='26px'/>
    </Link>
  )
}
