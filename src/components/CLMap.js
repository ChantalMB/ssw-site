import React, { Component, useState } from "react";
import {
    Map,
    TileLayer,
    Popup,
    Marker,
    GeoJSON
} from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

let mapRef;
const COLOR_0 = "#FFEDA0";
const COLOR_3 = "#FED976";
const COLOR_7 = "#FEB24C";
const COLOR_11 = "#FD8D3C";
const COLOR_15 = "#FC4E2A";
const COLOR_19 = "#E31A1C";
const COLOR_23 = "#BD0026";
const COLOR_27 = "#800026";

function getColor(d) {
    return d > 27  ? '#800026' :
           d > 23  ? '#BD0026' :
           d > 19  ? '#E31A1C' :
           d > 15  ? '#FC4E2A' :
           d > 11  ? '#FD8D3C' :
           d > 7  ? '#FEB24C' :
           d > 3  ? '#FED976' :
                     '#FFEDA0';
}

function style(feature) {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.8
    };
  }
  
function zoomToFeature(e) {
    mapRef.fitBounds(e.target.getBounds());
}

export default class CLMap extends Component {

    state = {
        selected: {
            region: "",
            density: ""
        }
    };

    setSelected = (data)=> {
        this.setState({selected: {
            region:data.region,
            density:data.density
        }})
    }
    
    highlightFeature = (e)=> {
        var layer = e.target;
        const { region, density } = e.target.feature.properties;
        this.setSelected({
            region: `${region}`,
            density: density
        });

        layer.setStyle({
            weight: 2,
            color: "#DF1995",
            dashArray: "",
            fillOpacity: 1
        });
        if (!Leaflet.Browser.ie && !Leaflet.Browser.opera && !Leaflet.Browser.edge) {
            layer.bringToFront();
        }
    }
    resetHighlight = (e)=> {
        this.setSelected({});
        e.target.setStyle(style(e.target.feature));
    }

    onEachFeature = (feature, layer)=> {
        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight,
            click: zoomToFeature
        });
    }
    
    render() { return (
        <div className="panel">
            <div className="panel__header">
            <h1>Interactive Choropleth Map with Leaflet</h1>
            <p>
                Choropleth Map is a thematic map which areas color are a visualization
                of a statistical data, this provide an easy measurement across
                regions.
            </p>
            </div>
            <div className="panel__map">
            <button
                onClick={() => {
                mapRef.flyToBounds([
                    [-6.3707299199999996, 106.686210630000005],
                    [-6.0890359900000002, 106.9728240999999969]
                ]);
                }}
                className="full-extent"
            />
            {!this.state.selected.region && (
                <div className="hover-info">Hover over an Area</div>
            )}
            {this.state.selected.region && (
                <div className="info">
                <strong>{this.state.selected.region}</strong>
                <span>{this.state.selected.density} bookings</span>
                </div>
            )}
            <div className="legend">
                <div style={{ "--color": COLOR_27 }}>223+</div>
                <div style={{ "--color": COLOR_23 }}>223+</div>
                <div style={{ "--color": COLOR_19 }}>223+</div>
                <div style={{ "--color": COLOR_15 }}>141 - 222</div>
                <div style={{ "--color": COLOR_11 }}>76 - 140</div>
                <div style={{ "--color": COLOR_7 }}>25 - 75</div>
                <div style={{ "--color": COLOR_3 }}>1 - 24</div>
                <div style={{ "--color": COLOR_0 }}>0</div>
            </div>

            <Map
                style={{ width: "100%", height: "100%" }}
                zoom={10}
                zoomControl={false}
                maxZoom={14}
                center={[56.927013, -4.244758]}
                whenReady={e => {
                mapRef = e.target;
                e.target.flyToBounds([
                    [-6.3707299199999996, 106.686210630000005],
                    [-6.0890359900000002, 106.9728240999999969]
                ]);
                }}
            >
                <TileLayer
                attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                />
                {this.props.areas && (
                    <GeoJSON data={this.props.areas} style={style} onEachFeature={this.onEachFeature} />
                )}
            </Map>
            </div>
            <div className="panel__footer">
            <ul>
                <li>
                <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                <a href="https://leafletjs.com/">Leaflet</a>
                </li>
                <li>
                <a href="https://react-leaflet.js.org/">React Leaflet</a>
                </li>
                <li>
                <a href="https://www.openstreetmap.org/">OpenStreetMap</a>
                </li>
                <li>
                <a href="https://gadm.org/">Region Data by GADM</a>
                </li>
                <li>
                <a href="https://carto.com/location-data-services/basemaps/">
                    Maptiles by CARTO
                </a>
                </li>
            </ul>
            </div>
        </div>
        );
    }
}