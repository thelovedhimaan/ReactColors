import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class singleColorPalette extends Component {
   constructor(props) {
      super(props);
      this._shades = this.gatherShades(this.props.palette, this.props.colorId);
   }
   gatherShades(palette, colorToFilterBy) {
      let shades = [];
      let allColors = palette.colors;

      for (let key in allColors) {
         shades = shades.concat(
            allColors[key].filter((color) => color.id === colorToFilterBy)
         );
      }
      return shades.slice(1);
   }
   render() {
      const colorBoxes = this._shades.map((color) => (
         <ColorBox
            key={color.name}
            name={color.name}
            background={color.hex}
            showingFullPalette={false}
         />
      ));
      return (
         <div className="Palette">
            <h1>{this.props.colorId}</h1>
            <div className="Palette-colors">{colorBoxes}</div>
         </div>
      );
   }
}
export default singleColorPalette;
