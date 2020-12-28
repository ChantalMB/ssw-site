import React, { Component } from "react";
import {
    Map,
    TileLayer,
    Popup,
    Marker
} from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import WitchTooltip from "./WitchTooltip";
import {defaults} from "./utils/consts";
import {iconSet} from "./utils/iconSet";

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default class WitchMap extends Component {
  state = defaults;

  handleChange = (e)=> {
      const {name, value} = e.target;

      this.setState({[name]: value});
  };

  render() {
    return this.props.witches ? (
        <div>
            <div>
                <input type="radio" 
                    value="Sex" 
                    name="dataTarget" 
                    checked={this.state.targetData === "Sex"} 
                    onChange={(e)=>{this.setState({targetData: e.target.value})}} 
                /> Sex
                <input type="radio" 
                    value="Age" 
                    name="dataTarget" 
                    checked={this.state.targetData === "Age"} 
                    onChange={(e)=>{this.setState({targetData: e.target.value})}} 
                /> Age
            </div>
        <Map id="map"
            center={[this.state.lat, this.state.lng]}
            zoom={this.state.zoom}
            style={{ width: "100%", position:"absolute", top: 50, bottom: 0, zIndex: 500}}
            updateWhenZooming={false}
            updateWhenIdle={true}
            preferCanvas={true}
            minZoom={this.state.minzoom}
        >
            <TileLayer
            attribution={attribution}
            url={tileUrl}
            />

            {this.props.witches.map((witch, idx)=>
                <Marker
                    icon={iconSet[this.state.targetData](witch.properties[this.state.targetData])}
                    key={`witch-${witch.id}`}
                    color='black'
                    weight={2}
                    onclick={()=> {
                        this.setState({activeWitch: witch});
                    }}
                    position={[witch.geometry.coordinates[1], witch.geometry.coordinates[0]]}
                > </Marker>
            )}
            {this.state.activeWitch && <Popup
                position={[this.state.activeWitch.geometry.coordinates[1], this.state.activeWitch.geometry.coordinates[0]]}
                onClose={()=> {
                    this.setState({activeWitch: null})
                }}>
                    <WitchTooltip witch={this.state.activeWitch}/>
                </Popup>}
        </Map>
        </div>
    ) : ("Data is Loading...");
  }
}
