import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ecomContext } from './Home';


function Header() {
    const {cart}=useContext(ecomContext)
  return (
    <>
       <header>
            <div className='bg-cyan-950 px-20 py-2 flex justify-end items-center text-white'>
                <ul className=' flex gap-4'>
                    <Link to="/signup">SignUp</Link>
                    <Link to="/login">Login</Link>
                    
                </ul>
            </div>
            <div className='bg-blue-400 px-20 py-2 flex justify-between items-center text-white'>
                <h1 className='text-xl'>Logo</h1>
                <ul className='flex justify-between gap-8 p-2'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </ul>
                <ul className='flex justify-between gap-4'>
                    <li><DarkModeIcon/></li>
                    <Link to="/cart"><ShoppingCartIcon/><span>{cart.length}</span></Link>
                    
                </ul>
            </div>
       </header>
    </>
  )
}

export default Header