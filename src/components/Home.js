import React, { Component } from "react";

import Particle from "./particles";
import FadeInSection from './fadeinSec';


class Home extends Component {
    render() {
      return (
        <>
      <section className="pgHeader">
        <div className="bg">
          <h1><em>"Illusiones rifest in the time of Papistrie"</em></h1>
        </div>
        <Particle className="particles"/>
      </section>
      <FadeInSection>
      <section class="panel">
          <div class="content">
          <h1>About</h1> 
          <p class="has-line-data" data-line-start="2" data-line-end="3">Meeting to dance in the night, flying through the sky with crows or perched on stems of ragwort, causing mischief or kidnapping children-- these are all traits which both the fairies and later witches of Scotland became know for. Upon being asked to explore the <a href="http://www.shca.ed.ac.uk/Research/witches/">Survey of Scottish Witchcraft</a> along with my classmates for a seminar, and the subsequent collective observation and surprised discussion of “Fairy” being included as a characterisation of Scottish witch trials, I wondered, <em>“Could beliefs about creatures such as fairies and elves established prior to the Scottish witch trials have influenced their notions of witchcraft and the devil?”</em></p> <p class="has-line-data" data-line-start="4" data-line-end="5">This project was created to examine that question through analyzing the content of the Survey of Scottish Witchcraft Database, alongside additional primary and secondary sources that together reveal how beliefs surrounding fairies, elves, witchcraft, and religion intersected during the Early Modern period of Scotland. In seeking points of entanglement amongst these topics through both close readings and visualizing data from the database by using digital mediums such as text analysis and mapping, I was able to look at how the Scottish witch was crafted through traditional understanding of fairies and newly introduced religious ideal at both the microscope and macroscope in Early Modern Scotland.</p> <p class="has-line-data" data-line-start="6" data-line-end="7">Note: For definitions of terms relating to these topics, please use <a href="http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.glossary">the glossary</a> compiled by the creators of the Survey of Scottish Witchcraft (2003).</p>
          </div>

          <div class="button_cont" align="center"><a class="example_a" href="/visualization/point-map" target="_blank" rel="nofollow noopener">Get Started</a></div>
          
      </section>
      </FadeInSection>
      </>
      )
    }
  }

export default Home;