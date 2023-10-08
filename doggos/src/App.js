import React from 'react';
import axios from 'axios';

const fetchDoggos = breed => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res)
    .catch(err => console.error('nooooo!'))
}

class App extends React.Component{
    constructor(){
        console.log('constructor ran')
        super();
        this.state = {
            doggos: [],
            breed: ''
        }
    }

    render() {
        console.log('render function ran')
        return (
            <>
                <h1>My App</h1>
            </>
        )
    }
}

export default App;
