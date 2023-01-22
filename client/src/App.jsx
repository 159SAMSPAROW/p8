import React from 'react'
import { Brand, CallToAction, Navbar } from './components'
import {
  Blog,
  Feature,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
