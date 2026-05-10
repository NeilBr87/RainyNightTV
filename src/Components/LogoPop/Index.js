import logo from '../Lander/logo.png';
import './style.css';

export default function LogoPop() {
  return (
    <div className="logoPopContainer">
      <img
        src={logo}
        alt="Rainy Night TV Logo"
        className="logoPopImage"
      />
    </div>
  );
}