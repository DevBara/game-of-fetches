import React, { Component } from 'react'
// import axios from 'axios'
import Tyrell from './components/Tyrell'
import Targaryen from './components/Targaryen'
import Lannister from './components/Lannister'
import Baratheon from './components/Baratheon'

export default class App extends Component {
  // constructor(props){
  //   super(props);
    
  //   this.state= {
  //     Tyrell:"",
  //     Targaryen: "",
  //     Lannister: '',
  //     Baratheon: '',
  //   }
  // }


  render() {
    return (
      <div>
        <Tyrell />
        <Targaryen />
        <Lannister />
        <Baratheon />
        
      </div>
    )
  }
}
