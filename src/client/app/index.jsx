import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello!</p>;
  }
}

render(<App/>, document.getElementById('app'));

//commands to know:
//npm run dev --> turns on webpack watch for updating changes
//npm run build --> runs webpack in dev mode

//DON'T FORGET TO CREATE A NEW GIT HUB REPO TO PUSH TO OR IT WILL OVERRIDE THE TEMPLATE!!