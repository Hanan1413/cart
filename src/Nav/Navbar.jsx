import React from 'react'
import { useGlobalContext } from '../context/context'

const Navbar = () => {
  const {amount} = useGlobalContext();

  return (
      <header >
          <h1>Shopping Cart</h1>
          <ul className="breadcrumb">
            <li>Home</li>
            <li>Shopping Cart</li>
          </ul>
          <span className="count">  {amount} items in the bag</span>
        </header>
  )
}

export default Navbar
