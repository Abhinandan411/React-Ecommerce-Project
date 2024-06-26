import React, { createContext, useEffect, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Product from './Product'
import SingleProduct from './SingleProduct'
import ProductOutlet from './ProductOutlet'
import Cart from './Cart'
import SignUp from './SignUp'
import Login from './Login'
import UserAccount from './UserAccount'
import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom'


export const ecomContext = createContext(null);

function Home() {

    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const responce = await fetch("https://strapi-store-server.onrender.com/api/products");
            const result = await responce.json();

            // console.log(result.data);

            setProducts(result.data);
        }
        fetchData()
    }, [])


    function handleAddtoCart(e , product ){
        e.preventDefault();  
         setCart([...cart , product] )
    }

    //  console.log(cart.length);
    //  console.log(cart);

    function handleDeleteProduct(e , product){
        e.preventDefault();
        setCart(cart.filter(item => item !== product));

    }

    return (
        <>
            <BrowserRouter>
                <ecomContext.Provider value={{products , cart, setCart ,handleAddtoCart , handleDeleteProduct}}>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Hero />}></Route>
                        <Route path='/about' element={<About />}></Route>

                        <Route path='/products' element={<ProductOutlet />}>
                          <Route index element={<Product/>}></Route>
                          <Route path=":id" element={<SingleProduct/>} ></Route>
                        </Route>

                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/signup' element={<SignUp />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/useraccount' element={<UserAccount />}></Route>
                    </Routes>
                </ecomContext.Provider>

            </BrowserRouter>

        </>

    )
}

export default Home