import React from 'react'
import { initialProducts } from '../Data/Data.js'
import { Tag } from 'lucide-react'


const CategoryFilter = ({selectedCategory, setSelectedCategory}) => {
    const AvailableCategory = [
        "All",
        ...new Set(initialProducts.map((p)=>p.category))
    ]
    //  const selectedCategory = "Phone"
  return (
    <div className='flex flex-wrap items-center gap-3 border-b border-gray-800 pb-6'>
        <Tag className='w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block'/>
        {AvailableCategory.map((category)=>(
            <button key={category}
            onClick={()=>setSelectedCategory(category)}
            className={`px-5 py-2 text-center font-bold rounded-full text-sm transition duration-200 shadow-md ${selectedCategory == category ? "bg-orange-600 shadow-orange-800/50" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700"}`}
            > 
              {category}
            </button>
        ))}
    </div>
  )
}

export default CategoryFilter

