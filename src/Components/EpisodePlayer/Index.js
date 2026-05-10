// CR Zero eps
import CE1 from './CE1.mp4';
import CE2 from './CE2.mp4';
import CE3 from './CE3.mp4';
import CE4 from './CE4.mp4';
import CE5 from './CE5.mp4';
import CE6 from './CE6.mp4';
// Hungry Grass eps
// import HE1 from './HE1.mp4';
// // Dubai W⚓ eps
// import DE1 from './DE1.mp4';
// import DE2 from './DE2.mp4';
// import DE3 from './DE3.mp4';
// import DE4 from './DE4.mp4';
// import DE5 from './DE5.mp4';
// import DE6 from './DE6.mp4';
import './style.css';
export default function EpisodePlayer(props) {

    function getEpisodeSource(episode) {
        switch(episode) {
            case "E1":
                return CE1;
            case "E2":
                return CE2;
            case "E3":
                return CE3;
            case "E4":
                return CE4;
            case "E5":
                return CE5;
            case "E6":
                return CE6;
            default:                return null;
        }
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