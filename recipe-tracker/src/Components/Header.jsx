import React from 'react'
import Logo from '../assets/logo.png'

function Header() {
  return (
    <main className='px-[9%] z-50 pb-4 pt-2 flex items-end justify-center border-b shadow-sm fixed top-0 left-0 right-0 bg-white'>
      <section className='w-[100px]'>
        <img src={Logo}/>
      </section>
    </main>
  )
}

export default Header
