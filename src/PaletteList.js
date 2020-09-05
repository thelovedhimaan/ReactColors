import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
   goToPalette = (id) => {
      this.props.history.push(`/palette/${id}`);
   };
   render() {
      const { palettes } = this.props;
      return (
         <div className={this.props.classes.root}>
            <div className={this.props.classes.container}>
               <nav className={this.props.classes.nav}>
                  <h1>Color Codes</h1>
                  <Link to="/palette/new">Create palette</Link>
               </nav>
               <div className={this.props.classes.palettes}>
                  {palettes.map((palette) => (
                     <MiniPalette
                        {...palette}
                        handleClick={() => this.goToPalette(palette.id)}
                     />
                  ))}
               </div>
            </div>
         </div>
      );
   }
}
export default withStyles(styles)(PaletteList);
