import React, { Component } from 'react';
import Bootstrap from 'bootstrap';


//ADD vs EDIT text on the pop up box...
class AddBox extends Component {
	constructor(props) {		
		super(props)		
		this.state = {
			recipeVal: props.editRecipe.recipeName,
			ingredientsVal: props.editRecipe.ingredients,
			instructionsVal: props.editRecipe.instructions
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
	  if (this.state.ingredientsVal !== '' && this.state.instructionsVal !== '' && this.state.recipeVal !== '') {
		  const ingredientsArr = this.state.ingredientsVal.split(',');

		  //send to recipehandler
		  this.props.handleRecipe(null, event.target.id, this.state.recipeVal, ingredientsArr, this.state.instructionsVal)

		  //clear the add recipe form
		  this.setState({
		    recipeVal: '',
		    ingredientsVal: '',
		    instructionsVal: ''
		  })
		}
	}
	
	handleClose(event){
		this.setState({
			recipeVal: '',
			ingredientsVal: '',
			instructionsVal: ''
		})
	}

//e.preventDefault() for the submit button
  render () {
    return  (
      <div className='modal fade' tabIndex='-1' role='dialog' id='addPopUp' aria-labelledby="recipetitle" aria-hidden='true'>
      	<div className='modal-dialog'>      	
	      	<div className='modal-content'>
	      		<div className='modal-header'>
	      			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
	      			<span aria-hidden="true">&times;</span>
	      			</button>
	        		<h4 className='modal-title' id='recipetitle'>
	        		Add Your Recipe!
	        		</h4>
	      		</div>
	      		<div className='modal-body'>
			        <form role='form'>
			          <div className='form-group' id='recipeAdd'> 
			            <label htmlFor='recipeName'>Recipe Name</label>
			            <input type="recipe" className='form-control' id="recipeInput"
			            placeholder='Name your recipe!' value={this.state.recipeVal} 
			            onChange={event => this.handleChange(event.target)}/>
			          </div>
			          <div className='form-group' id='ingredientAdd'>
			            <label htmlFor='ingredientList'>Ingredients</label>
			            <textarea type='ingredients' className='form-control' id='ingredientInput' rows='3' max-width='250px' 
			            placeholder='List your ingredients separated by commas!' value={this.state.ingredientsVal}
			            onChange={event => this.handleChange(event.target)}></textarea>
			          </div>
			          <div className='form-group' id='instructionAdd'>
			            <label htmlFor='instructionList'>Instructions</label>
			            <textarea type='instructions' className='form-control' id='instructionInput' rows='3' max-width='250px' 
			            placeholder='Write out your instructions!' value={this.state.instructionsVal} 
			            onChange={event => this.handleChange(event.target)}></textarea>
			          </div>
			          <button type='submit' id='addButton' className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Save</button>			          
			        </form>
	      		</div>
	      		<div className='modal-footer'>
	      			<button type='button' className='btn btn-danger' data-dismiss='modal' >Close</button>
			    </div>
	      	</div>
	    </div>	    
      </div>
    	)  	
  }
}

export default AddBox