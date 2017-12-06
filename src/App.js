import React, { Component } from 'react';
import './App.css';
import Data from './data'
import Card from './components/Card'

class App extends Component {
  state = {
    results: Data.results,
    saved: Data.saved
  }

  hoverHandler = () => {
    console.log('hello')
  }


  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6 results'>
            <p>Results</p>
            {this.state.results.map((property, index) =>
              <Card
                key={property['id']}
                logo={property['agency']['logo']}
                image={property['mainImage']}
                price={property['price']}
                background={property['agency']['brandingColors']['primary']}
                onMouseEnter={this.hoverHandler}
              />
            )}

          </div>
          <div className='col-6 saved'>
            <p>Saved Properties</p>
            {this.state.saved.map((property, index) =>
              <Card
                key={property['id']}
                logo={property['agency']['logo']}
                image={property['mainImage']}
                price={property['price']}
                background={property['agency']['brandingColors']['primary']}

              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
