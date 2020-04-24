import React from 'react'
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import "../Palette.css"


class Palette extends React.Component {

    state = {
        level: 500,
        format: "hex"
    }

    changeLevel = (newLevel) => {
        this.setState({level: newLevel})        
    } 

    changeFormat = (val) => {
        this.setState({format: val});
    }

    render() {      
        const { colors } = this.props.palette 
        const { level, format } = this.state     
        const colorBoxes = colors[level].map(color => {
           return <ColorBox background={color[format]} name={color.name}/>
        })

        return (
            <div className="Palette">
                
                <NavBar changeLevel={this.changeLevel} handleChange={this.changeFormat} level={ level }/>
                
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette
