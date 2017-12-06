import React from 'react'

export default function Card(props){
  return(
    <div className='card'>
      <div>
        <img src={props.logo} alt=''/>
      </div>
      <div className='image'>
        <img src={props.image} alt=''/>
      </div>
      <div>
        {props.price}
      </div>
    </div>
  )
}
