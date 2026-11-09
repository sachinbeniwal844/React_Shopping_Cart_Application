import React from 'react'
import { Search } from "lucide-react";

const SearchFilter = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='p-5 mb-5 my-25 bg-gray-900 rounded-2xl shadow-xl'>
        <div className='flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800'>
            <Search className='w-6 h-6 ml-4 text-gray-500'/>
            <input type="text" placeholder='Search high-performance product by name or feature....'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className='w-full p-4 outline-none'
            />
        </div>
    </div>
  )
}

export default SearchFilter