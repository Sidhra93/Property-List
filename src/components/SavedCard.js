import React from 'react'
// import data from '../data'

export default class SavedCard extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        propertyId: props.propertyId,
        logo: props.logo,
        image: props.image,
        price: props.price,
        background: props.background

      }
  }

  removeClickHandler = () => {
    this.props.removeClick(this.state.propertyId)
  }

  render(){
    var {logo, image, price, background} = this.state
    return(
      <div className='card my-card'>
        <div style={{background: background}}>
          <img src={logo} alt='' />
        </div>
        <img className='card-img' src={image} alt='' />
        <div className='card-body'>
          {price}
        </div>
        <div className='card-button'>
          <button className='btn btn-info prop-button'
             onClick={this.removeClickHandler}>
            Remove Property
          </button>
        </div>
      </div>
    )
  }
}
