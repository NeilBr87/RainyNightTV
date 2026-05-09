import clogo from '../Lander/clogo.webp';
import hungryGrassLogo from '../Lander/HungryGrassLogo.webp';
import dublogo from '../Lander/dublogo.webp';
import './style.css';
export default function Series() {

    return (
        <div className="series">
            <img src={clogo} alt="Lander" className="landscapeImage" />
            <div className='episodeCard'>
            <h2>CR Zero</h2>

            <p>When a Croydon gang boss is convicted, his unlikely protégé must earn the respect of veteran captains who expected to inherit power—while two rival alliances stand on the brink of all-out war.</p>
            <div>
                <h3>Episodes</h3>
                <h3>More info</h3>
                <h3>Pitch info</h3>
            </div>
            </div>
        </div>
    )
}