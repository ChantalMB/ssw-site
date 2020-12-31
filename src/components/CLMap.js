import React, { Component } from "react";
import L from "leaflet";
import clwf from '../data/clwf'
import '../css/cl-map.css'
import FadeInSection from './fadeinSec';


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
            <FadeInSection> 
            <section class="panel">
                <div class="content">
                    <h1>Parallels in the North and South</h1>
                    <p>This map divides the same data that was used for the point map into broader regions—the deeper the colour, the greater the number of accused witches who resided in the area. While this map is not precisely historically accurate because it divides Scotland into its 32 council areas rather than the 34 historic counties or shires, I still found it useful for looking broadly at the number of those accused by region. Compared to the point map it seems to paint a somewhat different picture of where most of those accused of witchcraft with folkloric case elements resided. On the point map, the central belt of the Scottish lowlands seemed to be where cases concentrated, but when looking at this map, you can’t help but immediately notice the prominent red splotch that is Aberdeenshire. Only three of the accused seemed to be located in the city, whereas beyond the central city walls there are 24 more cases disbursed throughout the region. Many of the cases appear to be from the late 16th century, <a href="https://www.euppublishing.com/doi/abs/10.3366/nor.2001.0003">and a number of works</a> by historian Julian Goodare indicate that there was a witchcraft panic originating in Aberdeenshire in 1597,  which aligns with what the data shows. This also aligns with the year <em>Daemonologie</em> was published, and in combination with the well-documented trials recorded in Aberdeenshire at this time, the influence that King James VI’s publication may have had on these cases lingers. This region borders on the Highlands, so naturally it very likely shared some of the more traditional beliefs that were found there as locals and travellers intermingled. The cases of Aberdeenshire from this time period tend to have folk healing elements, with the specific fairy elements of a case often being directly associated with a devilish form, and spells or “cantripis” uttered in Gaelic (Henderson, 153). While <em>Daemonologie</em> may or may not have been the trigger for the witchhunts in Aberdeenshire that began in 1597, it certainly increased awareness about the apparent demonic dangers of what were once considered cultural beliefs, and those who did not conform with James VI’s newly established ideologies and continued to perform acts that could be associated with folklore and fairy encounters became something damning that could result in persecution. Should the fairy beliefs of the Highlands have come under the scrutiny of <em>Daemonologie</em>, they likely would’ve looked similar to the Aberdeenshire trials.</p>
                    <p class="has-line-data" data-line-start="2" data-line-end="3">Looking beyond the Lowlands going all the way north, another curious occurrence I noted situated itself in the Scottish isles. Due to the fact that I couldn’t consistently find a regional map or population data for the time period being studied, this map only accounts for the number of accused rather than the number of accused in relation to area or population of each region; yet, this lack of calculated proportionally led me to notice that the number of those accused as witches throughout the vast Highlands was equal to the number of those accused on the much smaller Orkney Islands. Referencing the details of the point map, I observed that all but one case occurred prior to 1616, and, upon researching this, I discovered that in 1615 Orkney was annexed to the crown following the execution of the Stewart lineage of earls who previously controlled the islands (Willumsen pg. 157). This meant that Scottish law was swiftly enacted across Orkney, and while there are no explicit mentions of diabolism in these cases, each mention practice of superstitions or elements of folk healing which King James VI warned about in <em>Daemonologie</em>, the resulting trials similar to those in Aberdeenshire. Through transference of land, once again do the fears of the Lowlands encroached upon the tradition of the Highlands.</p>
                 </div>
            </section>
            </FadeInSection>
            </section>
            </>
        )
    }
}