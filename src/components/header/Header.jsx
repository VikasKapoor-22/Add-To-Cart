import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ cartAllproduct }) => {
    return (
        <>
            <header>
                <div className='bg-gray-500 py-3 px-5 xl:px-0 fixed w-full '>
                    <div className='max-w-7xl mx-auto'>
                        <nav className='flex justify-between items-center'>
                            <NavLink to="/" className='font-bold text-2xl md:text-4xl text-green-500 italic'>PRODUTS</NavLink>
                            <ul className='flex items-center gap-5 md:gap-10 text-white font-medium '>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/cart" className='relative '><i class="fa-solid fa-cart-shopping text-4xl"></i>
                                    <span className='bg-green-500 absolute -right-2 -top-5 h-7 w-7 rounded-full flex items-center justify-center'>{cartAllproduct.length}</span></NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
