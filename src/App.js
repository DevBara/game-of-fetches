import React, { Component } from 'react'
// import axios from 'axios'
import Tyrell from './components/Tyrell'
import Targaryen from './components/Targaryen'
import Lannister from './components/Lannister'

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state= {
      Tyrell:"",
      Targaryen: "",
      Lannister: '',
    }
  }


  render() {
    return (
      <div>
        <Tyrell />
        <Targaryen />
        <Lannister />
        
      </div>
    )
  }
}
