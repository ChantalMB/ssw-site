import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import '../css/map.css'

import WitchTooltip from "./WitchTooltip";
import {defaults} from "./utils/consts";
import {iconSet} from "./utils/iconSet";
import FadeInSection from './fadeinSec';


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
        <FadeInSection>      
        <section class="panel">
                <div class="content">
                <h1>On Each Point</h1>
                    <p class="has-line-data" data-line-start="2" data-line-end="3">I started this project by looking at the Scottish witch trials in the broadest form I could think of, through mapping where each of the accused resided. For this, I wanted to only map cases that specifically had folkloric features related to fairies in hopes of observing any geographical trends that may differ from those accused as a whole. As both a point of reference and a source of location data for the accused, I turned to <a href="https://witches.is.ed.ac.uk/">another more recent GIS project</a> dedicated to mapping those mentioned in the Survey of Scottish Witchcraft Database. I queried the database for cases that had preestablished “fairy” characteristics, but also queried the attached folk and case notes with a selection of related words according to the <a href="http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.glossary#glossary">database’s glossary</a> to ensure no cases were missed due to other data being misentered or unintentionally overlooked. From these queries, I was able to compile a list of individuals whose accusations were accompanied by elements of fairy lore, and with this list, I was then able to locate where each resided by searching their name in the <a href="https://w.wiki/6rX">Wikidata</a> knowledge base generated and made available by the aforementioned project.</p>
                    <p class="has-line-data" data-line-start="4" data-line-end="5">As soon as I had each point plotted on a map, the cluster of those accused located in the Scottish Lowlands immediately stood out to me. While this result corresponded to the <a href="https://witches.is.ed.ac.uk/timeline/">existing map that shows the residences of all those accused of witchcraft</a>, because I chose to look at cases specifically relating to fairies, I anticipate a slight skew towards the accused residing in the Highlands. When initially gathering sources for this project, many-- such as William Collins’ <em>An Ode on Popular Superstitions of the Highlands of Scotland</em>– seemed to indicate that the Highlands were where folklore was the most believed in and a more significant part of daily life. Perhaps the significance of the Highlands’ in folk literature was due to its beauty and sparse population creating a sense of mysticism, but it may also be that this strong belief of folklore associated with the Highlands superseded the belief in diabolism that was heavily associated with witchcraft elsewhere, resulting in fewer accusations of witchcraft in overall. When clicking through the cases located in the Highlands, only that of Jonet Reid mentions any aspect of diabolism-- the others primarily discuss unusual methods of healing and divination, and at their worst, instances of maleficium. Upon researching this, my line of thinking seems to be corroborated in <a href="https://muse-jhu-edu.proxy.library.carleton.ca/article/583082#f124-text">Thomas Brochard’s article on Scottish Witchcraft in the Highlands</a> during the period of 1563 to 1660, which states that the widespread nature and use of “traditional” magic in the Highlands often led to what would be seen as the work of demons in other regions being attributed to fairies or the unpredictable “evil eye” rather than witchcraft, and these misfortunes were even often countered with folk magic, religion, or ritual as opposed to legal means.</p>
                    <p class="has-line-data" data-line-start="6" data-line-end="7">“But then what happened in the Lowlands?” I thought to myself after learning this. I initially thought that perhaps the situation in the Lowlands was opposite to its Northern counterpart-- those living in this more densely populated area of Scotland, many in the “modern” setting of the city, had dwindling belief in the existence of fairies and rather “rediscovered” them to be demonic beings considering their believed ability to perform acts ranging from harmless mischief to massive storms should they be wronged. In some ways, I was correct in this assumption, but of course, there’s more to it. My research into the Lowlands quickly brought me to the infamous book <em><a href="http://www.gutenberg.org/files/25929/25929-pdf.pdf">Daemonologie</a></em>, written by the equally infamous James VI of Scotland. The monarchy of Scotland operated primarily in the Central Lowlands with Edinburgh as its capital, thus living in this central belt during the Early Modern period meant a life of tumult as the Scottish Reformation took hold, leading to both religious and political conflict. James VI was appointed king of Scotland in 1579, years after the Scottish Witchcraft Act of 1563 was put in place, and paid little attention to the crime of witchcraft until the North Berwick trials in 1590-- the first large-scale persecution of witchcraft in Scotland-- which he both attend and fell victim to the accused’s magic and malice. It was likely this incident that spurred James VI to write <em>Daemonologie</em> as his concern about the threat of witches grew; as a Calvinist, he opens the book appealing to fellow protestants by encouraging witch-hunting as an important part of a Christian society such as that which Scotland had been established as. Although I’ve read excerpts from this book before, upon closer reading I discovered that James VI addresses “phairies” in his study, describing them as “one of the sortes of illusiones that was rifest in the time of Papistrie” (pg 57) who acted as demonic spirits that transported and prophesied through the power of the Devil for those who they served. Not only does this singular section implicate the papacy as consorting with demons, it demonizes fairies and their related magic as something necessary to condemn. He further affirms the associations of fairies with demons and cautions against any admirable views of them that may derive from traditional folklore when answering the question of who fairies may appear to:</p>
                    <blockquote>
                    <p>“They may do to both, to the innocent sort, either to affraie<br />
                    them, or to seeme to be a better sorte of folkes nor vncleane<br />
                    spirites are, and to the Witches, to be a cullour of safetie for<br />
                    them, that ignorant Magistrates may not punish them for it, as I<br />
                    told euen now. But as the one sorte, for being perforce troubled<br />
                    with them ought to be pittied, so ought the other sorte (who may<br />
                    bee discerned by their taking vppon them to Prophesie by them,)<br />
                    That sorte I say, ought as seuerely to be punished as any other<br />
                    Witches, and rather the more, that that they goe dissemblingly<br />
                    to woorke”</p>
                    </blockquote>
                    <p class="has-line-data" data-line-start="19" data-line-end="20"><em>Daemonologie</em> was first published in 1597 and quickly became the standard reference for knowledge on witchcraft in Scotland, shaping both the public perception and legal conduct relating to this diabolical trade. Fairies <em>were</em> now commonly seen as demons thus an incident that may once have been attributed to fairies was now considered to be an act of diabolism and maleficium-- the two ingredients that often made a witch-- and must be punished as severely as possible. Yet these beliefs mostly managed to contain themselves to the Lowlands with little spread to the Highlands, and this was likely due the widely disperse population and unpredictable terrain as shown on the base map used for this visualisation that made the dissemination of any literature or knowledge difficult. Ideas that formed during the Scottish Reformation were slow to spread into the Highlands for this same reason, to the point where those who inhabited the area were described as being “void of the knawledge and feir of God” (Hunter, pg. 28), and thus in a way, demonized as a people. As “wild savageis”, James VI sought to tame the Highlands through statues aiming to abolish Gaelic and the folkloric beliefs that remained strong there. As expected, many of those residing in the Highlands rejected the anglicization that was being enforced by the Lowlands, and a part of this was likely rejecting the demonization of their long-standing cultural beliefs and ways of living that involved fairies as a part of nature and daily life. The divide between those accused of witchcraft with folkloric practices in the Highlands versus the Lowlands as seen on this map not only represents a difference in populations and geography, but also a cultural rife in Scotland that formed between tradition and religion during the Early Modern period.</p>
                </div>
        </section>
        </FadeInSection> 
        </>
            
    ) : ("Data is Loading...");
  }
}
