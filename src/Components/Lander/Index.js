import './style.css';
import logo from './logo.png';
import clogo from './clogo.webp';
import HungryGrassLogo from './HungryGrassLogo.webp';
import dublogo from './dublogo.webp';
// import abbotts from './abbotts.webp';
// import pleasance from './pleasance.webp';
// import trilogy from './trilogy.webp';
import twizlLogo from './twizlLogo.webp';
import { useState } from 'react';
import Series from '../Series/Index.js';
import motelday from './motelday.webp';
export default function Lander() {

    const [seriesView, setSeriesView] = useState("");
    const [helpOpen, setHelpOpen] = useState(false);

    function handleSeriesClick(seriesName) {
        setSeriesView(seriesName);
    }

    function handleHelpClick() {
        setHelpOpen(true);
    }

    function handleHelpClose() {
        setHelpOpen(false);
    }

    return (
        <div>
        {seriesView === "" && (
        <div className="lander">
            <img src={logo} alt="Rainy Night TV Logo" className="logo" />
            <div>
                <img onClick={() => handleSeriesClick("CR Zero")} src={clogo} alt="Lander" className="landscapeImage" />
            </div>
            <div style={{color: 'white', marginTop: '20px'}}>
                <h2>Almost prestige television</h2>
            </div>
            <div className='itemRow'>
                <h4>Twizl-produced original series<span className='help' onClick={handleHelpClick}>?</span></h4>
                <div className="seriesImageContainer">
                    <img onClick={() => handleSeriesClick("CR Zero")} src={clogo} alt="croydon" className="portraitImage" />
                    <div className="seriesBubble">Full season</div>
                </div>
                <div className="seriesImageContainer">
                    <img onClick={() => handleSeriesClick("Hungry Grass")} src={HungryGrassLogo} alt="hungry grass" className="portraitImage" />
                    <div className="seriesBubble">Pilot</div>
                </div>
                <div className="seriesImageContainer">
                    <img onClick={() => handleSeriesClick("Dubai")} src={dublogo} alt="dublin" className="portraitImage" />
                    <div className="seriesBubble">Full season</div>
                </div>
            </div>
            <div className='itemRow'>
                <h4>Original shorts</h4>
                <a href='https://youtu.be/SwoxQxRPsJ4' target="_blank" rel="noopener noreferrer" className="shortLink">
                    <div className="seriesImageContainer">
                    <img src={motelday} alt="croydon" className="portraitImage" />
                    <div className="seriesBubble">Short</div>
                </div>
                </a>
            </div>
            
            <div className="footer">
                <h4>Written and directed by me</h4>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',alignItems: 'center', gap: '10px', marginTop: '-20px'}}>
                    <h4>Powered by</h4>
                    <a href="https://twizl.com/" target="_blank" rel="noopener noreferrer">
                        <img src={twizlLogo} alt="twizl" className="twizlLogo" />
                    </a>
                </div>
            </div>
        </div>)}

        {seriesView === "CR Zero" && (
            <Series seriesName="CR Zero" setSeriesView={setSeriesView} />
        )}
        {seriesView === "Hungry Grass" && (
            <Series seriesName="Hungry Grass" setSeriesView={setSeriesView} />
        )}
        {seriesView === "Dubai" && (
            <Series seriesName="Dubai W⚓" setSeriesView={setSeriesView} />
        )}
        {helpOpen && (
            <div className="helpModalOverlay" onClick={handleHelpClose}>
                <div className="helpModalCard" onClick={(e) => e.stopPropagation()}>
                    <button className="helpModalClose" onClick={handleHelpClose} aria-label="Close help modal">✕</button>
                    <img src={twizlLogo} alt="Twizl logo" className="helpModalLogo" />
                    <h2 className="helpModalHeading">What&apos;s Twizl?</h2>
                    <p className="helpModalText">
                        <a href="https://twizl.com/" target="_blank" rel="noopener noreferrer" className="helpModalLink">Twizl</a> is a platform where people can write and direct their own AI TV series. While the AI creates the shots, the writing and direction remain fully in the hands of the creator. Twizl is moving away from video generation, so these are the only assets available here.
                    </p>
                </div>
            </div>
        )}
        
        </div>
    )
}