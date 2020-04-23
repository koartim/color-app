import React from 'react'
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import "../Palette.css"


class Palette extends React.Component {

    state = {
        level: 500
    }

    changeLevel = (newLevel) => {
        this.setState({level: newLevel})        
    }

    render() {      
        const { colors } = this.props.palette 
        const { level } = this.state     
        const colorBoxes = colors[level].map(color => {
           return <ColorBox background={color.hex} name={color.name}/>
        })

        return (
            <div className="Palette">
                
                <NavBar changeLevel={this.changeLevel} level={ level }/>
                
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette
