import React, { Component } from "react";
import L from "leaflet";
import clwf from '../data/clwf'
import '../css/cl-map.css'

const style = {
    width: "100%",
    height: "700px",
    position: "absolute",
};

const mapStyle = (feature) => {
    return ({
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density),
    });
}

const getColor = (d) =>{
    return d > 27  ? '#800026' :
    d > 23  ? '#BD0026' :
    d > 19  ? '#E31A1C' :
    d > 15  ? '#FC4E2A' :
    d > 11  ? '#FD8D3C' :
    d > 7  ? '#FEB24C' :
    d > 3  ? '#FED976' :
              '#FFEDA0';
  }


export default class CLMap extends Component {
    componentDidMount() {
        // create map
        this.map = L.map("map", {
            center: [56.927013, -4.244758],
            zoom: 6.7,
            layers: [
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 19,
                attribution:
                'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
                id: "streets-v9"
            })
            ]
        });
    
        this.geojson = L.geoJson(clwf, {
            style: mapStyle,
            onEachFeature: this.onEachFeature
        }).addTo(this.map);
    
        this.info = L.control();
    
        this.info.onAdd = function(map) {
            this._div = L.DomUtil.create("div", "info");
            this.update();
            return this._div;
        };
    
        this.info.update = function(props) {
            this._div.innerHTML =
            "<h4>Number of Accussed Witches with Folkloric Elements by Local Authority Districts</h4>" +
            (props
                ? "<b>" +
                props.region +
                "</b><br />" +
                props.density +
                " accused "
                : "Hover over region for details");
        };
    
        this.info.addTo(this.map);
    
        // add layer
        this.layer = L.layerGroup().addTo(this.map);
    }

    onEachFeature = (feature, layer) => {
        layer.on({
          mouseover: this.highlightFeature,
          mouseout: this.resetHighlight,
          click: this.zoomToFeature
        });
      }
      highlightFeature = (e) => {
        var layer = e.target;
        layer.setStyle({
          weight: 5,
          color: "#666",
          dashArray: "",
          fillOpacity: 0.7
        });
    
        layer.bringToFront();
    
        this.info.update(layer.feature.properties);
      }
      resetHighlight = (event) => {
        this.geojson.resetStyle(event.target);
        this.info.update();
      }
      zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds());
      }

    render() {
        return (
            <>
            <section>
            <div id="map" style={style}></div>
            </section>
            
            <section className="text">
            <section class="panel">
                <div class="content">
                    <h1>Hello,</h1>
                    <p>Utilise outside the box thinking and try to think outside the box. Build transformation mapping and then maximise share of voice. Repurpose agile and then create a better customer experience. Funneling brand ambassadors so that as an end result, we further your reach. Leveraging customer journeys and possibly use best practice.</p>
                </div>
            </section>
            </section>
            </>
        )
    }
}