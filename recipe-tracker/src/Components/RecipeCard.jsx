import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

function RecipeCard({recipe}) {
  const [like, setLike] = useState(false);

  const handleLikes = () => {
    setLike(!like);
    if (!like) toast.success('Liked successfuly')
    else toast.error('Liked removed')
  }

  return (
    <main className='rounded border p-2'>
      <header className='relative'>
        <img src={recipe.strMealThumb} className='rounded aspect-square'/>
        <span className='absolute text-[1.6rem] top-2 right-2 cursor-pointer' onClick={handleLikes}>
          {
            like ? (<FcLike/>) : (<FcLikePlaceholder/>)
          }
        </span>
      </header>
      <h2 className='text-lg font-semibold pt-1 pb-4'>{recipe.strMeal.split(" ").slice(0, 5).join(" ") + "..."}</h2>
      <a href={recipe.strYoutube}>
        <button className='w-full transition-all duration-300 rounded py-1.5 mb-1.5 bg-yellow-400 text-gray-800 border border-yellow-400 hover:bg-white'>
          Get Recipe
        </button>
      </a>
    </main>
  )
}

export default RecipeCard
