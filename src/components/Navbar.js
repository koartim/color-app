import React from 'react'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import 'rc-slider/assets/index.css';
import '../Navbar.css';


class Navbar extends React.Component {
        
        state = {
            format: "hex",
            open: false
        };

    handleChange = (e) => {
         this.setState({ format: e.target.value, open: true });
         this.props.handleChange(e.target.value)        
    }

    closeSnackbar = () => {
        this.setState({ open: false })
    }

render() {
  const { level, changeLevel } = this.props
  const { format, open } = this.state
  return (
    <header className="Navbar">
         <div className="logo">
            <a href="/">color-clipper</a>
        </div>
        <div className="slider-container">
            <span>level: { level }</span>                    
          <div className="slider">
                <Slider 
                defaultValue={ level } 
                min={ 100 } 
                max={ 900 } 
                onAfterChange={changeLevel} 
                step={ 100 }
                />
          </div>
        </div>
            <div className="select-container">
                <Select value={ format } onChange={ this.handleChange }>
                    <MenuItem value="hex">HEX - #fffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
        </div>
        <Snackbar 
            anchorOrigin={{ vertical: "bottom", 
            horizontal: "left" }} 
            open={ open }
            autoHideDuration={ 3000 }
            message={ <span id="message-id">Format Changed to { format.toUpperCase() }!</span> }
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            onClose={ this.closeSnackbar }   
            action={[
                <IconButton 
                    onClick={ this.closeSnackbar }
                    color='inherit'
                    key='close'
                    aria-label='close'
                >
                    <CloseIcon/>
                </IconButton>
            ]}
        />
    </header>
    )
  }
}

export default Navbar
