import React, { Component } from "react";
import Iframe from 'react-iframe';
import '../css/fe.css';


export default class FolkNotes extends Component {
    render() {
        return (
            <div className="row">
                
                <section className="panel">
                <div className= "post-field">
                <Iframe url="../eft.html"
                id="myId"
                className="myClassname"
                frameborder="0"
                />
                </div>
                </section>


                <section className="panel">
                <div className= "post-field">

                <Iframe url="../com.html"
                id="myId"
                className="myClassname"
                frameBorder="0"
                />
                </div>

                </section>


                <section className="panel">
                <div className= "post-field">

                <Iframe url="../mt.html"
                id="myId"
                className="myClassname"
                frameBorder="0"
                />
                </div>

                </section>

                <section className="panel">
                <div className= "post-field">

                <Iframe url="../rot.html"
                id="myId"
                className="myClassname"
                frameBorder="0"
                />
                </div>

                </section>

                </div>

        )
    }
}