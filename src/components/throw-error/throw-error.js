import React, {Component} from 'react'

export default class ThrowError extends Component {
    state = {
        renderError: false
    } 

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0
        }
        return (
            <button 
                className='errer-button btn btn-danger'
                onClick={() => this.setState({renderError: true})}>
                throw Error
            </button>
        )
    }
}