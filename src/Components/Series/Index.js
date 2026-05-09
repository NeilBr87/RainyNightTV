import clogo from '../Lander/clogo.webp';
// import hungryGrassLogo from '../Lander/HungryGrassLogo.webp';
// import dublogo from '../Lander/dublogo.webp';
import './style.css';
import { useState } from 'react';
import Episode  from '../Episode/Index';
export default function Series() {
    const [infoSelected, setInfoSelected] = useState("episodes");

    const [selectedEpisode, setSelectedEpisode] = useState("E0");

    return (
        <div>

        <div className="series">
            {selectedEpisode === "E0" && (
            <div>
            <img src={clogo} alt="Lander" className="landscapeImage" />
            <div className='episodeCard'>
            <h2>CR Zero</h2>

            <p>When a Croydon gang boss is convicted, his unlikely protégé must earn the respect of veteran captains who expected to inherit power—while two rival alliances stand on the brink of all-out war.</p>
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