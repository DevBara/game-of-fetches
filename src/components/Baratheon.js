import React, { Component } from 'react'
import axios from 'axios'



export default class Baratheon extends Component {
    constructor(props){
        super(props);

        this.state ={
            Baratheon:[],
        
        }
    }

    getBaratheon(){
        axios.get('https://www.anapioficeandfire.com/api/houses/17')
        .then(response => {
          this.setState({Baratheon: response.data.seats})
        })
        .catch(error => {
          console.log(error);
        })
    }

    componentDidMount(){
        this.getBaratheon();
    }
    
    
    render() {
        const {Baratheon} = this.state;

        return (
            <div>
                <h1>What is the second seat of House Baratheon?</h1>
                <p>{Baratheon}</p>
                
            </div>
        )
    }
}


    

    