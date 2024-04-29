import React, { useState } from 'react';
import './style.css';
import Content from '../Content';

export default function Login() {
    const [tab, setTab] = useState('login');
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [user, setUser] = useState(null); // State to store user data

    function tabLogin() {
        setTab('login');
    }

    function tabSignup() {
        setTab('signup');
    }

    // Function to handle login form submission
    function handleLoginSubmit() {
        fetch('https://x8ki-letl-twmt.n7.xano.io/api:hi3EtTgO/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Handle successful login response here
                setIsLoggedin(true);
                setUser(data.user); // Save user data
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    }

    // Function to handle signup form submission
    function handleSignupSubmit() {
        fetch('https://x8ki-letl-twmt.n7.xano.io/api:hi3EtTgO/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Handle successful signup response here
                setIsSignedUp(true);
                setUser(data.user); // Save user data
            })
            .catch(error => {
                console.error('Signup failed:', error);
            });
    }

    return (
        <div>
            {!isLoggedin && !isSignedUp && (
                <div>
                    <div id="tabRow">
                        <div id="tabSignup" onClick={tabSignup}>
                            <h3>Signup</h3>
                        </div>
                        <div id="tabLogin" onClick={tabLogin}>
                            <h3>Login</h3>
                        </div>
                    </div>

                    {tab === 'login' && (
                        <div className="column">
                            <h1>Login</h1>
                            <input type="text" placeholder="Email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                            <input type="password" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                            <button onClick={handleLoginSubmit}>Login</button>
                        </div>
                    )}

                    {tab === 'signup' && (
                        <div className="column">
                            <h1>Signup</h1>
                            <input type="text" placeholder="Name" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
                            <input type="text" placeholder="Email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
                            <input type="password" placeholder="Password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
                            <button onClick={handleSignupSubmit}>Signup</button>
                        </div>
                    )}
                </div>
            )}

            {(isLoggedin || isSignedUp) && (
                <div>
                    <Content user={user} />
                    <p>dfdfd</p>
                </div>
            )}
        </div>
    );
}
