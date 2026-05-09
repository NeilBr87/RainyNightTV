import Ep1Shot1 from './Ep1Shot.jpg';
import Ep1Shot2 from './Ep2Shot.jpg';
import Ep1Shot3 from './Ep3Shot.jpg';
import Ep1Shot4 from './Ep4Shot.jpg';
import Ep1Shot5 from './Ep5Shot.jpg';
import Ep1Shot6 from './Ep6Shot.jpg';
import './style.css';
import EpisodePlayer from '../EpisodePlayer/Index.js';
export default function Episode(props) {

    function handleEpisodeClick(episode) {
        props.setSelectedEpisode(episode);
    }

    return (
    <div>
        {props.selectedEpisode === "E0" && (
        <div className="episodeColumn">
        <div className='episodeContainer'>
            <img onClick={() => handleEpisodeClick("E1")} src={Ep1Shot1} alt="shot1" className="episodeShot" />
        <div className="episodeInfo">
            <h4>Episode 1</h4>
        </div>
        </div>
         <div className='episodeContainer'>
            <img onClick={() => handleEpisodeClick("E2")} src={Ep1Shot2} alt="shot2" className="episodeShot" />
            <h4>Episode 2</h4>
        </div>
        <div className='episodeContainer'> 
            <img onClick={() => handleEpisodeClick("E3")} src={Ep1Shot3} alt="shot3" className="episodeShot" />
            <h4>Episode 3</h4>
        </div>
        <div className='episodeContainer'>
            <img onClick={() => handleEpisodeClick("E4")} src={Ep1Shot4} alt="shot4" className="episodeShot" />
            <h4>Episode 4</h4>
        </div>
        <div className='episodeContainer'>
            <img onClick={() => handleEpisodeClick("E5")} src={Ep1Shot5} alt="shot5" className="episodeShot" />
            <h4>Episode 5</h4>
        </div>
        <div className='episodeContainer'>
            <img onClick={() => handleEpisodeClick("E6")} src={Ep1Shot6} alt="shot6" className="episodeShot" />
            <h4>Episode 6</h4>
        </div>
        </div>)}


        <div>

        {props.selectedEpisode !== "E0" && (
            <EpisodePlayer
                selectedEpisode={props.selectedEpisode}
                setSelectedEpisode={props.setSelectedEpisode}
            />
        )}
        </div>
    </div>
    )
}