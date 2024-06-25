import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ecomContext } from './Home'

function SingleProduct() {
    const { id } = useParams()

    const { products } = useContext(ecomContext);
    //    console.log(products);

    const [singleProductDetail, setSingleProductDetail] = useState({});

    useEffect(() => {
        if (products.length > 0 && id) {
            setSingleProductDetail(
                products.find((product) => product.id === Number(id))
            );
        }
    }, [id, products]);

    console.log(singleProductDetail);



    return (
        <>
        { Object.keys(singleProductDetail).length > 0 ?(
             <div className='flex p-2'>
             <div className="w-1/2">
                 <img src={singleProductDetail.attributes.image} />
             </div>
             <div className="w-1/2">
                 <h3>{singleProductDetail.attributes.title}</h3>
                 <h3>{singleProductDetail.attributes.company}</h3>
                 <p><strong>Category : </strong>{singleProductDetail.attributes.category}</p>
                 <p><strong>Price : </strong>$ {singleProductDetail.attributes.price / 100 }</p>
                 <p>{singleProductDetail.attributes.description}</p>
                 <p className='flex items-center gap-3'><strong>Colors : </strong>{singleProductDetail.attributes.colors.map((color , idx ) =>{ return <span key={idx} className=' w-5 h-5 rounded-full' style={{backgroundColor : color}}>  </span>})}</p>
             </div>
         </div>
        ) :""

        }

           
        </>
    )
}

export default SingleProduct