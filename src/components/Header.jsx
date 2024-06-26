import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ecomContext } from './Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
    const { cart } = useContext(ecomContext)
    return (
        <>
            <header>
                <div className='bg-cyan-950 px-20 py-2 flex justify-end items-center text-white'>
                    <ul className=' flex gap-4'>
                        <Link to="/signup">SignUp</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/useraccount"><AccountCircleIcon/></Link>

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
                        <li><DarkModeIcon /></li>
                        <Link to="/cart"><ShoppingCartIcon className='absolute' /><span className=" relative left-5 bottom-3 inline-block text-center bg-cyan-900 text-white text-xs font-bold w-5 h-4 rounded-full">
                            {cart.length}
                        </span></Link>

                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header