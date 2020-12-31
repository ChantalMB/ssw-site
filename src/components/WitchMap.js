import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import '../css/map.css'

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
        <>
        <div className= "map-wrap">
            <Map id="map"
                center={[this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                style={{ width: "100%", height: "650px", position:"absolute"}}
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

        <section className="rad">            
        <div className="filters">
                <h2>Filters:</h2>
                <input type="radio" 
                    value="Sex" 
                    name="dataTarget"
                    id="filter1" 
                    checked={this.state.targetData === "Sex"} 
                    onChange={(e)=>{this.setState({targetData: e.target.value})}} 
                /> 
                <label for id="filter1">Sex</label>
                <input type="radio" 
                    value="Age" 
                    name="dataTarget" 
                    id="filter2" 
                    checked={this.state.targetData === "Age"} 
                    onChange={(e)=>{this.setState({targetData: e.target.value})}} 
                /> 
                <label for id="filter2">Age</label>
        </div>
        </section>
                
        <section class="panel">
                <div class="content">
                    <h1>Hello,</h1>
                    <p>Utilise outside the box thinking and try to think outside the box. Build transformation mapping and then maximise share of voice. Repurpose agile and then create a better customer experience. Funneling brand ambassadors so that as an end result, we further your reach. Leveraging customer journeys and possibly use best practice.</p>
                </div>
            </section>
        
        </>
            
    ) : ("Data is Loading...");
  }
}
