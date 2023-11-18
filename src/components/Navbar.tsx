import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '/logo.svg'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <img src={logo} alt="Logo" className="logo" />
            <ul className='hidden md:flex '>
                <li className='p-6'>Portfolio</li>
                <li className='p-6'>About Us</li>
                <li className='p-6'>Services</li>
                <li className='p-6'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0d47a1] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <img src={logo} alt="Logo" className="logo" />
                <li className='p-4 border-b border-gray-600'>Portfolio</li>
                <li className='p-4 border-b border-gray-600'>About Us</li>
                <li className='p-4 border-b border-gray-600'>Services</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar