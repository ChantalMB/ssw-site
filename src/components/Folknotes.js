import React, { Component } from "react";
import Iframe from 'react-iframe';
import '../css/fn.css';


export default class FolkNotes extends Component {
    render() {
        return (
            <>
            <section class="panel">

            <div className= "post-field">
            <Iframe url="../streamgraph.html"
            id="myId"
            className="myClassname"
            frameBorder="0"
            />
            </div>

            </section>

        <section class="panelbod"> 
            <div class="content">
            <h1>Hello,</h1>
            <p>Utilise outside the box thinking and try to think outside the box. Build transformation mapping and then maximise share of voice. Repurpose agile and then create a better customer experience. Funneling brand ambassadors so that as an end result, we further your reach. Leveraging customer journeys and possibly use best practice.</p>
            </div>
            </section>
            </>
        )
    }
}