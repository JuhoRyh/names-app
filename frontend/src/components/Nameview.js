import React from 'react'

const Nameview = (props) => {
  return (
    <div className="nameCard">
      <h3>{props.nameObject.name}</h3>
      <h3>{props.nameObject.amount}</h3>
    </div>
  )
}

export default Nameview