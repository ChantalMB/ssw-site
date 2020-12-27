import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import WitchMap from "./Map.js"

export default class Visualization extends Component {
    render() {
      return (
        <Router>
          <div>
            Visualization page
          </div>
          <div>
            <Switch>
              <Route path='/visualization/map' render={()=>{ return <WitchMap witches={this.props.witches} />}} />
            </Switch>
          </div>
        </Router>
      )
    }
}
