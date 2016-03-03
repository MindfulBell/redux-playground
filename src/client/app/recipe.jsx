import React, { Component } from 'react';

class Recipe extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

  render () {
  	const ingredients = this.props.ingredients.map((ingredient, ind)=>{
  		return <li key={ind}>{ingredient}</li>
  	})
    return (    	
    	<div className='panel panel-default'>
    		<div className='panel-heading' role='tab' id='headingOne'>
    			<h4 className='panel-title'>
    				<a role='button' data-toggle='collapse' data-parent='#accordion' href='#recipeOne' aria-expanded='false' aria-controls='recipeOne'>
    					{this.props.recipeName}
    				</a>
    			</h4>
    		</div>
    		<div id='recipeOne' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
		    	<div className='panel-body'>
		    		<h4>Ingredients</h4>
		    		<ul>
		    			{ingredients}
		    		</ul>
		    		<h4>Instructions</h4>
			    	<p>
			    		{this.props.instructions}
			    	</p>
			    	<button type='delete' className='btn btn-danger'>Delete</button>
			    	<button type='edit' className='btn'>Edit</button>
		    	</div>
    		</div>
    	</div>
    	)   	
  }
}

export default Recipe