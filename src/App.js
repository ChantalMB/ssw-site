import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';




import Sources from "./components/Sources";
import WitchMap from "./components/WitchMap";
import CLMap from "./components/CLMap";
import Devil from "./components/Devil";
import FolkNotes from "./components/Folknotes";
import FairyEle from "./components/FairyElements";
import Home from "./components/Home";

import './css/styles.css';


//import {witches} from "./components/utils/witches"

import "leaflet/dist/leaflet.css";

let witches = require('./data/fairy_witches_data.json').features;

class App extends Component {
  state = {
    witches: witches,
  };
  
  render() {
    return (
      <Router>
        <Navbar />
        <div>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/sources' component={Sources} />
            <Route exact path='/visualization/point-map' render={()=>{ return <WitchMap witches={this.state.witches} />}} />
            <Route exact path='/visualization/cl-map' component={CLMap} />
            <Route exact path='/visualization/folknotes' component={FolkNotes} />
            <Route exact path='/visualization/devilappearence' component={Devil} />
            <Route exact path='/visualization/hidden-elements' component={FairyEle} />
          </Switch>
          </ScrollToTop>
        </div>
      </Router>
    );
  }
}
export default App;
