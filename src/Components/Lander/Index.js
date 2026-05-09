import './style.css';
import logo from './logo.png';
import clogo from './clogo.webp';
import HungryGrassLogo from './HungryGrassLogo.webp';
import dublogo from './dublogo.webp';
import abbotts from './abbotts.webp';
import pleasance from './pleasance.webp';
import trilogy from './trilogy.webp';
import twizlLogo from './twizlLogo.webp';
import { useState } from 'react';
import Series from '../Series/Index.js';
export default function Lander() {

    const [seriesView, setSeriesView] = useState("");

    function handleSeriesClick(seriesName) {
        setSeriesView(seriesName);
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
                <h4>Twizl-produced original series<span className='help'>?</span></h4>
                <img src={clogo} alt="croydon" className="portraitImage" />
                <img src={HungryGrassLogo} alt="hungry grass" className="portraitImage" />
                <img src={dublogo} alt="dublin" className="portraitImage" />
            </div>
            <div className='itemRow'>
                <h4>Selected Plaicin worlds<span className='help'>?</span></h4>
                <img src={abbotts} alt="croydon" className="portraitImage" />
                <img src={pleasance} alt="hungry grass" className="portraitImage" />
                <img src={trilogy} alt="dublin" className="portraitImage" />
                <h5 style={{marginTop: '3px'}}>See all Plaicin worlds</h5>
            </div>
            <div className="footer">
                <h4>Written and directed by me</h4>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',alignItems: 'center', gap: '10px', marginTop: '-20px'}}>
                    <h4>Powered by</h4>
                    <img src={twizlLogo} alt="twizl" className="twizlLogo" />
                </div>
            </div>
        </div>)}

        {seriesView === "CR Zero" && (
            <Series />
        )}
        </div>
    )
}