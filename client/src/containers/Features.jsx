import React from 'react'
import { Feature } from '../components'

const featureData = [
  {
    title: 'title 1',
    text: 'text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1text 1',
  },
  {
    title: 'title 2',
    text: 'text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ',
  },
  {
    title: 'title 3',
    text: 'text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ',
  },
  {
    title: 'title 4',
    text: 'text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 text 4 ',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is now and You just Need To realize it. Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
