import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Nameview from './components/Nameview'
import './styles.css'

const App = () => {
  const [names, setNames] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get('/api/names/popular').then(res => setNames(res.data))
    axios.get('/api/names/total').then(res => setTotal(res.data.total))
  }, [])

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="app">
      <Header setNames={setNames} searchHandler={searchHandler} search={search} />
      <div className="content">
      {names.length > 0 ? names.filter(name => name.name.toUpperCase().includes(search.toUpperCase())).map(filteredName => <Nameview nameObject={filteredName} />) : null}
      <h4 className="total">Total amount of names: {total}</h4>
      </div>
    </div>
  )
}

export default App
