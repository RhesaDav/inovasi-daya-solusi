import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-10 py-5 bg-red-50'>
        <h1>My Website</h1>
        <ul className='flex gap-10'>
            <li>
                <NavLink className={({isActive}) => (isActive? 'bg-red-200  px-3 py-5' : 'px-3 py-5')} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive? 'bg-red-200  px-3 py-5' : 'px-3 py-5')} to='/add'>Add</NavLink>
            </li>
        </ul>
    </nav>
  )
}
