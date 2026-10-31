import './App.css';
import Desktop from '../Desktop/Index.js';
import LogoPop from '../LogoPop/Index.js';
import Home from '../Home/Index.js';
import Show from '../Show/Index.js';
import EpisodePlayer from '../EpisodePlayer/Index.js';
import { preloadArtwork } from '../../data/shows';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const SPLASH_MS = 5000;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Opening the player is an overlay, so keep the scroll position underneath it.
    if (!pathname.includes('/episodes/')) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const theme = useTheme();
  // noSsr: read the real viewport on first render so mobile never flashes the desktop screen.
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const location = useLocation();

  // Only play the splash when someone lands on the home page — shared show links open straight away.
  const [showLogoPop, setShowLogoPop] = useState(() => location.pathname === '/');

  useEffect(() => {
    if (!isMobile) return;
    preloadArtwork();
    if (!showLogoPop) return;
    const timer = setTimeout(() => setShowLogoPop(false), SPLASH_MS);
    return () => clearTimeout(timer);
  }, [isMobile, showLogoPop]);

  if (!isMobile) {
    return (
      <div className="App">
        <Desktop />
      </div>
    );
  }

  return (
    <div className="App">
      {showLogoPop && <LogoPop />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:slug" element={<Show />}>
          <Route path="episodes/:number" element={<EpisodePlayer />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
