import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
class Palette extends Component {
   render() {
      return (
         <div className="Palette">
            <div className="Palette-colors">
               <h1>Palette</h1>
               {this.props.colors.map((color) => (
                  <ColorBox background={color} />
               ))}
            </div>
         </div>
      );
   }
}
export default Palette;
