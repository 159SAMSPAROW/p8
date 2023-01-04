import React from 'react'
import possibilityImg from '../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-img'>
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Acess to get Started</h4>
        <h1 className='gradient__text'>
          The possibility are beyond your imagination
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all  exercise blessing.
        </p>
        <h4>Request Early Acess to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility