import React, { useContext } from 'react'
import { ecomContext } from './Home'

function FeaturedProduct() {
    const { products, handleAddtoCart } = useContext(ecomContext);

    const featuredProducts = products.filter((prod) => {
        return prod.attributes.featured === true;
    })
    // console.log(featuredProducts);

    return (
        <>
            <div className='flex item-center mt-12 justify-around p-2'>
                {
                    featuredProducts.map((prod, index) => {
                        // console.log(prod)
                        return <div key={index} className=' p-4 bg-slate-200 rounded-md shadow-lg shadow-indigo-500/40  '>
                            <img src={prod.attributes.image} alt="" className=' h-80' />
                            <div className='p-2'>
                                <h1 className='text-2xl font-bold'>{prod.attributes.title}</h1>
                                <p className='mt-2 mb-4'>$ {prod.attributes.price / 100}</p>
                                <button href="" className=' w-full p-2 rounded-lg text-white bg-blue-600 ' onClick={(e) => handleAddtoCart(e, prod)}>Add to cart</button>
                            </div>

                        </div>
                    })
                }
            </div>
        </>
    )
}

export default FeaturedProduct