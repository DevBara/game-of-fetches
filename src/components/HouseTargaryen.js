// import React from 'react'

// function HouseTargaryen(props){
//     function checkNull(){
//         if(props.info === null){
//             return "no date"
//         }

//         return props.info;
//     }
//     return(
//       <div>
//         <h1>What region is House Targaryen in?{house.name}</h1>
//       </div>
//     )
//   }
  
// export default HouseTargaryen



import React, { Component } from 'react';	
import axios from 'axios'
	
	class Targaryen extends Component {
	  constructor(props) {
	  super(props);
	
    this.state = {
    isLoaded: false,
    data: []
   }
}
	
	componentDidMount() {
	
	  axios.get("http://www.anapioficeandfire.com/api/houses/378")

    .then(res => {
    const houseTargaryen = res.data;
    console.log("data ---->", houseTargaryen)
	
	  this.setState({ data: houseTargaryen })
	
	})
	.catch(error => {
	console.log('there is an eror', error)
	})
	}
	
	render() {
	  return (
        <div>
          <h2> What Region is House Targaryen in?</h2>
          {<ul>
          {this.state.data.region}
          </ul>}
        </div>
      )
    }
  }
	
	export default HouseTargaryen;
