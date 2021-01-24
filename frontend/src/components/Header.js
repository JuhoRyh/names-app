import React from 'react'
import axios from 'axios'

const Header = (props) => {
  const popularHandler = () => {
    axios.get('/api/names/popular').then(res => props.setNames(res.data))
  }

  const alphabeticalHandler = () => {
    axios.get('/api/names/alphabetical').then(res => props.setNames(res.data))
  }

  return (
    <div className="header">
      <h1>Name App</h1>
      <div className="inputContainer">
        <button onClick={popularHandler}>Popular</button>
        <button onClick={alphabeticalHandler}>Alphabetical</button>
      </div>
      <div>
        <input placeholder="Search..." type="text" value={props.search} onChange={props.searchHandler} />
      </div>
    </div>
  )
}

export default Header