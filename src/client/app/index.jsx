import React, {Component} from 'react';
import {render} from 'react-dom';
import RecipeList from './recipe-list.jsx';
import AddBox from './addbox.jsx';
require("../public/css/style.scss");

/*

Application built for the FreeCodeCamp curriculum. 
Exercise in: state, bootstrap modals, bootstrap accordions, local storage, SASS

Allow user to add, edit, and delete recipes to a personal recipe box

Biggest challenge: Figuring out the Edit button functionality and how that was 
influenced by state

*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipeToEdit: {}
    };
  }

  componentWillMount() {
    //give user a starter recipe if none in storage, save it in storage, put it in state
    if (localStorage.length === 0) {
      localStorage.setItem('recipes', JSON.stringify([
        {
          recipeName: 'Pickled Onions',
          ingredients: [
            'Red onions', 'Red wine vinegar', 'Salt', 'Pepper'
          ],
          instructions: 'Combine half cup of red wine vinegar with half cup of '
            + 'water add salt and pepper to taste, add a thinly sliced red '
            + 'onion. Let sit for at least 30 minutes'
        }
      ]));
    }
    this.setState({
      recipes: JSON.parse(localStorage.getItem('recipes'))
    });
  }
  
  //function for handling the deletion and submission of recipes (both new and edited)
  handleRecipe(ind, btnType, name, ingredients, instructions) {
    const recipeArr = JSON.parse(localStorage.getItem('recipes'));
    if (btnType === 'saveButton') {
      //this keeps logging an error...if ingredients is not edited by user, it remains an array, so can't split it...
      const ingredientsArr = (typeof ingredients === 'string') ? ingredients.split(',') : ingredients;
      if (ind) {
        recipeArr[ind] = {recipeName: name, ingredients: ingredientsArr, instructions };
      }

      else {
        recipeArr.push({recipeName: name, ingredients: ingredientsArr, instructions: instructions});
      }
    }
    else if (btnType === 'delButton') {
      recipeArr.splice(ind, 1);
    }
    
    //if edit is clicked, just prepare a recipe to edit in top level state to pass down
    //no actual storage usage here
    else {
      this.setState({
        recipeToEdit: {
          id: ind,
          recipe: recipeArr[ind]
        }
      });
    }
    //update storage and state no matter what
    localStorage.setItem('recipes', JSON.stringify(recipeArr));
    this.setState({
      recipes: JSON.parse(localStorage.getItem('recipes'))
    });
  }
  
  //empty the edit object above after the editing is done (i.e. Save is clicked)
  clearEdit(){
    this.setState({
      recipeToEdit: {}
    });
  }

  render() {
    return (
      <div>
        <div className='recipe-box container container-fluid'>
          <h1>Personal Recipe Box</h1>
          <RecipeList recipe={this.state.recipes} handleRecipe={this.handleRecipe.bind(this)}/>
        </div>
        <div className='text-center'>
          <button onClick={event => this.clearEdit()} id='addRecipe' type='button' className='hvr-sweep-to-right btn btn-default btn-primary' data-toggle='modal' data-target='#addPopUp'>Add Recipe</button>
        </div>
        <AddBox clearEdit ={this.clearEdit.bind(this)} handleRecipe={this.handleRecipe.bind(this)} recipeToEdit={this.state.recipeToEdit}/>
      </div>
    );
  }
}

render(
  <App/>, document.getElementById('app'));
