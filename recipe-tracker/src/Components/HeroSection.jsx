import React from 'react'
import heroImg from '../assets/main_img.png'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <main id='heroSection' className='flex bg-gradient-to-b from-sky-100 to-transparent justify-between px-[9%] xl:items-center xl:pt-0 pt-[150px] gap-[10rem] xl:h-screen mobile:h-[120vh] h-screen relative'>
      <section className='xl:w-[50%] w-full z-20'>
        <h1 className='text-5xl font-bold'>Explore best food for your taste</h1>
        <p className='py-8 mobile:text-start text-justify'>
            Explore our diverse selection of dishes, savoring each bite, and indulge in culinary delights.
        </p>
        {/* <div className='mobile:w-[80%] flex items-center justify-between rounded-md bg-white shadow'>
            <input 
                type="text" 
                placeholder='Search recipe..'
                className='outline-none pl-2.5 w-full'
            />
            <button className='bg-yellow-500 py-2 px-6 rounded-r'>
                Search
            </button>
        </div> */}
        <Link
          to="recipeSection"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
        >
          <button className='bg-green-600 text-white py-1.5 rounded w-[40%] flex items-center gap-2 justify-center'>
              <span className='mt-1'><ion-icon name="fast-food-outline"></ion-icon></span>
              Explore
          </button>
        </Link>
      </section>
      <section className='animated-image xl:w-[550px] sm:w-[420px] w-[80%] xl:top-[20%] md:top-[30%] top-[420px] absolute md:right-[9%] right-[2%] z-10'>
        <img src={heroImg}/>
      </section>
    </main>
  )
}

export default HeroSection
