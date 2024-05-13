import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <main className='px-[9%] border-t flex flex-wrap gap-[2rem] justify-between h-[200px] pt-10'>
      <section>
        <header>
          <Link
            to="heroSection"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
          >
            <img src={Logo} className='w-[80px] cursor-pointer'/>
          </Link>
        </header>
        <p className="text-gray-500 mt-3">
            ©2024<a href="#" className="hover:underline">wasif</a> <br />All Rights Reserved.
        </p>
      </section>
      <section>
        <h1 className='font-semibold text-lg'>Quick Links</h1>
        <ul className='mt-3'>
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
        </ul>
      </section>
      <section className='pb-16'>
        <h1 className='font-semibold text-lg'>Social</h1>
        <div className='flex mt-3 gap-4 text-lg'>
            <a href="https://www.instagram.com/wasif1.ai/?igsh=MjZneWc1cmprZHRp">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/wasif-ansari-75b9b0295/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/wasif190">
              <ion-icon name="logo-github"></ion-icon>
            </a>
        </div>
      </section>
    </main>
  )
}

export default Footer
