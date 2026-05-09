import './App.css';
import Lander from '../Lander/Index.js';
import Desktop from '../Desktop/Index.js';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="App">
      {isMobile ? <Lander /> : <Desktop />}
    </div>
  );
}

export default App;
