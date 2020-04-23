import React from 'react'
import 'rc-slider/assets/index.css';
import '../Navbar.css';
import Slider from 'rc-slider';

class Navbar extends React.Component {

    render() {
        const { level, changeLevel } = this.props
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">reactcolorclipper</a>
                    <div className="slider-container">
                        <span>level: {level}</span>
                    </div>
                </div>
                <div className="slider">
                <Slider 
                defaultValue={ level } 
                min={ 100 } 
                max={ 900 } 
                onAfterChange={changeLevel} 
                step={ 100 }
                />
                </div>
            </header>
        )
    }
}

export default Navbar
