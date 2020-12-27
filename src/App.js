import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import About from "./components/About";
import Visualization from "./components/Visualization";
import Sources from "./components/Sources";

//import {witches} from "./components/utils/witches"

import DemoMap from "./components/DemoMap";
import { mountains } from "./components/utils/Utils"
import "leaflet/dist/leaflet.css";

let witches = require('./data/fairy_witches_data.json').features;

class Home extends Component {
  render() {
    return <div>Home</div>
  }
}
class App extends Component {
  state = {witches: witches,};
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/visualization' render={()=>{ return <Visualization witches={this.state.witches} />}} />
            <Route exact path='/sources' component={Sources} />
          </Switch>
        </div>
      </Router>
    );
  }

  // This is all the old stuff I'm basing off of
/*   state = {
    mountains: mountains,
  };

  render() {
    return (
      <div>
        <DemoMap
          mountains={this.state.mountains}
        />
      </div>
    );
  } */
}
export default App;
