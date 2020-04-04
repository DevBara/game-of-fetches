import React from 'react'
import axios from 'axios'
import { render } from 'react-dom';

export default class Margaery extends React.Component {
    state ={
        characters: []
    }

    componentDidMount(){
        axios.get('http://anapioficeandfire.com/api/characters/16')
            .then(res => {
                const characters = res.data;
                this.setState({characters});
            })
    }

    render() {
        return ( 
            <div>
                <h1>Where was Margaret Tyrell born?{checkNull().born}</h1>
            </div>
                
        )
    }

}

    

    