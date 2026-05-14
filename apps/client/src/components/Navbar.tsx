import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import { Show, SignInButton, SignUpButton } from '@clerk/nextjs'
import { ProfileButton } from './ProfileButton'

function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b border-gray-200 pb-4'>
      {/* LEFt  */}
      <Link href="/" className='flex items-center'>
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className='w-6 h-6 md:w-9 md:h-9'
        />
        <p className='hidden md:block text-base font-medium tracking-wider'>TRENDLAMA.</p>
      </Link>

      {/* RIGHT  */}
      <div className='flex items-center gap-6'>
        <SearchBar />
        <Link href="/">
          <Home className='w-4 h-4 text-gray-500' />
        </Link>
        <Bell className='w-4 h-4 text-gray-500' />
        <ShoppingCartIcon />
        {/* clerk authentication  */}
        <Show when="signed-out">
          <SignInButton />
        </Show>
        <Show when="signed-in">
          <ProfileButton />
        </Show>
      </div>
    </nav>
  )
}

export default Navbar
