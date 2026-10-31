import { useEffect } from 'react';
import twizlLogo from '../../assets/img/twizl.webp';
import './style.css';

export default function HelpModal({ onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div className="helpModalOverlay" onClick={onClose}>
            <div className="helpModalCard" role="dialog" aria-modal="true" aria-labelledby="helpHeading" onClick={(e) => e.stopPropagation()}>
                <button className="helpModalClose" onClick={onClose} aria-label="Close">✕</button>
                <img src={twizlLogo} alt="" className="helpModalLogo" width="52" height="52" />
                <h2 id="helpHeading" className="helpModalHeading">What&apos;s Twizl?</h2>
                <p className="helpModalText">
                    <a href="https://twizl.com/" target="_blank" rel="noopener noreferrer" className="helpModalLink">Twizl</a> is a platform where people can write and direct their own AI TV series. While the AI creates the shots, the writing and direction remain fully in the hands of the creator. Twizl is moving away from video generation, so these are the only assets available here.
                </p>
            </div>
        </div>
    );
}
