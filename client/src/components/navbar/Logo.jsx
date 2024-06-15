import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE } from '../../AppRoute'

export default function Logo() {
  return (
    <div>
        <Link to={ROUTE.homepage}>
            <span className="font-laBelle text-3xl">Eleganza</span>
        </Link>
    </div>
  )
}
