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
            breed: 'husky'
        }
        fetchDoggos('husky')
    }

    componentDidMount() {
        console.log('component DID mount!')
        fetchDoggos(this.state.breed).then(res => {
            this.setState({ doggos: res.data.message})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component DID update!')
        console.log(prevState)
    }

    searchDoggos = doggoName => {
        console.log('search doggos')
        fetchDoggos(doggoName).then(res => {
            this.setState({ doggos: res.data.message, breed: doggoName})
        })
    }

    render() {
        console.log('render function ran')
        return (
            <>
                <h1>My App</h1>
                {this.state.doggos.map((doggo, i) => <img width='200' src={doggo} key={i} alt={doggo}></img>)}
            </>
        )
    }
}

export default App;
