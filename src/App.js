import React, {Component} from 'react';
import './App.css';
import { DrinksPage } from './components/DrinksPage/DrinksPage';

class App extends Component {

  render(){
    return (
      <div className="App">
        <DrinksPage/>
      </div>
    );
  }
}

export default App;

