import React, { useContext, useEffect, useState } from 'react'
import { ecomContext } from './Home'
import DeleteIcon from '@mui/icons-material/Delete';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Footer from './Footer';

function Cart() {
  const { cart, handleDeleteProduct } = useContext(ecomContext);
  // console.log(cart.length);

  const [price, setPrice] = useState(0)
  useEffect(() => {
    let totalPrice = 0;
    for (const prod of cart) {
      totalPrice += Number(prod.attributes.price);
    }
    setPrice(totalPrice);

  }, [cart]);

  console.log(price);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className='item-center p-4'>
            {
              cart.map((prod, index) => (
                <div key={index} className='p-4 rounded-md shadow-lg shadow-indigo-500/40 flex justify-between w-full mb-4'>
                  <div className='flex gap-4 w-1/2'>
                    <img src={prod.attributes.image} alt="" className='h-40 w-60 object-cover rounded-md' />
                    <div>
                      <h1 className='text-2xl font-bold mb-4'>{prod.attributes.title}</h1>
                      <button
                        className='rounded-md p-1 text-red-600 text-lg'
                        onClick={(e) => handleDeleteProduct(e, prod)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                  <div className='p-2 w-1/2 text-right'>
                    <h1 className='text-xl font-bold'>Price</h1>
                    <p className='mt-2 mb-4'>$ {prod.attributes.price / 100}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            {cart.length > 0 ? (
              <div className='p-4'>
                <div className=' bg-cyan-950 p-4 shadow-lg shadow-indigo-500/40 rounded-lg flex items-center justify-between '>
                  <h1 className='text-2xl text-center text-white font-bold'>Total price is  :</h1>
                  <h1 className='text-center p-4 text-white text-xl'>$ {price / 100}</h1>
                </div>
              </div>

            ) : null}

          </div>
        </>


      ) : <>
        <div className='p-4 mt-4 mb-4 text-center font-bold'>
          <h1 className='text-xl'>Your cart is empty :( </h1>
          <h1 className='text-xl'><EmojiEmotionsIcon className='text-blue-500'/> We will happy if you add some products in your cart.</h1>
        </div>

      </>

      }



      <Footer />



    </>
  )
}

export default Cart