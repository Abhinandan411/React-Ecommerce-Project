import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ecomContext } from './Home';

function SingleProduct() {
    const { id } = useParams();

    const { products , handleAddtoCart } = useContext(ecomContext);

    const [singleProductDetail, setSingleProductDetail] = useState({});

    useEffect(() => {
        if (products.length > 0 && id) {
            setSingleProductDetail(
                products.find((product) => product.id === Number(id))
            );
        }
    }, [id, products]);

    return (
        <div className="container mx-auto p-4">
            {Object.keys(singleProductDetail).length > 0 ? (
                <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="md:w-1/2 p-4">
                        <img src={singleProductDetail.attributes.image} alt={singleProductDetail.attributes.title} className="w-full h-96 object-cover" />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h3 className="text-2xl font-semibold mb-2">{singleProductDetail.attributes.title}</h3>
                        <h4 className="text-xl text-gray-700 mb-2">{singleProductDetail.attributes.company}</h4>
                        <p className="text-gray-600 mb-4"><strong>Category: </strong>{singleProductDetail.attributes.category}</p>
                        <p className="text-gray-600 mb-4"><strong>Price: </strong>${(singleProductDetail.attributes.price / 100).toFixed(2)}</p>
                        <p className="text-gray-600 mb-4">{singleProductDetail.attributes.description}</p>
                        <p className="flex items-center gap-2 mb-4">
                            <strong>Colors: </strong>
                            {singleProductDetail.attributes.colors.map((color, idx) => (
                                <span key={idx} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }}></span>
                            ))}
                        </p>

                        <button
                            className='w-1/3 p-2 rounded-lg text-white bg-blue-600 '
                            onClick={(e) => handleAddtoCart( e , singleProductDetail)}
                        >Add to cart</button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Product not found.</p>
            )}
        </div>
    );
}

export default SingleProduct;
