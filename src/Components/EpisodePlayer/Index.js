import { useEffect } from 'react';
import { Link, Navigate, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { episodePath, showPath } from '../../data/shows';
import './style.css';

export default function EpisodePlayer() {
    const { show } = useOutletContext();
    const { number } = useParams();
    const navigate = useNavigate();
    const episode = show.episodes.find((ep) => String(ep.number) === number);
    const next = episode && show.episodes.find((ep) => ep.number === episode.number + 1);

    function close() {
        navigate(showPath(show));
    }

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && navigate(showPath(show));
        window.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [navigate, show]);

    if (!episode) return <Navigate to={showPath(show)} replace />;

    return (
        <div className="episodeOverlay" role="dialog" aria-modal="true" aria-label={`${show.title}, ${episode.title}`}>
            <div className="playerBar">
                <button className="closeButton" onClick={close} aria-label="Close player">✕</button>
                <div className="playerTitle">
                    <span>{show.title}</span>
                    <strong>{episode.title}</strong>
                </div>
                {next ? (
                    <Link to={episodePath(show, next.number)} replace className="nextButton">
                        Next ›
                    </Link>
                ) : (
                    <span className="nextSpacer" />
                )}
            </div>

            <video
                key={episode.video}
                className="videoPlayer"
                src={episode.video}
                poster={episode.still}
                controls
                autoPlay
                playsInline
                preload="auto"
                onEnded={() => next && navigate(episodePath(show, next.number), { replace: true })}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
