import React from 'react'
import ColorBox from './ColorBox';
import "../Palette.css"
import { generatePalette } from "../colorHelpers";
import seedColors from '../seedColors';

class Palette extends React.Component {
    render() {
        console.log(generatePalette(seedColors[4]));
        
        const colorBoxes = this.props.colors.map(color => {
           return <ColorBox background={color.color} name={color.name}/>
        })

        return (
            <div className="Palette">
                {/* {NavBar goes here} */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette
