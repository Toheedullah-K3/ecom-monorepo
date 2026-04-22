"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function Filter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function handleFilter(value: string){
    const params = new URLSearchParams(searchParams)
    params.set("sort", value)
    router.push(`${pathname}/?${params.toString()}`, {scroll:false})
  }
  return (
    <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6'>
      <span>Sort By: </span>
      <select 
        name="sort" id="sort" 
        className='ring-1 ring-gray-200 shadow-md rounded-sm'
        onChange={e=> handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="des">Price: High to Low</option>
      </select>
    </div>
  )
}

export default Filter
