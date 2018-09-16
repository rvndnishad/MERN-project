import React from 'react';

const Camsection = (props) => {
    return (
        <section>
            <div id="lgx-about" className="lgx-about lgx-about3">
                <div className="shep-right">
                    <img src={require('../asset/Images/shep-right.png')} alt="" />
                </div>
                <div className="shep-left">
                    <img src={require('../asset/Images/shep-left.png')} alt="" />
                </div>
                <div className="lgx-inner">
                    <div className="container">
                        <div className="clearfix">
                            <div className="lgx-heading text-center">
                                <img src={require('../asset/Images/Cam_Logo.jpg')} className="camlogo" />
                                <div className="buzz-intro">The Cinema Audit and Monitoring System</div>
                                <div className="lead buzzlead">
                                    CAM Cinema Audit and Monitoring System or CAM is an interactive proprietary tool for cinema monitoring and a game changer for brands investing in cinema advertising in India.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buzz-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-5 col-sm-12 text-center">
                                    <div className="camsecPic">
                                        <img src={require('../asset/Images/campic.jpg')} />
                                        <h3 style={{ marginTop: '30px' }}>Chains Covered</h3>
                                        <img src={require('../asset/Images/chain.jpg')} />
                                    </div>
                                </div>
                                <div className="camsec col col-md-7 col-sm-12">
                                    <div className="lgx-about-content-area">
                                        <div className="lgx-about-content">
                                            <h3>Research Objective</h3>
                                            <p>To understand the presence of various categories and brands in the advertisements aired ii theatres and measure and recall among the cinema viewers.</p>
                                            <h3>The Process</h3>
                                            <p>The monitoring is carried out in collaboration with Kantar IMRB across top 8 metros(Ahmedabad, Bengaluru, Chennai, Delhi NCR, Hyderabad, Kolkata, Mumbai & Pune) covering 200 premium multiplex screens every month. The report captures all the brand advertisements screened before the movie and during interval.</p>
                                            <h3>Key Information Areas</h3>
                                            <ul className="unlist">
                                                <li>Total brands present in cinemas</li>
                                                <li>New brand entrants</li>
                                                <li>National/local brands in cinema</li>
                                                <li>Total spots advertised</li>
                                                <li>Brand recall</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-12 col-md-6" style={{ paddingTop: '50px' }}>
                                <h3>Assistance in Result - Oriented Media Planning and Buying</h3>
                                <p>The results of the monthly audit help out existing and potential clients recognize the growth opportunities for their brands while choosing as an advertising medium</p>
                            </div>
                            <div className="col col-sm-12 col-md-6">
                                <div className="text-center" style={{ marginTop: '-90px' }}>
                                    <h3>Zones Covered</h3>
                                    <img className="mapimage" src={require('../asset/Images/indiamap.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Camsection;