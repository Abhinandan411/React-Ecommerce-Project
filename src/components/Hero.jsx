import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FeaturedProduct from './FeaturedProduct'
import Footer from './Footer'

function Hero() {
   
    return (
        <>
            <main className='py-10 px-20 '>
                <div className='flex   gap-12 mb-2 mt-2'>
                    <div className='w-1/2 items-center mt '>
                        <h1 className='mt-2 mb-8 text-5xl'>We are changing the way people shop</h1>
                        <p className='mt-4 mb-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum voluptates possimus alias molestiae blanditiis dolores nostrum molestias ipsam voluptatem.</p>
                        {/* <a href="" className='bg-cyan-950 p-4 text-white rounded-lg '>OUR PRODUCTS</a> */}
                        <Link to="/products" className='bg-blue-500 p-3 text-white rounded-lg shadow-lg shadow-indigo-500/40 '>OUR PRODUCTS</Link>
                    </div>

                    <div className='w-1/2'>
                        <img className=' rounded-lg shadow-lg shadow-indigo-500/40' src="https://th.bing.com/th/id/R.0a95fad0aa00fdb4a28c2f8036b86fb0?rik=qgE3CRV8suY9xg&riu=http%3a%2f%2fdesignbump.com%2fwp-content%2fuploads%2f2015%2f08%2fLiving-Room-Furniture.jpg%3fx97918&ehk=zliEIb09E9GzuobrcbgJmkuuP8sm5ImpcrJbK8x5eg8%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                </div>
               
                
            </main>
            <FeaturedProduct/>
            <Footer/>
        </>
    )
}

export default Hero