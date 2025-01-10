import React from 'react'
import MainNav from '@/components/MainNav';
import MobileNav from '@/components/MobileNav';

const SiteHeader = () => {
  return (
    <header className='w-full border-b'>
      <div className='flex h-14 items-center px-4'>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  )
}

export default SiteHeader;