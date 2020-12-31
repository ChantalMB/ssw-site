import React, { Component } from "react";
import Iframe from 'react-iframe';
import '../css/devil.css';


export default class Devil extends Component {
    render() {
        return (
            <>
            <section className="panel">
                <div className= "post-field">
                <Iframe url="../devil_type.html"
                id="myId"
                className="myClassname"
                frameBorder="0"
                />
                </div>
            </section>


                <section className="panel">
                <div className= "post-field">
                <Iframe url="../devil_text.html"
                id="myId"
                className="myClassname"
                frameBorder="0"
                />
                </div>
                </section>
            </>
                
        )
    }
}