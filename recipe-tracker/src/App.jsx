import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import RecipeSection from './Components/RecipeSection'
import HeroSection from './Components/HeroSection';

function App() {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  const fetchRecipeData = async() => {
    setLoading(true);
  
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`

    try {
      const res = await fetch(url);
      const data = await res.json();

      setRecipe(data.meals)
    } catch (error) {
      console.log('Error while fetching recipe', error);
      setRecipe([]);
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchRecipeData();
  }, [searchRecipe]);

  return (
    <div>
      <Header/>
      <HeroSection/>
      <RecipeSection recipe={recipe} setSearchRecipe={setSearchRecipe} loading={loading}/>
    </div>
  )
}

export default App
