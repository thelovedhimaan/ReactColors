import React, { Component } from 'react';

class Palette extends Component {
   render() {
      return (
         <div className="Palette">
            <div className="Palette-colors">
               <h1>Palette</h1>
               {this.props.palette.map((n) => n.name)}
            </div>
         </div>
      );
   }
}
export default Palette;
