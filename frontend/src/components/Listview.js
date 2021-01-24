import React from 'react'
import Nameview from './Nameview'

const Listview = (props) => {
  return (
    <div>
      {props.names.map(nameObject => {
        return <Nameview key={nameObject.name} nameObject={nameObject} />
      })}
    </div>
  )
}

export default Listview