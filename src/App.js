import React, { Component } from 'react'
import Axios from 'axios'
import Tyrell from './components/Tyrell'

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state= {
      Targaryen: '',
      Lannister: '',
    }
  }


  // getTargaryen(){
  //   Axios.get('http://www.anapioficeandfire.com/api/houses/378')
  //   .then(response => {
  //     this.setState({Targaryen: response.data.region})
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  // getLannister(){
  //   Axios.get('http://www.anapioficeandfire.com/api/houses/229')
  //   .then(response => {
  //     this.setState({Lannister: response.data.coatOfArms})
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  // componentDidMount(){
  //   this.getTargaryen();
  //   this.getLannister();
  // }


  render() {

    
    // const {Targaryen} = this.state;
    // const {Lannister} =this.state;

    return (
      <div>
        <Tyrell />

        {/* <h1>What region is House Targaryen in?</h1>
        <p>{Targaryen}</p>

        <h1>What's the coat of arms of House Lannister?</h1>
        <p>{Lannister}</p> */}
        
      </div>
    )
  }
}
