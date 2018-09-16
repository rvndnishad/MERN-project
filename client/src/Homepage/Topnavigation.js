import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

const Topnavigation = (props) => {
    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarcst">
                <div className="container">
                    <a className="navbar-brand" href="index-one.html">
                        <img className="logo-white" src="images/logo.png" alt="" />
                        <img className="logo-black" src="images/logo-black.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link page-scroll active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/buzz-index" className="nav-link page-scroll">Buzz Index</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/cam" className="nav-link page-scroll">Cam</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/ad-impact" className="nav-link page-scroll">Add Impact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/bingo" className="nav-link page-scroll">bingo</Link>
                            </li>
                        </ul>
                        <Link to="/login" className="btn btn-danger login-btn">Login</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Topnavigation;