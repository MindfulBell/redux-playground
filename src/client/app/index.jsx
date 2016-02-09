import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello TITTIES!</p>;
  }
}

render(<App/>, document.getElementById('app'));

//commands to know:
//npm run dev --> turns on webpack watch for updating changes
//npm run build --> runs webpack in dev mode