import React, { Component } from "react";
import Iframe from 'react-iframe';
import '../css/fe.css';

import FadeInSection from './fadeinSec';


export default class FolkNotes extends Component {
    render() {
        return (
            <>
                <section className="p-rot">
                    <div className="pf-rot">
                        <Iframe url="../rot.html"
                        id="i-rot"
                        className="myClassname"
                        frameBorder="0"
                        />
                    </div>
                </section>

                <FadeInSection>
                <section className="p-com">
                    <div className="pf-com">
                        <Iframe url="../com.html"
                        id="i-com"
                        className="myClassname"
                        frameBorder="0"
                        />
                    </div>
                </section>
                </FadeInSection>

                <FadeInSection>
                <section class="pb-fe"> 
                    <div class="c-fe">
                    <h1>Malicious Magic</h1>
                    <p class="has-line-data" data-line-start="0" data-line-end="1">To create this collection of simple plots, I first calculated the number of times each term occurred in their given column from the “WDB_Elf_FairyElements” table, and additionally, I attached each case mentioned in this table with their noted “cause of malice” from the “WDB_Malice” table in hopes of finding additional links to witchcraft and its good neighbours. I expected the results of ritual objects to heavily feature items of the “natural” world such as plants and water, and although the charted results did not give much significance to plant matter, the most frequently occurring ritual object used in fairy-related cases was water. Traditionally, bodies of water we thought to be locations where fairies tended to dwell, and building upon this, there are also numerous cases where the accused stated that they learned the water-based healing practices that led to their persecution after visiting fairies (Dalyell, 538). A note from <a href="http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.caserecord&amp;caseref=C/EGD/935&amp;search_type=searchpeople&amp;search_string=lastname%3D%26firstname%3D%26residence%3D">the case of Issobell Haldane</a> states that:</p>
                    <blockquote>
                    <p class="has-line-data" data-line-start="2" data-line-end="3">“She confessed to using special water.  She washed a sick child and asked for healing in the name of the father, son and holy ghost.  Then cast the bairns shirt in the burn.  She was nearly able to transfer the disease, but she spilt some water and it didn’t work.  She was asked if she met fairies, she answered yes, 10 years prior.  She claimed that she stayed in a fairy hill for three days -Thursday till Sunday.  Met with a man with a grey beard.  She made 3 cakes, out of 9 handfuls of meal gotten from 9 different women.  She collected well water for healing. Sharg - tiny ill-thriving creature, probably a changeling.”</p>
                    </blockquote>
                    <p class="has-line-data" data-line-start="4" data-line-end="5">Beyond ritual and practice, witchcraft as a crime also seems to overlap with fairy lore, which was a result that surprised me. Before charting the data related to cause of malice, because so many of the cases I had studied prior were related to folk healing I hypothesized that “Failed healing” would be the most significant cause behind accusations of witchcraft; instead, I was met with witches that embodied fairies in their supposed crimes rather than just distantly connecting to them. In popular thought, fairies were often regarded in a neutral or even positive light due to their potential to commit small acts of kindness for those who pleased them, yet Scottish people still took great care to avoid angering them, doing things such as leaving bowls of water out inside the home for fairies to drink from in the night, as they were also known to be vengeful if wronged, with acts of retribution involving anything from stealing blood to catastrophic storms (Evans-Wentz, pg. 128). Accused witches who were associated with fairies seemed to echo this behaviour, using their magic for revenge against those who wronged them.</p>
                    </div>
                </section>
                </FadeInSection>

                <FadeInSection>
                <section className="p-mt">
                    <div className="pf-mt">
                        <Iframe url="../mt.html"
                        id="i-mt"
                        className="myClassname"
                        frameBorder="0"
                        />
                    </div>
                </section>
                </FadeInSection>

                <FadeInSection>
                <section className="p-eft">
                    <div className="pf-eft">
                        <Iframe url="../eft.html"
                        id="i-eft"
                        className="myClassname"
                        frameborder="0"
                        />
                    </div>
                </section>
                </FadeInSection>

                <FadeInSection>
                <section class="pb-fe"> 
                <div class="c-fe">
                    <p class="has-line-data" data-line-start="0" data-line-end="1">Despite these overlaps, when looking at the types of elf/fairy motifs specifically, I found it interesting that in these cases involving witches associated with fairy elements, the most common word that came from this column was “Thorn Tree”-- a type of tree that was traditionally believed to protect <em>against</em> fairies. Related to this phenomena, in the database I came across <a href="http://witches.shca.ed.ac.uk/index.cfm?fuseaction=home.caserecord&amp;caseref=C/JO/3248&amp;search_type=searchpeople&amp;search_string=lastname%3D%26firstname%3D%26residence%3D">the case of Jonet Morisone</a>, who:</p>
                    <blockquote>"Used herbs to heal. Said the devil told her the fairies took John Glas’s child’s life, and that they intended to take Glas’s life as well. Said that an illness was caused by the fairies - ‘blasted by the fairies’. Asked what the difference was between shooting (elfshot) and blasting. Said there was no cure for shot and that blasting was a whirlwind that the fairies raised about their victim but that it could be healed with herbs or charms."
                    </blockquote>
                    <p class="has-line-data" data-line-start="4" data-line-end="5">In this case, Morisone seems to believe and be aware of the existence of fairies, but does not associate with them and rather acts against them in her healing of fairy blasts. Her description of fairies contributes to their demonization by indicating that they are in fact associates of the devil who, although seemingly operating separately from him, allow him to see their evil deeds. This denunciation of fairies by Morisone combined with a ward against them being the most frequent motif related to them in cases related to fairies within the database reveals that while some witches claimed to learn their practice from the fair folk, others may have had stronger beliefs during this time of reformation that led to fairies being demonized and practitioners of deviltry just as they were, and thus fairies could be used as an alternative demonic source that misfortune could be attributed to and those whom the Scottish people should take precautions against.</p>
                </div>
                </section>
                </FadeInSection>
            </>
        )
    }
}