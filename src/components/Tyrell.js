import React, { Component } from 'react'
import Axios from 'axios'

export default class Tyrell extends Component {
    constructor(props){
        super(props);

        this.state ={
            Tyrell: "",
        }
    }

    getTyrell(){
        Axios.get('https://anapioficeandfire.com/api/characters/16')
        .then(response => {
          this.setState({Tyrell: response.data.born})
        })
        .catch(error => {
          console.log(error);
        })
    }

    componentDidMount(){
        this.getTyrell();
    }
    
    
    
    render() {
        const {Tyrell} = this.state;

        return (
            <div>
                <h1>Where was Margaery Tyrell born?</h1>
                <p>{Tyrell}</p>
            </div>
        )
    }
}


    

    