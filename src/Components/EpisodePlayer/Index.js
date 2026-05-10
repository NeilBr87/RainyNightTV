// CR Zero eps
import CE1 from './CE1.mp4';
import CE2 from './CE2.mp4';
import CE3 from './CE3.mp4';
import CE4 from './CE4.mp4';
import CE5 from './CE5.mp4';
import CE6 from './CE6.mp4';
// Hungry Grass eps
import HE1 from './HE1.mp4';
// Dubai W⚓ eps
import DE1 from './DE1.mp4';
import DE2 from './DE2.mp4';
import DE3 from './DE3.mp4';
import DE4 from './DE4.mp4';
import DE5 from './DE5.mp4';
import DE6 from './DE6.mp4';
import './style.css';

const episodeSources = {
    "CR Zero": {
        E1: CE1,
        E2: CE2,
        E3: CE3,
        E4: CE4,
        E5: CE5,
        E6: CE6
    },
    "Hungry Grass": {
        E1: HE1
    },
    "Dubai W⚓": {
        E1: DE1,
        E2: DE2,
        E3: DE3,
        E4: DE4,
        E5: DE5,
        E6: DE6
    }
};

export default function EpisodePlayer(props) {

    function getEpisodeSource(episode) {
        const series = episodeSources[props.seriesName] || episodeSources["CR Zero"];
        return series[episode] || null;
    }


    return (
       <div className="episodeOverlay">
    <div className="episodePlayerContainer">

        <button
            className="closeButton"
            onClick={() => props.setSelectedEpisode("E0")}
        >
            ✕
        </button>

        <video controls autoPlay className="videoPlayer">
            <source
                src={getEpisodeSource(props.selectedEpisode)}
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>

    </div>
</div>
    )
}