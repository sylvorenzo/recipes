import './App.css';
import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'

const App=()=>{
  const APP_ID='3fd7cf90'
  const APP_KEY= '31866a41d4ea3c9c52197d7a66e82190'
  


  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('chicken');
  const exampleReq = `https://api.edamam.com/search?q= ${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() =>{
   getRecipes();
  },[query]);

  const getRecipes= async ()=>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }
  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <h1>Recipes From The Internet</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type='text' value ={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">Search</button>

      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients} 
        calories ={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredientLines={recipe.recipe.ingredientLines}
        
        />
      ))}
      </div>

    </div>
  );
}

export default App;
