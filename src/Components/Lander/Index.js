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
                <img onClick={() => handleSeriesClick("CR Zero")} src={clogo} alt="croydon" className="portraitImage" />
                <img onClick={() => handleSeriesClick("Hungry Grass")} src={HungryGrassLogo} alt="hungry grass" className="portraitImage" />
                <img onClick={() => handleSeriesClick("Dubai")} src={dublogo} alt="dublin" className="portraitImage" />
            </div>
            <div className='itemRow'>
                <h4>Selected Plaicin worlds<span className='help'>?</span></h4>
                <a href="https://plaicin.com/worlds/dc7cc93a-5b4e-4f7f-9b28-1f49c6be9fe8?sharer_id=30746037-8c3d-461c-8a92-5fa4120e660f&share_channel=copy_link" target="_blank" rel="noopener noreferrer">
                    <img src={abbotts} alt="croydon" className="portraitImage" />
                </a>
                
                <a href="https://plaicin.com/worlds/f546c4e3-811c-461b-9a02-9d52b8b38234?sharer_id=30746037-8c3d-461c-8a92-5fa4120e660f&share_channel=copy_link" target="_blank" rel="noopener noreferrer">
                    <img src={pleasance} alt="hungry grass" className="portraitImage" />
                </a>
                <a href="https://plaicin.com/worlds/dc7cc93a-5b4e-4f7f-9b28-1f49c6be9fe8?sharer_id=30746037-8c3d-461c-8a92-5fa4120e660f&share_channel=copy_link" target="_blank" rel="noopener noreferrer">
                    <img src={trilogy} alt="dublin" className="portraitImage" />
                </a>
                <h5 style={{marginTop: '3px'}}>See all Plaicin worlds</h5>
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
        
        </div>
    )
}