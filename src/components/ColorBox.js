import React, { Component } from 'react'
import '../ColorBox.css';

export class ColorBox extends Component {
    render() {
        console.log(this.props);
        
        const {background, name} =  this.props
        
        return (
            <div style={{background: background}} className="ColorBox">
                <div className="copy-container">
                    <div className="box-content">
                    <span>{name}</span>
                    </div>
                        
                </div>
                <button className="copy-button">Copy</button>
                <div>
                    <span className="see-more">MORE</span>
                </div>
            </div>
        );
    }
}

export default ColorBox
