import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

function Header() {
  return (
    <main className='px-[9%] z-50 pb-4 pt-2 flex items-end justify-between border-b shadow-sm fixed top-0 left-0 right-0 bg-white'>
      <section className='w-[100px]'>
        <img src={Logo}/>
      </section>
      <ul className='md:flex hidden gap-[3rem] text-[1.1rem]'>
        <li>
          <Link
            to="heroSection"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="recipeSection"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            Recipe
          </Link>
        </li>
        <li>
          <a href="https://github.com/wasif190">
            Github
          </a>
        </li>
      </ul>
      <a href="https://my-portfolio-wasif.vercel.app/">
        <button className='bg-gray-600 border border-gray-600 hover:bg-white hover:text-black transition-all duration-300 rounded text-white py-1.5 px-3'>
          Portfolio
        </button>
      </a>
    </main>
  )
}

export default Header
