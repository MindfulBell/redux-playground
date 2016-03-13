import React, { Component } from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap';
import RecipeList from './recipe-list.jsx';
import AddBox from './addbox.jsx';
require("!style!css!sass!../public/css/style.scss");

//What this app showcases: play with local storage, lifecycle

//NEXT: EDITING a recipe
//1. Maybe move the Addbox to render with Recipe? So confused...

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
            recipes: [],
            recipeToEdit: {}
		};
	}

    componentWillMount() {
        if (localStorage.length === 0) {            
            localStorage.setItem('recipes', JSON.stringify([{
                recipeName: 'Pickled Onions', 
                ingredients: ['Red onions', 'Red wine vinegar', 'Salt', 'Pepper'], 
                instructions: 'Combine half cup of red wine vinegar with half cup of water \
            add salt and pepper to taste, add a thinly sliced red onion. Let sit for at least 30 minutes'}]));            
        }
        this.setState({
            recipes: JSON.parse(localStorage.getItem('recipes'))
        })              
    }

    handleRecipe(ind, btnType, name, ingredients, instructions) {
        const recipeArr = JSON.parse(localStorage.getItem('recipes'));
        if (btnType === 'addButton') {      
            recipeArr.push({
                recipeName: name,
                ingredients: ingredients,
                instructions: instructions
            });                    
        }
        else if (btnType === 'delButton') {
            recipeArr.splice(ind, 1)
        }
        else if (btnType === 'editButton') {  
        console.log('edit fired')          
            this.setState({
                recipeToEdit: recipeArr[ind]
            })
        }
        localStorage.setItem('recipes', JSON.stringify(recipeArr)); 
        this.setState({
            recipes: JSON.parse(localStorage.getItem('recipes'))
        })        
    }
    
    render () {
        console.log(this.state.recipeToEdit) // logs updated recipeToEdit i.e. recipeArr[ind]
        return (
        <div>
            <div className='recipe-box container container-fluid'>
              <h2>Recipe Box</h2>
                <RecipeList recipe={this.state.recipes} handleRecipe={this.handleRecipe.bind(this)} />        
            </div>
            <button type='button' className='btn btn-default btn-primary' data-toggle='modal' data-target='#addPopUp'>Add Recipe</button> 
            <AddBox handleRecipe={this.handleRecipe.bind(this)} editRecipe={this.state.recipeToEdit} />           
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
