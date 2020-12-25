import React, { Component } from "react";
import { 
    Map, 
    TileLayer,  
    Popup,
    Marker
} from "react-leaflet";
import Leaflet, { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import WitchTooltip from "./WitchTooltip";
import {defaults} from "./utils/consts";

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const icons = {
    "Male": new Leaflet.icon({
        iconUrl: 'icons/Male.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Female": new Leaflet.icon({
        iconUrl: 'icons/Female.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }),
    "Unknown": new Leaflet.icon({
        iconUrl: 'icons/Unknown.png',
        iconSize: [42, 57.3],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    })
}

console.log("test");

export default class Visualization extends Component {
    state = defaults;
    render() {
        return this.props.witches ? (
            <div>
                <div>
                    <input type="radio" value="Color" name="color" checked={true}/> Color
                    <input type="radio" value="No_color" name="color"/> No Color
                </div>
            <Map id="map"
                center={[this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                style={{ width: "100%", position:"absolute", top: 90, bottom: 0, zIndex: 500}}
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
                        icon={this.state.color ? (icons[witch.properties.Sex]) : (icons["Unknown"])}
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
                    position={this.state.activeWitch.geometry.coordinates}
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