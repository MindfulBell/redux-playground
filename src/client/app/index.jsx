import React, { Component } from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap';
import RecipeList from './recipe-list.jsx';
import AddBox from './addbox.jsx';
require("!style!css!sass!../public/css/style.scss");

//What this app showcases: play with local storage, lifecycle

//NEXT: adding recipes and how taht changes local storage and state

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
            recipes: []
		}
	}

    //format for recipe in local storage:
    //title: {
    //ingredients: []
    //image?: ''
    //instructions: ''}

    componentWillMount() {
        localStorage.clear();
        if (localStorage.length === 0) {
            localStorage.setItem('recipe1', JSON.stringify({
                recipeName: 'Pickled Onions',
                ingredients: ['Red onions', 'Red wine vinegar', 'Salt', 'Pepper'],
                instructions: 'Combine half cup of red wine vinegar with half cup of water \
                add salt and pepper to taste, add a thinly sliced red onion. Let sit for at least 30 minutes'
            }))
        }
        const retrieved = JSON.parse(localStorage.getItem('recipe1'));
        const myArr = this.state.recipes
        myArr.push(retrieved);
        this.setState({
            recipes: myArr
        })


    }


    componentDidMount() {

    }

    render () {
        console.log(this.state.recipes)
    return (
    <div>
        <div className='recipe-box container container-fluid'>
          <h2>Recipe Box</h2>
            <RecipeList recipe={this.state.recipes} />        
        </div>
    <AddBox />
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
