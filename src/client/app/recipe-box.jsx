import React, { Component } from 'react';
import RecipeList from './recipe-list.jsx';

class RecipeBox extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

  render () {
    return(
    	<div className='recipe-box container container-fluid'>asdf
    		<RecipeList />
    	</div>
    	)
  }
}

export default RecipeBox