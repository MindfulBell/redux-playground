import React, {Component} from 'react';
import 'bootstrap';

class AddBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeVal: '',
      ingredientsVal: '',
      instructionsVal: '',
      funcType: ''
    };
  }
  
  //pull from jnmorse on Github, helped me here
  //if we have received a recipe to edit, then populate the addbox with that recipe!
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.recipeToEdit).length > 0){ //my addition
        this.setState({
          recipeVal: nextProps.recipeToEdit.recipe.recipeName,
          ingredientsVal: nextProps.recipeToEdit.recipe.ingredients,
          instructionsVal: nextProps.recipeToEdit.recipe.instructions,
          funcType: 'Edit'
        });
    }
    else {
      this.setState({
        funcType: 'Add'
      });
    }
  }

  //updating state based on what user types
  handleChange(val) {
    if (val.id === 'recipeInput') {
      this.setState({recipeVal: val.value});
    }

    else if (val.id === 'ingredientInput') {
      this.setState({ingredientsVal: val.value});
    }

    else {
      this.setState({instructionsVal: val.value});
    }
  }

  //when save is clicked
  handleSubmit(event) {
    event.preventDefault();
    //non empty recipe
    if (this.state.ingredientsVal !== '' && this.state.instructionsVal !== '' && this.state.recipeVal !== '') {
      const recipeInd = this.props.recipeToEdit.id; //spot in storage, null if a new recipe
      const buttonType = event.target.id;
      const recipeName = this.state.recipeVal;
      const ingredients = this.state.ingredientsVal;
      const instructions = this.state.instructionsVal;
      
      //send to recipehandler
      this.props.handleRecipe(recipeInd, buttonType, recipeName, ingredients, instructions);
    }
    //clear the add recipe form and the recipeToEdit
    this.setState({recipeVal: '', ingredientsVal: '', instructionsVal: ''});
    this.props.clearEdit();
  }

  handleClose() {
    this.setState({recipeVal: '', ingredientsVal: '', instructionsVal: ''});
  }

  render() {
    return (
      <div className='modal fade' tabIndex='-1' role='dialog' id='addPopUp' aria-labelledby="recipetitle" aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button onClick={event => this.handleClose()} type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className='modal-title' id='recipetitle'>
                {this.state.funcType} Your Recipe!
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
                  <textarea type='ingredients' className='form-control' id='ingredientInput' 
                  rows='3' max-width='250px' placeholder='List your ingredients separated by commas!' 
                  value={this.state.ingredientsVal} onChange={event => this.handleChange(event.target)}></textarea>
                  
                </div>
                <div className='form-group' id='instructionAdd'>
                
                  <label htmlFor='instructionList'>Instructions</label>
                  <textarea type='instructions' className='form-control' id='instructionInput' 
                  rows='3' max-width='250px' placeholder='Write out your instructions!' 
                  value={this.state.instructionsVal} onChange={event => this.handleChange(event.target)}></textarea>
                  
                </div>
                
                <button type='submit' id='saveButton' data-dismiss='modal' 
                className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Save</button>
                
              </form>
            </div>
            <div className='modal-footer'>
              <button onClick={event => this.handleClose()} type='button' 
              className='btn btn-danger' data-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddBox
