import React from 'react';

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
                                    <img src={require('../asset/Images/all-logo.png')} />
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