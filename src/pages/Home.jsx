import React from 'react'
import Productlist from '../components/data/Product'
import { ToastContainer, toast } from 'react-toastify';


const Home = ({ setProductId }) => {



    // add to cart product function
    const hadndleAddToCart = (id) => {
        toast.success("Product Added to Cart Sucessfully...")
        setProductId(id);

    }


    return (
        <>
            <div className='max-w-7xl mx-auto  px-5 xl:px-0'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10 pt-28 gap-10'>
                    {Productlist.map((Product, index) => {
                        return (

                            <div className='bg-gray-600 rounded-2xl p-5' key={Product.id}>
                                <div>
                                    <img className='w-full h-64 object-cover rounded' src={Product.img} alt="productimg" />
                                </div>
                                <div className='text-white'>
                                    <h2 className='my-3'>Brand : {Product.brand}</h2>
                                    <h3 className=''>Model : {Product.model}</h3>
                                </div>
                                <p className='text-white my-3'>Price : ₹{Product.price}</p>
                                <button onClick={() => hadndleAddToCart(Product.id)} type='button' className='cursor-pointer ml-auto block bg-green-500 py-2 px-5 rounded text-white text-lg font-medium'>Add To Cart</button>
                                <ToastContainer position="top-left"
                                    autoClose={3000}
                                />
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
