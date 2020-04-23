import React, { Component } from 'react'
import '../ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class ColorBox extends Component {

    state = {
        copied: false
    }

    changeCopyState = () => {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        });
    }

    render() {        
        const { background, name } =  this.props;        
        const { copied } = this.state;
        return (
         <CopyToClipboard text={this.props.background} onCopy={() => this.changeCopyState()}>
            <div style={{background: background}} className="ColorBox">
                <div style={{background}} className={`copy-overlay ${copied && "show"}`} />
                <div className={`copy-msg ${copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{this.props.background}</p>
                </div>
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