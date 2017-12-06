import React from 'react'

export default class ResultCard extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        index: props.index,
        logo: props.logo,
        image: props.image,
        price: props.price,
        background: props.background
      }
  }

  addClickHandler = () => {
    this.props.addClick(this.state.index)
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
             onClick={this.addClickHandler}>
            Add Property
          </button>
        </div>
      </div>
    )
  }
}
