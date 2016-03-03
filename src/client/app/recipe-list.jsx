import React, { Component } from 'react';
import Recipe from './recipe.jsx';

const RecipeList = (props) => {
	console.log(props.recipe)

	//build the recipe array here
	const recipeList = props.recipe.map((recipe, ind) => {
  		return <Recipe key={ind} ingredients={recipe.ingredients} recipeName={recipe.recipeName}
  		instructions={recipe.instructions} />
	});
  	
    return  (
    	<div className='panel-group row' id='accordion' role='tab-list' aria-multiselectable='true'>    		
    		{recipeList} 	
    	</div>
    	)  	
  
}

export default RecipeList