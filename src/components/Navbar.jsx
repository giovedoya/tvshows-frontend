import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white">
  <ul className="flex flex-col md:flex-row justify-center items-center text-center md:text-left p-4 space-x-4">
    <li className="mx-4 md:mx-0">
      <NavLink
        exact
        to='/'
        activeClassName="font-bold"
        className="nav_link hover:text-gray-400"
      >
        Home
      </NavLink>
    </li>
    <li className="mx-4 md:mx-0">
      <NavLink
        to='/new'
        activeClassName="font-bold"
        className="nav_link hover:text-gray-400"
      >
        New Show
      </NavLink>
    </li>
    <li className="mx-4 md:mx-0">
      <NavLink
        to='/'
        className="nav_link hover:text-gray-400"
      >
        Go back
      </NavLink>
    </li>
  </ul>
</div>

  )
}
