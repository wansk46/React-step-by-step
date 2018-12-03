import React , { Component } from 'react'

export default class Number extends Component {
    render(){
        return (
            <div>
           Number:{this.props.PassedNumber}
            </div>
        )
    }
}