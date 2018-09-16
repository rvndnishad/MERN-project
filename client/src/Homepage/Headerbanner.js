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
                                        Welcome to <br />GroupM's <br />
                                        <strong>Cinema In A Box</strong>.
                                    </h1>
                                    <hr className="bottomReveal" />
                                    <p className="bottomReveal">One platform for all cinema monitoring &amp; measuring needs.</p>
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