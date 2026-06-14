import React from 'react'

const Cart = ({ cartAllproduct, setCartAllproduct }) => {
    console.log(cartAllproduct)

    // inc and dec. products of the cart
    const handleInc = (id) => {
        setCartAllproduct((Previtem) =>
            Previtem.map((item) => item.id === id ? { ...item, count: (item.count || 1) + 1 } : item)
        );

    }
    const handleDec = (id) => {
        setCartAllproduct((Previtem) =>
            Previtem.map((item) => item.id === id ? { ...item, count: (item.count || 1) - 1 } : item)
        );
    }


    // Remove the products from the cart
    const handleDelete = (id) => {
        setCartAllproduct(cartAllproduct.filter((item) => item.id !== id));
    }


    return (
        <>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 pb-10 pt-28'>
                <div className='flex flex-col gap-5'>
                    {cartAllproduct.map((Product) => {
                        return (
                            <div className=''>
                                <div className='flex gap-5 md:gap-10 flex-col md:flex-row border border-green-500  rounded-xl p-5'>
                                    <div className=''>
                                        <img className='w-full md:max-w-40 md:min-w-40 h-40 object-cover rounded' src={Product.img} alt="productimg" />
                                    </div>
                                    <div className=''>
                                        <div className='text-lg '>
                                            <h2><strong>Brand</strong> : {Product.brand}</h2>
                                            <h2 className='my-2'><strong>Model</strong> : {Product.model}</h2>
                                            <h2><strong>Price</strong> : ₹{Product.price}</h2>
                                        </div>
                                        <div className='flex items-center mt-2 gap-10'>
                                            <button onClick={() => handleInc(Product.id)} type='button' className='border border-green-500 cursor-pointer h-7 w-7 rounded font-bold'>+</button>
                                            <p className='font-semibold text-lg'>{Product.count || 1}</p>
                                            <button onClick={() => handleDec(Product.id)} type='button' className='border border-green-500 cursor-pointer h-7 w-7 rounded font-bold'>-</button>
                                        </div>
                                    </div>
                                    <div className=' block ml-auto'>
                                        <i onClick={() => handleDelete(Product.id)} className="fa-solid fa-trash-can text-2xl text-red-500 cursor-pointer"></i>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cart
