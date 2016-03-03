import React, { Component } from 'react';


class AddBox extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

  render () {
    return  (
      <div className='container' id='addPopUp'>
        <h4>Add Your Recipe!</h4><span className="glyphicon glyphicon-remove"></span>
        <form>
          <div className='form-group' id='recipeAdd'> 
            <label htmlFor='recipeName'>Recipe Name</label>
            <input type="recipe" className='form-control' id="recipeInput" placeholder="Name your recipe!"/>
          </div>
          <div className='form-group' id='ingredientAdd'>
            <label htmlFor='ingredientList'>Ingredients</label>
            <textarea type='ingredients' className='form-control' id='ingredientInput' rows='3' max-width='250px' 
            placeholder='List your ingredients separated by commas!'></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>Add Recipe</button>
          <button type='close' className='btn btn-danger'>Close</button>
        </form>
      </div>
    	)  	
  }
}

export default AddBox