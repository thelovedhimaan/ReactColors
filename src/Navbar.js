import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = { format: 'hex', open: false };
   }
   handleChange = (evt) => {
      this.setState({ format: evt.target.value, open: true });
      this.props.handleChange(evt.target.value);
   };
   closeSnackbar = () => {
      this.setState({ open: false });
   };
   render() {
      const { level, changeLevel, showingAllcolors } = this.props;
      const { format } = this.state;
      return (
         <header className="Navbar">
            <div className="logo">
               <Link to="/">Jst Color Picker</Link>
            </div>
            {showingAllcolors && (
               <div className="slider-container">
                  <span>{level} :</span>
                  <div className="slider">
                     <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                     />
                  </div>
               </div>
            )}
            <div className="select-container">
               <Select value={format} onChange={this.handleChange}>
                  <MenuItem value="hex">HEX - #ffffff</MenuItem>
                  <MenuItem value="rgb">RGB - rgb(255, 255, 255) </MenuItem>
                  <MenuItem value="rgba">
                     RGBA - rgb(255, 255, 255, 1.0)
                  </MenuItem>
               </Select>
            </div>
            <Snackbar
               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
               open={this.state.open}
               autoHideDuration={3000}
               message={
                  <span id="message-id">
                     Format changed.... {format.toUpperCase()}
                  </span>
               }
               ContentProps={{
                  'aria-describedby': 'message-id',
               }}
               onClose={this.closeSnackbar}
               action={[
                  <IconButton
                     onClick={this.closeSnackbar}
                     color="inherit"
                     key="close"
                     aria-label="close"
                  >
                     <CloseIcon />
                  </IconButton>,
               ]}
            />
         </header>
      );
   }
}
