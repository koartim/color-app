import React, { Component } from 'react'
import '../ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class ColorBox extends Component {
    render() {
        console.log(this.props);
        
        const {background, name} =  this.props
        
        return (
            <CopyToClipboard text={this.props.background}>
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
            </CopyToClipboard>
        );
    }
}

export default ColorBox
