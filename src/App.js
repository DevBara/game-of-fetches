import React, { Component } from 'react'
import Axios from 'axios'

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state= {
      characterData: '',
    }
  }



  componentDidMount(){
    Axios.get('https://anapioficeandfire.com/api/characters/16')
    .then(response => {
      this.setState({characterData: response.data.born})
    })
    .catch(error => {
      console.log(error);
    })


  }
  render() {

    const {characterData} = this.state;
    return (
      <div>
        <h1>Where was Margaery Tyrell born?</h1>
        <p>{characterData}</p>
        
      </div>
    )
  }
}
