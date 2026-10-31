import { useState } from 'react';
import { Link, Navigate, Outlet, useParams } from 'react-router-dom';
import Nav from '../Nav/Index.js';
import SmartImage from '../SmartImage/Index.js';
import { PlayIcon } from '../icons.js';
import { episodePath, getShow } from '../../data/shows';
import './style.css';

const TABS = [
    { id: 'episodes', label: 'Episodes' },
    { id: 'moreInfo', label: 'More info' },
    { id: 'pitchInfo', label: 'Pitch info' },
];

export default function Show() {
    const { slug } = useParams();
    const show = getShow(slug);
    const [tab, setTab] = useState('episodes');
    const [disclaimerOpen, setDisclaimerOpen] = useState(false);

    if (!show) return <Navigate to="/" replace />;

    const count = show.episodes.length;

    return (
        <div className="page showPage navOffset" key={show.slug}>
            <Nav back />

            <section className="showHero">
                <SmartImage
                    src={show.hero}
                    lqip={show.posterLqip}
                    alt={show.title}
                    ratio="1 / 1"
                    className="showHeroImage"
                    priority
                />
                <div className="showHeroShade" />
            </section>

            <div className="showBody">
                <h1 className="showTitle">{show.title}</h1>
                <p className="showMeta">
                    <span className="showBadge">{show.badge}</span>
                    <span>{show.genre}</span>
                    <span className="dot" />
                    <span>{count} {count === 1 ? 'episode' : 'episodes'}</span>
                </p>

                <Link to={episodePath(show, 1)} className="btn btnPrimary showPlay">
                    <PlayIcon className="btnIcon" /> Play episode 1
                </Link>

                <p className="showBlurb">{show.blurb}</p>

                <button
                    className={`disclaimer ${disclaimerOpen ? 'isOpen' : ''}`}
                    onClick={() => setDisclaimerOpen((o) => !o)}
                    aria-expanded={disclaimerOpen}
                >
                    <span className="disclaimerHeader">
                        <span className="disclaimerIcon">!</span>
                        Disclaimer
                        <svg className="disclaimerChevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </span>
                    {disclaimerOpen && (
                        <span className="disclaimerMessage">
                            While I wrote and directed each episode, each individual shot is AI-generated. Some of what you'll see is less than perfect. Some is downright janky. This is due to a mix of my limited skill and the platform's natural limitations.
                        </span>
                    )}
                </button>

                <nav className="tabs" role="tablist">
                    {TABS.map((t) => (
                        <button
                            key={t.id}
                            role="tab"
                            aria-selected={tab === t.id}
                            className={`tab ${tab === t.id ? 'isActive' : ''}`}
                            onClick={() => setTab(t.id)}
                        >
                            {t.label}
                        </button>
                    ))}
                </nav>

                {tab === 'episodes' ? (
                    <ol className="episodeList">
                        {show.episodes.map((ep) => (
                            <li key={ep.number}>
                                <Link to={episodePath(show, ep.number)} className="episodeItem">
                                    <div className="episodeThumb">
                                        <SmartImage src={ep.still} lqip={ep.stillLqip} alt="" ratio="16 / 10" />
                                        <span className="episodeThumbPlay">
                                            <PlayIcon />
                                        </span>
                                    </div>
                                    <div className="episodeText">
                                        <h3>{ep.number}. {ep.title}</h3>
                                        <p>{show.title}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <div className="comingSoon">Coming soon</div>
                )}
            </div>

            <Outlet context={{ show }} />
        </div>
    );
}
