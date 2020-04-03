import React, { Component } from 'react'	
import './App.css';
import MargaeryTyrell from './components/MargaeryTyrell'
import HouseTargaryen from './components/HouseTargaryen'
import HouseLannister from './components/HouseLannister'
import HouseBaratheon from './components/HouseBaratheon'
import RobertBaratheon from './components/RobertBaratheon'
import JohnSnow from './components/JohnSnow'
import HouseStark from './components/HouseStark'
import CatelynStark from './components/CatelynStark'

	
	export default class App extends Component {
		constructor(props) {
		super(props);
	
			this.state = {
			isLoaded: false,
			data: []
	}
}
	
	render() {
		return (
			<div>
				<h1> Game Of Thrones Characters </h1>
				<JohnSnow />
				<MargaeryTyrell />
				<HouseTargaryen />
				<HouseLannister />
				<HouseBaratheon />
				<RobertBaratheon />
				<HouseStark />
				<CatelynStark />
			</div>
		)
	}
}


















// class App extends React.Component{
//   constructor(props){
//     super(props);

//     this.state ={
//       characterData: null,
//       houseData:null,
//     };
//   }

//   async getHouses() {
//     try {
//       const abuelo = await axios.get('https://www.anapioficeandfire.com/api/houses');
//       this.setState({ houses: whatever.data });
//     } catch(e) {
//       console.error(e);
//     }
//   }

//   async componentDidMount(){
//     const res= await axios.get ('https://anapioficeandfire.com/api/characters/583');
//     this.setState({characterData: res.data})
//   }

 

// render(){
//   return(
//     <div className="app">
//       <header className="App-header">
//         <JohnSnow info={this.state.characterData} />
//       </header>
//     </div>
//   )
// }
// }


// export default App