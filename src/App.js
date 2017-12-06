import React, { Component } from 'react';
import './App.css';
import Data from './data'
import ResultCard from './components/ResultCard'
import SavedCard from './components/SavedCard'

class App extends Component {
  state = {
    results: Data.results,
    saved: Data.saved
  }

  addClickHandler = (index) => {
    var newSaved = this.state.saved.slice()
    newSaved.push(this.state.results[index])
    this.setState({saved: newSaved})
  }

  removeClickHandler = (propertyId) => {
    var newSaved = this.state.saved.slice()
    var index = -1
    for (var i = 0; i < newSaved.length; i++) {
      if (newSaved[i]['id'] === propertyId){
        index = i
        break;
      }
    }
    newSaved.splice(index, 1)
    this.setState({saved: newSaved})
  }


  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6 results'>
            <p>Results</p>
            {this.state.results.map((property, index) =>
              <ResultCard
                key={property['id']}
                index={index}
                logo={property['agency']['logo']}
                image={property['mainImage']}
                price={property['price']}
                background={property['agency']['brandingColors']['primary']}
                addClick={this.addClickHandler}
              />
            )}

          </div>
          <div className='col-6 saved'>
            <p>Saved Properties</p>
            {this.state.saved.map((property, index) =>
              <SavedCard
                key={property['id']}
                propertyId={property['id']}
                logo={property['agency']['logo']}
                image={property['mainImage']}
                price={property['price']}
                background={property['agency']['brandingColors']['primary']}
                removeClick = {this.removeClickHandler}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
