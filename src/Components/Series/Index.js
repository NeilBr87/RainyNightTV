import clogo from '../Lander/clogo.webp';
import hungryGrassLogo from '../Lander/HungryGrassLogo.webp';
import dublogo from '../Lander/dublogo.webp';
import './style.css';
import { useState } from 'react';
import Episode  from '../Episode/Index';
export default function Series(props) {
    const [infoSelected, setInfoSelected] = useState("episodes");

    const [selectedEpisode, setSelectedEpisode] = useState("E0");


    function setLogo() {
        switch(props.seriesName) {
            case "CR Zero":
                return clogo;
            case "Hungry Grass":
                return hungryGrassLogo;
            case "Dubai W⚓":
                return dublogo;
            default:                return null;
        }
    }

    function setBlurb() {
        switch(props.seriesName) {
            case "CR Zero":
                return "When a Croydon gang boss is convicted, his unlikely protégé must earn the respect of veteran captains who expected to inherit power—while two rival alliances stand on the brink of all-out war.";
            case "Hungry Grass":
                return "September, 1851. Michael McCourt steps off a steamboat in Independence, Missouri — the last civilized town before the wilderness swallows everything. He needs answers, and he'll ride into certain death to get them.";
            case "Dubai W⚓":
                return "A cringe-comedy mockumentary following Dubai's most self-absorbed influencers, crypto bros, and expats as they navigate personal brand crises and social hierarchies while war looms on the horizon.";
            default:                return null;
        }
    }
    return (
        <div>

        <button className='cancelSeries' onClick={() => props.setSeriesView("")}>X</button>

        <div className="series">
            {selectedEpisode === "E0" && (
            <div>
                <img src={setLogo()} alt={props.seriesName} className="landscapeImage" />
                <div className='episodeCard'>
                    <h2>{props.seriesName}</h2>
                    <p>{setBlurb()}</p>
                    <div className='seriesInfo'>
                        <h3 onClick={() => setInfoSelected("episodes")}>Episodes</h3>
                <h3 onClick={() => setInfoSelected("moreInfo")}>More info</h3>
                <h3 onClick={() => setInfoSelected("pitchInfo")}>Pitch info</h3>
            </div>
            </div>
            </div>
            )}
            {infoSelected === "episodes" && <Episode selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode}  />}
        </div>
        </div>
    )
}