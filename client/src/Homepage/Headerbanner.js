import React from 'react';

const Banner = (props) => {
    return (
        <section className="hero-area jarallax over-layer-black">
            <div className="hero-content">
                <div className="hero-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-col animatedParent animateOnce">
                                    <h2 className="animated fadeInDownBig" data-sequence="500">Cinema Audit <span>and Monitoring</span></h2>
                                    <h4 className="animated fadeInUpBig" data-sequence="800">Assistance in Result - Oriented Media Planning and Buying</h4>
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