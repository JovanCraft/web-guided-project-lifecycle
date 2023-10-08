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
            <input placeholder='Doggo Breed' value={this.state.inputVal} onChange={(evt) => this.setState({inputVal: evt.target.value})}/>
            <button onClick={() => this.props.searchDoggos(this.state.inputVal)} >Submit</button>
            </>
        )
    }
}
