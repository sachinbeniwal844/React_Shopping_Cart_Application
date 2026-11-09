import React from 'react'
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
    <header className='fixed left-0 top-0 right-0 z-50 px-4 py-4 md:px-8 pt-8 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900 h-25'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to={"/"}>
            <div className='flex justify-center items-center gap-6'>
                <House className='w-8 h-8 text-orange-400'/>
                <h1 className='text-4xl tracking-widest font-bold'>WDM <span className='text-orange-400'>STORE</span></h1>
            </div>
          </Link>
           <Link to={"/cart"} c className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer">
            <div className=''>
                <ShoppingCart className='w-6 h-6 text-orange-400'/>
                {cartCount > 0 && <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-[24px] h-[20px]">{cartCount}</span>}
            </div>
           </Link>
        </div>
    </header>
    </>
  )
}

export default Navbar