// CR Zero episode shots
import CREp1Shot1 from './Ep1Shot.jpg';
import CREp1Shot2 from './Ep2Shot.jpg';
import CREp1Shot3 from './Ep3Shot.jpg';
import CREp1Shot4 from './Ep4Shot.jpg';
import CREp1Shot5 from './Ep5Shot.jpg';
import CREp1Shot6 from './Ep6Shot.jpg';
// Hungry Grass episode shots
import HGEp1shot from './HGEp1shot.jpg';
// Dubai W⚓ episode shots
import DEp1Shot from './DEp1Shot.jpg';
import DEp2Shot from './DEp2Shot.jpg';
import DEp3Shot from './DEp3Shot.jpg';
import DEp4Shot from './DEp4Shot.jpg';
import DEp5Shot from './DEp5Shot.jpg';
import DEp6Shot from './DEp6Shot.jpg';
import './style.css';
import EpisodePlayer from '../EpisodePlayer/Index.js';

const episodeData = {
    "CR Zero": {
        shots: [CREp1Shot1, CREp1Shot2, CREp1Shot3, CREp1Shot4, CREp1Shot5, CREp1Shot6],
        count: 6
    },
    "Hungry Grass": {
        shots: [HGEp1shot],
        count: 1
    },
    "Dubai W⚓": {
        shots: [DEp1Shot, DEp2Shot, DEp3Shot, DEp4Shot, DEp5Shot, DEp6Shot],
        count: 6
    }
};
export default function Episode(props) {

    function handleEpisodeClick(episode) {
        props.setSelectedEpisode(episode);
    }

    return (
    <div>
        {props.selectedEpisode === "E0" && (
        <div className="episodeColumn">
            {episodeData[props.seriesName].shots.map((shot, index) => (
                <div key={index} className='episodeContainer'>
                    <img onClick={() => handleEpisodeClick(`E${index + 1}`)} src={shot} alt={`shot${index + 1}`} className="episodeShot" />
                    <div className="episodeInfo">
                        <h4>Episode {index + 1}</h4>
                    </div>
                </div>
            ))}
        </div>)}


        <div>

        {props.selectedEpisode !== "E0" && (
            <EpisodePlayer
                selectedEpisode={props.selectedEpisode}
                setSelectedEpisode={props.setSelectedEpisode}
                seriesName={props.seriesName}
            />
        )}
        </div>
    </div>
    )
}