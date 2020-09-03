import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = { format: 'hex' };
   }
   handleChange = (evt) => {
      this.setState({ format: evt.target.value });
      this.props.handleChange(evt.target.value);
   };
   render() {
      const { level, changeLevel, handleChange } = this.props;
      const { format } = this.state;
      return (
         <header className="Navbar">
            <div className="logo">
               <a href="#">Jst Color Picker</a>
            </div>
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
               <div className="select-container">
                  <Select value={format} onChange={this.handleChange}>
                     <MenuItem value="hex">HEX - #ffffff</MenuItem>
                     <MenuItem value="rgb">RGB - rgb(255, 255, 255) </MenuItem>
                     <MenuItem value="rgba">
                        RGBA - rgb(255, 255, 255, 1.0)
                     </MenuItem>
                  </Select>
               </div>
            </div>
         </header>
      );
   }
}
