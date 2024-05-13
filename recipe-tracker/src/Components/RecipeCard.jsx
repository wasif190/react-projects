import React from 'react'

function RecipeCard({recipe}) {
  return (
    <main className='rounded border p-2'>
      <header>
        <img src={recipe.strMealThumb} className='rounded aspect-square'/>
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
