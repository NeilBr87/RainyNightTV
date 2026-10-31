import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';
import './style.css';

export default function Nav({ back = false }) {
    const [solid, setSolid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function goBack() {
        // If they arrived via a shared link there is no in-app history, so go home instead.
        if (window.history.state && window.history.state.idx > 0) navigate(-1);
        else navigate('/');
    }

    return (
        <header className={`nav ${solid ? 'navSolid' : ''}`}>
            {back ? (
                <button className="navBack" onClick={goBack} aria-label="Back">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            ) : (
                <span className="navSpacer" />
            )}
            <Link to="/" className="navLogo" aria-label="Rainy Night TV home">
                <img src={logo} alt="Rainy Night TV" width="44" height="44" />
            </Link>
            <span className="navSpacer" />
        </header>
    );
}
