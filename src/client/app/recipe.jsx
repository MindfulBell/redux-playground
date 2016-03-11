import React, { Component } from 'react';

class Recipe extends Component {
  //THIS IS WHERE EDITING GOES or does it?
	constructor(props) {
		super(props)

		this.state = {
      ingredients: this.props.ingredients,
      instructions: this.props.instructions,
      recipeName: this.props.recipeName
		}
	}
	
		handleEdit(){
			
		}

  render () {
  	const ingredientArr = this.state.ingredients.map((ingredient, ind)=>{
  		return <li key={ind}>{ingredient}</li>
  	})
    const recipeId = this.props.ident;
    const hashedId = '#' + recipeId;
    return (    	
    	<div className='panel panel-default'>
    		<div className='panel-heading' role='tab' id='headingOne'>
    			<h4 className='panel-title'>
    				<a role='button' data-toggle='collapse' data-parent='#accordion' href={hashedId} aria-expanded='false' 
            aria-controls={recipeId}>
    					{this.state.recipeName}
    				</a>
    			</h4>
    		</div>
    		<div id={recipeId} className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
		    	<div className='panel-body'>
		    		<h4>Ingredients</h4>
		    		<ul>
		    			{ingredientArr}
		    		</ul>
		    		<h4>Instructions</h4>
			    	<p>
			    		{this.state.instructions}
			    	</p>
			    	<button type='delete' id='delButton' className='btn btn-danger'
            onClick={event => this.props.handleRecipe(event.target.parentNode.parentNode.id, event.target.id)}>Delete</button>
			    	<button type='edit' className='btn' data-toggle='modal' data-target='#addPopUp'>Edit</button>
		    	</div>
    		</div>
    	</div>
    	)   	
  }
}

export default Recipe