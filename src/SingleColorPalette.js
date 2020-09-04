import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class singleColorPalette extends Component {
   constructor(props) {
      super(props);
      this.state = { format: 'hex' };
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
   changeFormat = (val) => {
      this.setState({ format: val });
   };
   render() {
      const { format } = this.state;
      const colorBoxes = this._shades.map((color) => (
         <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showingFullPalette={false}
         />
      ));
      return (
         <div className="SingleColorPalette Palette">
            <Navbar handleChange={this.changeFormat} showingAllcolors={false} />
            <div className="Palette-colors">
               {colorBoxes}
               <div className="ColorBox go-back">
                  <Link
                     className="back-button"
                     to={`/palette/${this.props.palette.id}`}
                  >
                     Go Back
                  </Link>
               </div>
            </div>

            <PaletteFooter
               paletteName={this.props.palette.paletteName}
               emoji={this.props.palette.emoji}
            />
            <div></div>
         </div>
      );
   }
}
export default singleColorPalette;
