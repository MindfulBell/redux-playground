import React, { Component } from 'react';

class Recipe extends Component {
  //THIS IS WHERE EDITING GOES or does it?
	constructor(props) {
		super(props)

		this.state = {
      ingredients: '',
      instructions: '',
      recipeName: ''     
		}
	}

  render () {
  	const ingredientArr = this.props.ingredients.map((ingredient, ind)=>{
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
    					{this.props.recipeName}
    				</a>
    			</h4>
    		</div>
    		<div id={recipeId} className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
		    	<div className='panel-body'>
		    		<h4>Ingredients</h4>
		    		<ol>
		    			{ingredientArr}
		    		</ol>
		    		<h4>Instructions</h4>
			    	<p>
			    		{this.props.instructions}
			    	</p>
			    	<button type='delete' id='delButton' className='hvr-float-shadow btn btn-danger'
            onClick={event => this.props.handleRecipe(event.target.parentNode.parentNode.id, event.target.id)}>Delete</button>
			    	<button onClick={event => this.props.handleRecipe(event.target.parentNode.parentNode.id, event.target.id)} type='edit' 
			    	id='editButton' className='hvr-float-shadow btn' data-toggle='modal' data-target='#addPopUp'>Edit</button>
		    	</div>
    		</div>
    	</div>
    	)   	
  }
}

export default Recipe