import React, { Component } from "react";

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends Component {
    constructor(props) {
        super()
        this.props = props
    }

    render() {
        return(
            <button onClick={(potato) => {this.props.onReceiveCoordinates([potato.clientX,potato.clientY])}}>
                Coordinates Button
            </button>
        )
    }
}
