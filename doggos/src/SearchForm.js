import React from "react";


export default class SearchForm extends React.Component{
    constructor(){
        super()
        this.state = {
            inputVal: ''
        }
    }
    render() {
        return (
            <>
            <input placeholder='Doggo Breed' value={this.state.inputVal}/>
            <button onClick={() => this.props.searchDoggos(this.state.inputVal)} >Submit</button>
            </>
        )
    }
}
