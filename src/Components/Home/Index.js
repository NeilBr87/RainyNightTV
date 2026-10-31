import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Index.js';
import SmartImage from '../SmartImage/Index.js';
import HelpModal from '../HelpModal/Index.js';
import { InfoIcon, PlayIcon } from '../icons.js';
import { episodePath, featuredShow, shorts, showPath, shows } from '../../data/shows';
import twizlLogo from '../../assets/img/twizl.webp';
import './style.css';

function PosterTile({ item, priority }) {
    return (
        <>
            <SmartImage
                src={item.poster}
                lqip={item.posterLqip}
                alt={item.title}
                ratio="1 / 1"
                className="posterImage"
                priority={priority}
            />
            {item.badge && <span className="posterBadge">{item.badge}</span>}
        </>
    );
}

export default function Home() {
    const [helpOpen, setHelpOpen] = useState(false);
    const featured = featuredShow;

    return (
        <div className="page home navOffset">
            <Nav />

            <section className="hero">
                <SmartImage
                    src={featured.hero}
                    lqip={featured.posterLqip}
                    alt={featured.title}
                    ratio="1 / 1"
                    className="heroImage"
                    priority
                />
                <div className="heroShade" />
                <div className="heroContent">
                    <p className="heroEyebrow">Almost prestige television</p>
                    <p className="heroMeta">
                        <span>{featured.genre}</span>
                        <span className="dot" />
                        <span>{featured.episodes.length} episodes</span>
                    </p>
                    <div className="heroActions">
                        <Link to={episodePath(featured, 1)} className="btn btnPrimary">
                            <PlayIcon className="btnIcon" /> Play
                        </Link>
                        <Link to={showPath(featured)} className="btn btnSecondary">
                            <InfoIcon className="btnIcon" /> More info
                        </Link>
                    </div>
                </div>
            </section>

            <section className="row">
                <h2 className="rowTitle">
                    Twizl-produced original series
                    <button className="help" onClick={() => setHelpOpen(true)} aria-label="What's Twizl?">?</button>
                </h2>
                <div className="rowScroller">
                    {shows.map((show, i) => (
                        <Link key={show.slug} to={showPath(show)} className="posterTile">
                            <PosterTile item={show} priority={i < 3} />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="row">
                <h2 className="rowTitle">Original shorts</h2>
                <div className="rowScroller">
                    {shorts.map((short) => (
                        <a key={short.slug} href={short.url} target="_blank" rel="noopener noreferrer" className="posterTile">
                            <PosterTile item={short} />
                        </a>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>Written and directed by me</p>
                <a href="https://twizl.com/" target="_blank" rel="noopener noreferrer" className="footerPowered">
                    Powered by <img src={twizlLogo} alt="Twizl" width="22" height="22" />
                </a>
            </footer>

            {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
        </div>
    );
}
