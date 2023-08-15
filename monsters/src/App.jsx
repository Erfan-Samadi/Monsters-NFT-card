import React from 'react'
import './styles/App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

class App extends React.Component {

 constructor(){
  super()
  this.state = {
    monsters: [],
    searchField: ""
  }

 }

 componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then( response => response.json() )
  .then( data => this.setState({ monsters: data }) )
 }
 
 handleChange = (event) => {
  this.setState({ searchField: event.target.value })
 }

 render() {
  const { monsters, searchField } = this.state
  const filteredMonsters = monsters.filter( monster => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return(
    <div className="App">
      <h1> Monster Rolodex </h1>
      <SearchBox placeholder="Search monsters" handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters} />
        

    </div>
    
  )
 }
}

export default App
