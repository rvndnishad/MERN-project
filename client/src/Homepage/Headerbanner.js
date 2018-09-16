import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

const Banner = (props) => {
    return (
        <section className="hero-area jarallax over-layer-black">
            {props.children}
            <div className="hero-content">
                <div className="hero-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-col animatedParent animateOnce">
                                    <h1 className="scaleReveal">
                                        Welcome to <br />
                                        <strong>Cinema In A Box</strong>.
                                    </h1>
                                    <hr className="bottomReveal" />
                                    <p className="bottomReveal">Powered By <img className="logo-inte" src={require('../asset/Images/interactive-logo.png')} alt="" /></p>
                                    <div className="sol-logo">
                                        <Link to="/dashboard/buzz-index" className="lglink"><img src={require('../asset/Images/buzzlogo.png')} /></Link>
                                        <Link to="/dashboard/cam" className="lglink"><img src={require('../asset/Images/camlogo.png')} /></Link>
                                        <Link to="/dashboard/ad-impact" className="lglink"><img src={require('../asset/Images/addimlogo.png')} /></Link>
                                        <Link to="/dashboard/bingo" className="lglink"><img src={require('../asset/Images/bingologos.png')} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;