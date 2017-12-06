import React, { Component } from 'react';
import './App.css';
import Data from './data'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3>Results</h3>
            <Card />
            <Card />
            <Card />            
          </div>
          <div className='col'>
            <h3>Saved Properties</h3>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
