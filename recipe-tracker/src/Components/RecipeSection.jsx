import React, { useContext, useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import Spinner from './Spinner';

function RecipeSection({recipe, setSearchRecipe, loading}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearch = () => {
        setSearchRecipe(inputValue); 
    }

    return (
        <main id='recipeSection' className='px-[9%] pt-[160px] sm:pb-[120px] pb-[60px]'>
            <header className='text-center text-4xl font-bold'>
                <h1>Explore Recipe</h1>
            </header>
            <form onSubmit={(e) => {
                e.preventDefault();
                setInputValue("")
            }} className='flex items-center justify-between rounded-md border mt-16 sm:w-[70%] mx-auto w-full'>
                <input 
                    type="text" 
                    placeholder='Search recipe..'
                    className='outline-none pl-2.5 w-full'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className='bg-yellow-400 py-2 px-6 rounded-r' onClick={handleSearch}>
                    Search
                </button>
            </form>
            {loading ? (
                <Spinner /> // Display spinner while loading
            ) : (
                recipe ? 
                    <section className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-[2rem] mt-10 w-full h-full'>
                        {recipe.map((r) => (
                            <RecipeCard recipe={r} key={r.idMeal}/>
                        ))}
                    </section>
                : 
                <div 
                    className='bg-gray-300 rounded py-2 px-8 sm:w-[30%] w-[85%] mx-auto text-center mt-[80px] cursor-pointer'
                    onClick={() => setSearchRecipe(inputValue)}
                >
                    No Recipe Found
                </div>
            )}
        </main>
    )
}

export default RecipeSection
