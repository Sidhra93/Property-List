import React, { Component } from 'react';
import './App.css';
import Data from './data'
import Card from './components/Card'

class App extends Component {
  state = {
    results: Data.results,
    saved: Data.saved
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6 results'>
            <h3>Results</h3>
            {this.state.results.map((property, index) =>
              <Card
                logo={property['agency']['logo']}
                image={property['mainImage']}
                price={property['price']}
              />
            )}

          </div>
          <div className='col-6 saved'>
            <h3>Saved Properties</h3>
            {this.state.saved.map((property, index) =>
              <Card
                logo={property['agency']['logo']}
                image={property['mainImage']}
                price={property['price']}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
