import React from 'react'

export default function Card(props){
  return(
    <div className='card my-card' style={{width: 20 + 'rem'}}>
      <div style={{background: props.background}}>
        <img src={props.logo} alt='' />
      </div>
      <img className='card-img' src={props.image} alt='' />
      <div className='card-body'>
        {props.price}
        <a className='btn btn-info prop-button'>Add Property</a>
      </div>
    </div>
  )
}
