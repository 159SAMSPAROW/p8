import React from 'react'
import { Feature } from '../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='what is gpt3' text='lorem ipsum dolor'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The librairy</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title='Chatbots' text='Lorem ipsum dolor es quantitate'/>
          <Feature title='Knowledge' text='Lorem ipsum dolor es quantitate'/>
          <Feature title='Education' text='Lorem ipsum dolor es quantitate'/>
        </div>
    </div>
  )
}

export default WhatGPT3