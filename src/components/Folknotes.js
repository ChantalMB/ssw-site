import React, { Component } from "react";
import Iframe from 'react-iframe';
import FadeInSection from './fadeinSec';

import '../css/fn.css';


export default class FolkNotes extends Component {
    render() {
        return (
            <>
            <section class="p-strgraph">
                <div className= "pf-strgraph">
                <Iframe url="../streamgraph.html"
                id="i-strgraph"
                className="myClassname"
                frameBorder="0"
                />
                </div>
            </section>

            <FadeInSection>
            <section class="pb-strgraph"> 
                <div class="c-strgraph">
                <h1>A Thematic Breakdown</h1>
                <p>Within the database, there was a central column titled “Folk Notes” in which any notes discussing the folkloric elements of a case could be attached to the accused individual. I was interested in seeing if there were any broader folkloric themes within the database that may prove relevant to my research, so I gathered all of the “folk notes” added into the database and from them used <a href="https://en.wikipedia.org/wiki/Topic_model">topic modelling</a> to generate 15 “themes” associated with this data. I then modelled these themes against the database’s timeline via a streamline graph, as shown, to looked at their significance across the period during which the Scottish witchhunts occurred.</p>
                <p class="has-line-data" data-line-start="4" data-line-end="5">Topics generated tended to fall into the categories of healing, malice, fears, rituals, and folklore, and when plotted the resulting visual primarily revealed that the folkloric aspects of witchcraft in Scotland remained relatively consistent throughout the time period. There is a jump in the topic of “wax, image, kill”, which likely occurred as a result of the <a href="http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.caserecord&amp;caseref=C%2FEGD%2F1773&amp;search_type=searchpeople&amp;search_string=lastname%3D%26firstname%3D%26residence%3D">Paisley trials</a> where the those tried as witches were accused of “participating in 6 meetings where wax images with pins were used to enact murder and roasting the wax image was also used to kill and torment people,” that involved “physical charmes made of bone, blood, and hair.”</p>
                </div>
            </section>
            </FadeInSection>
            </>
        )
    }
}