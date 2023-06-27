import React from 'react'
import './NavBar.css'
import { Link,NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1>Shopping App</h1>
      <div className="link">
        {/* <Link to='/'>Home</Link> */}
        <NavLink to='/'   activeClassName="active">Home</NavLink>
        
        <Link to='/Product'>Product</Link>
        <Link to='/addToCart'>Cart</Link>
        

      </div>
    </div>
  )
}

export default NavBar