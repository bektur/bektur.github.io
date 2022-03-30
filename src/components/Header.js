import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo">
                    <a className="link" href="/">Crypto Exchange</a>
                </div>
                <nav className="nav">
                    <a className="link" href="/about"><span className="nav-text">About</span></a>
                    <a className="link" href="/prices"><span className="nav-text">Prices</span></a>
                    <a className="link" href="/learn"><span className="nav-text">Learn</span></a>
                    <a className="link" href="/developers"><span className="nav-text">Developers</span></a>
                </nav>
                <div className="signup-box">
                    <button type="primary" className="sign-btn">Sign in</button>
                    <button type="primary" className="sign-btn">Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Header;