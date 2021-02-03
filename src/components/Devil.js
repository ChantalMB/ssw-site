import React, { Component } from "react";
import Iframe from 'react-iframe';
import '../css/devil.css';
import FadeInSection from './fadeinSec';



export default class Devil extends Component {
    render() {
        return (
            <>
           
            <section className="p-dty">
                <div className= "pf-dty">
                <Iframe url="../devil_type.html"
                id="i-dty"
                className="myClassname"
                frameBorder="0"
                />
                </div>
            </section>


            <FadeInSection>
            <section class="pb-dv"> 
                <div class="c-dv">
                    <h1>All Manners of Deviltry</h1>
                    <p class="has-line-data" data-line-start="0" data-line-end="1">When creating these visualizations, I opted to use data recorded about the manner and appearance of the devil from the entire database rather than restricting it to only cases with fairy and folkloric elements like I did for my map visualisations in hopes of finding broader trends in how the devil may have been perceived in cases throughout Scotland. At this point, I now knew about fairies and their presence as demonic spirits to a majority of the Early Modern Scottish population but questioned where the devil himself fell into this intertwining of folkloric and religious belief. That is until I happened upon the case notes of <a href="http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.caserecord&amp;caseref=C/EGD/1558&amp;search_string=date%3D%26enddate%3D%26char%3Dany%26char%5Fop%3DAND%26ritual%5Fobject%3Dany%26rit%5Fop%3DAND%26calendar%5Fcustom%3Dany%26cal%5Fop%3DAND%26non%5Fnatural%5Fbeing%3Dany%26nnb%5Fop%3DAND%26demonic%5Fpact%3Dany%26pact%5Fop%3DAND">Issobell Gowdie</a>, where it is written that:</p>
                    <blockquote>“She linked the elves and the Devil by saying that the Devil gave elves instructions on how to use and make elfshot and that they fire the shot in the Devil’s name.”</blockquote>
                    <p class="has-line-data" data-line-start="4" data-line-end="5">In her trial, the devil seemed to be regarded as an entity separate from fairies yet involved with them; since they were considered to be demonic beings it makes sense that the devil himself would rule over them, but could the opposite have been true as well? Was the construction of the devil shaped through folkloric beliefs about faeries, crafting him to resemble both a religious and mythical figure for the Scottish? The documentation for the Survey of Scottish Witchcraft Database stated that the table which includes the information needed for this analysis, WDB_DevilAppearance, should be relabelled with “Non-natural” beings rather than specifically the devil because they are unsure if the descriptions provided are meant to specifically reference the devil; regardless, I feel that looking at the contents of this table when thinking about the devil could still give valuable context as to where the devil is situated within traditional folklore and the Scottish witchhunts.</p>
                    <p class="has-line-data" data-line-start="6" data-line-end="7">The first visualisation yielded unsurprising results when looking at the “type” of being noted as appearing to the accused. Overwhelmingly, this being was male or simply described as a “devil”, and the third most common form this being took was an animal-- very direct in its given context. Further intrigue comes when looking at what makes up the remaining larger proportions of this circle packing, where fairy and spirit-- two terms often used interchangeably in Scottish accounts of witchcraft-- are featured prominently. Yet despite all this, the result of this analysis that surprised me the most was the fourth most prominent “type” being “female”. The devil even outside of the context of witchcraft is most commonly cast as a masculine figure, so I was intrigued by the fact that female appeared so frequently; in my search for answers about how this seemingly unusual result came to be, I turned to the next visualization which looks at the more detailed “text” that provided fuller descriptions of the beings recorded in this table.</p>
                </div>
            </section>
            </FadeInSection>


            <FadeInSection>

            <section className="p-dtx">
                <div className= "pf-dtx">
                <Iframe url="../devil_text.html"
                id="i-dtx"
                className="myClassname"
                frameBorder="0"
                />
                </div>
            </section>
            </FadeInSection>


            <FadeInSection>
            <section class="pb-dv"> 
                <div class="c-dv">
                <p class="has-line-data" data-line-start="2" data-line-end="3">When looking at the largest circles, nothing immediately stood out to me as providing an answer to my question of how the devil was characterized as female. The descriptor of “green” denoted nature but often was associated fairies due to their association with the natural world, indicating a potential connection between the devil as master of nature, which could hold true whether the devil was seen in his religious embodiment or as a mythic creature overseeing the fair folk. The question of “what animal?” that may have been pondered when looking at the previous visualization of “type” of being is quickly answered with the prominence of the “cat” and “dog” circles. The singular more prominent word I was unfamiliar with was “antiochia”, which also went undefined in the database’s glossary. <a href="http://search.ebscohost.com.proxy.library.carleton.ca/login.aspx?direct=true&amp;db=nlebk&amp;AN=252506&amp;site=ehost-live">In her writings about the appearance of the devil</a>, Joyce Miller, one of the database’s creators, states that “Antiochia” was, in fact, a female devil, known as the “gentle wife of the Devil.” Miller notes that it is she who makes up a majority of “female” mentions in the database, but also that all mentions of her come from a singular trial involving 21 individual that occurred in 1697. It could be speculated that given the description of “gentle”, Antiochia may be meant to represent the Queen of Elphane (Fairyland) in this scenario with the devil acting as king, or a goddess-like figure resembling pre-Christian pagan deities that held ties to Scottish folklore, but ultimately she remains a mystery.</p>
                </div>
            </section>
            </FadeInSection>
            </>
                
        )
    }
}