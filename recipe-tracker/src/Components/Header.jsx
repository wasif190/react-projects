import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

function Header() {
  return (
    <main className='px-[9%] z-50 pb-4 pt-2 flex items-end justify-between border-b shadow-sm fixed top-0 left-0 right-0 bg-white'>
      <section className='w-[100px]'>
        <img src={Logo}/>
      </section>
      <ul className='lg:flex gap-[4rem] hidden'>
        <li>
          <Link
            activeClass="active"
            to="recipeSection"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Explore
          </Link>
        </li>
        <li>
          Contact
        </li>
        <li>
          <a href="https://github.com/wasif190">Github</a>
        </li>
      </ul>
      <a href='https://my-portfolio-wasif.vercel.app/'>
        <button className='bg-gray-600 border-gray-600 border-[1.6px] transition-all duration-300 hover:text-black hover:bg-white text-white py-1 px-6 rounded'>
            Portfolio
        </button>
      </a>
    </main>
  )
}

export default Header
