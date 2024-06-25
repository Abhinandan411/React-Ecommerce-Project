import React, { useContext } from 'react';
import { ecomContext } from './Home';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function Product() {
  const { products, handleAddtoCart } = useContext(ecomContext);
  // console.log(products);

  return (
    <>
      <div className='flex flex-wrap justify-between p-4'>
        {products.map((prod, index) => {
          return (
            <div key={index} className='w-full sm:w-1/2 md:w-1/3 p-4'>
              <div className='p-4 bg-slate-200 rounded-md shadow-lg shadow-indigo-500/40'>
                <Link to={`/products/${prod.id}`}>
                  <img src={prod.attributes.image} alt="" className='h-80 w-full object-cover' />
                </Link>

                <div className='p-2'>
                  <h1 className='text-2xl font-bold'>{prod.attributes.title}</h1>
                  <p className='mt-2 mb-4'>$ {prod.attributes.price / 100}</p>

                  <button
                    className='w-full p-2 rounded-lg text-white bg-blue-600 '
                    onClick={(e) => handleAddtoCart(e, prod)}
                  >
                    Add to cart
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Product;
