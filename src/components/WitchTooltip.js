import React, { Component } from "react";

export default class WitchTooltip extends Component {
  render() {
    return (
      <div>
        <b><i> {this.props.witch.properties.FullName} </i></b>
        <br /> {this.props.witch.properties.Case_date} 
        <br /> {this.props.witch.properties.Res_settlement}
        <br /> <b> Sex: </b> {this.props.witch.properties.Sex}
        <br /> <b> Age: </b> {this.props.witch.properties.Age}
        <br /> <b> Occupation: </b> {this.props.witch.properties.Occupation}
        <br /> <b> Case Features: </b> {this.props.witch.properties.FolkNotes}
        <br />
        <br />
        <a href={`http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.caserecord&caseref=${this.props.witch.properties.CaseRef}&search_string=date%3D%26enddate%3D%26char%3Dany%26char%5Fop%3DAND%26ritual%5Fobject%3Dany%26rit%5Fop%3DAND%26calendar%5Fcustom%3Dany%26cal%5Fop%3DAND%26non%5Fnatural%5Fbeing%3Dany%26nnb%5Fop%3DAND%26demonic%5Fpact%3Dany%26pact%5Fop%3DAND`}><i><b>Full Entry</b></i></a>
      </div>
    )
  }
}