import React, { Component } from 'react'
import '../ColorBox.css';

export class ColorBox extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div style={{background: this.props.background}} className="ColorBox">
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default ColorBox
