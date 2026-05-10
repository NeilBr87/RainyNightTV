import './App.css';
import Lander from '../Lander/Index.js';
import Desktop from '../Desktop/Index.js';
import LogoPop from '../LogoPop/Index.js';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from 'react';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [showLogoPop, setShowLogoPop] = useState(true);

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowLogoPop(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div className="App">
      {isMobile ? (
        showLogoPop ? <LogoPop /> : <Lander />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;