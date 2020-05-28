import React from 'react'

const Stories = (props) => {
  console.log('props', props)
  return (
    <div>
      <h3>{props.stories}</h3>
    </div>
  )
}

export default Stories
