import React, { Component } from "react";
import './App.css'
import {CardList} from './component/cards-list/card-list.component'

class App extends Component{
  constructor(){
    super();

    this.state = {
      all : [],
      search : ''
    };
  }
  componentDidMount(){

    
    // API Reference https://hp-api.herokuapp.com/ 

    fetch('https://hp-api.herokuapp.com/api/characters')
    .then((res) => res.json()).then(data => this.setState({all : data}))
  }
  render(){
    const {all,search} = this.state;
    const filterData = all.filter(data =>
      data.name.toLowerCase().includes(search.toLowerCase())
      )
    return(
      <div className="App">
        <h1 className='BigFont'>Harry Potter</h1>
        <div className='input-field'>
          <input 
            type="search"
            placeholder="Search character"
            onChange = {e => this.setState({search : e.target.value})}
            />
        </div>
        <CardList list = {filterData} >
        </CardList>
      </div>
    )
  }
}
export default App;
