import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

const Topnavigation = (props) => {
    let loginbtn = true;
    if (localStorage.jwtToken) {
        loginbtn = false;
    } else {
        loginbtn = true;
    }

    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarcst">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index-one.html">
                        <img className="logo-white" src={require('../asset/Images/Logo_White.png')} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse left-content-end" id="navbarSupportedContent">
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
                    </div>
                    {
                        loginbtn === true ? <Link to="/login" className="btn btn-danger login-btn justify-content-end">Login</Link> :
                            <Link to="#" onClick={props.click} className="btn btn-danger login-btn justify-content-end">Logout</Link>
                    }

                </div>
            </nav>
        </header>
    )
}

export default Topnavigation;