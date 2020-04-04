import React, { Component } from 'react'
import axios from 'axios'

export default class Lannister extends Component {
    constructor(props){
        super(props);

        this.state ={
            Lannister:[],
        
        }
    }

    getLannister(){
        axios.get('https://anapioficeandfire.com/api/characters/378')
        .then(response => {
          this.setState({Lannister: response.data.coatOfArms})
        })
        .catch(error => {
          console.log(error);
        })
    }

    componentDidMount(){
        this.getLannister();
    }
    
    
    render() {
        const {Lannister} = this.state;

        return (
            <div>
                <h1>What's the coat of arms of House Lannister?</h1>
                <p>{Lannister}</p>
            </div>
        )
    }
}


    

    