import React from 'react'
import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className='hidden sm:flex items-center gap-2 ring-1 ring-gray-200 rounded-md px-2 py-1 shadow-mdgit commit -m "first commit"'>
      <Search className='w-4 h-4 text-gray-500'/>
      <input 
        id='search'
        placeholder='Search...'
        className='outline-0 text-sm'
      />
    </div>
  )
}

export default SearchBar
