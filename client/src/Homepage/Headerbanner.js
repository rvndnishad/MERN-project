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
                                    <h2 style={{ marginBottom: '0px' }}>Welcome to GroupM's</h2>
                                    <h2 className="animated fadeInDownBig" data-sequence="500"><span>Cinema In A Box</span></h2>
                                    <h4 className="animated fadeInUpBig" data-sequence="800">One platform for all cinema monitoring & measuring needs.</h4>
                                    <div style={{ paddingTop: '35px' }}><a href="" className="btn btn-lg btn-danger">More</a></div>
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