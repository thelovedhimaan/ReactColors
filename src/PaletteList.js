import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
   root: {
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      /* background by SVGBackgrounds.com */
      backgroundColor: '#394bad',

      overflow: 'scroll',
   },
   container: {
      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap',
   },
   nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
   },
   palettes: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 30%)',
      gridGap: '2.5rem',
   },
};

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
