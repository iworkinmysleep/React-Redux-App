import React from 'react'
import Stories from './Stories'

const StoriesList = (props) => {
  return (
    <div>
      {props.data.map(item => (
        <Stories key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default StoriesList
