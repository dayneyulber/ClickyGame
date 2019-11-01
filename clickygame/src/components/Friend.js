import React, { Component } from 'react';

export default class Friend extends Component {

    render() {
        return (
            <img className="img-fluid friend" 
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )
    }
}