import React, { Component } from 'react';


class AddBox extends Component {
	constructor(props) {
		super(props)

		this.state = {
		  recipeVal: 'Name your recipe!',
		  ingredientsVal: 'List your ingredients separated by commas!',
		  instructionsVal: 'Write out your instructions!'
		};
	}
	
	handleChange(val){
	  if (val.id === 'recipeInput') {
	    this.setState({
	      recipeVal: val.value
	    });
	  }
	  else if (val.id === 'ingredientInput') {
	    this.setState({
	      ingredientsVal: val.value
	    });
	  }
	  else {
	    this.setState({
	      instructionsVal: val.value
	    });
	  }
	}
	
	handleSubmit(event) {
	  event.preventDefault();
	  //send the recipe to local storage (GOTTA MAKE SURE SUBMIT ONLY WORKS WHEN RECIPE IS INPUTTED)
	  this.props.recipeToStorage(this.state.recipeVal, this.state.ingredientsVal, this.state.instructionsVal)
	  //update the recipe list from local storage
	  this.props.storageToState(this.state.recipeVal, this.state.ingredientsVal, this.state.instructionsVal)
	  //clear the add recipe form
	  this.setState({
	    recipeVal: 'Name your recipe!',
	    ingredientsVal: 'List your ingredients separated by commas!',
	    instructionsVal: 'Write out your instructions!'
	  })
	}
	
	//handle close

//e.preventDefault() for the submit button
  render () {
    return  (
      <div className='container' id='addPopUp'>
        <h4>Add Your Recipe!</h4><span className="glyphicon glyphicon-remove"></span>
        <form>
          <div className='form-group' id='recipeAdd'> 
            <label htmlFor='recipeName'>Recipe Name</label>
            <input type="recipe" className='form-control' id="recipeInput"
            value={this.state.recipeVal} onChange={event => this.handleChange(event.target)}/>
          </div>
          <div className='form-group' id='ingredientAdd'>
            <label htmlFor='ingredientList'>Ingredients</label>
            <textarea type='ingredients' className='form-control' id='ingredientInput' rows='3' max-width='250px' 
            value={this.state.ingredientsVal} onChange={event => this.handleChange(event.target)}></textarea>
          </div>
          <div className='form-group' id='instructionAdd'>
            <label htmlFor='instructionList'>Instructions</label>
            <textarea type='instructions' className='form-control' id='instructionInput' rows='3' max-width='250px' 
            value={this.state.instructionsVal} onChange={event => this.handleChange(event.target)}></textarea>
          </div>
          <button type='submit' className='btn btn-primary'
          onClick={this.handleSubmit.bind(this)}>Add Recipe</button>
          <button type='close' className='btn btn-danger'>Close</button>
        </form>
      </div>
    	)  	
  }
}

export default AddBox