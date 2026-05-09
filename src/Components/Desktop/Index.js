import logo from '../Lander/logo.png';

export default function Desktop() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '100vh'}}>
            <img src={logo} alt="Rainy Night TV Logo" className="logo" />
            <h2>Sorry, this app is only available on mobile devices for now!</h2>
            <p>"If you're not mobile first you're mobile last"</p>
            <p style={{textDecoration: 'line-through', marginTop: '0px', marginBottom: '0px'}}>- Wayne Gretzky</p>
            <p style={{textDecoration: 'line-through', marginTop: '0px', marginBottom: '0px'}}>- Michael Scott</p>
            <p style={{marginTop: '0px', marginBottom: '0px'}}>- Rainy Night TV</p>
        </div>

    )
}