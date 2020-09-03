import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import PalleteList from './PaletteList';
import { generatePalette } from './colorHelper';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
class App extends Component {
   findPalette(id) {
      return seedColors.find(function (palette) {
         return palette.id === id;
      });
   }
   render() {
      return (
         <Switch>
            <Route
               exact
               path="/"
               render={() => <PaletteList palettes={seedColors} />}
            />
            <Route
               exact
               path="/palette/:id"
               render={(routeProps) => (
                  <Palette
                     palette={generatePalette(
                        this.findPalette(routeProps.match.params.id)
                     )}
                  />
               )}
            />
            <Route exact path="/" />
         </Switch>

         //  <div>
         //     <Palette palette={generatePalette(seedColors[4])} />
         //  </div>
      );
   }
}
export default App;
