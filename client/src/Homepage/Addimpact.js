import React from 'react';

const Addimpact = (props) => {
    return (
        <div className="lgx-footer">
            <div className="lgx-inner-footer green">
                <div className="container">
                    <div className="lgx-footer-area">
                        <div className="lgx-footer-single">
                            <a className="logo addimp" href="">
                                <img src={require('../asset/Images/addimpact.jpg')} alt="Logo" />
                            </a>
                        </div>
                        <span className="buzz-intro">Ad Impact Measurement</span>
                        <div className="clearfix"></div>
                        <div className="lead buzzlead">
                            As pioneer in auditing & monitoring of cinema ads, Interactive Television provides another solution which helps in capturing the incremental reach cinema is adding to a multimedia campaign. This research is conducted alongside CAM with KANTAR IMRB.
                        </div>
                        <div className="row">
                            <div className="col col-md-6 text-left col-sm-12">
                                <h3>The Outcome</h3>
                                <p>It's imperative to measure and understated the impact of ads played on cinema screens In doing this, we are able to capture:</p>
                                <ul className="unlist">
                                    <li>Ad recall at three ley & to know the awareness of the ad played on cinema screens - - lop of mind - Spontaneous - Aided level</li>
                                    <li>Incremental reach by cinema i.e. viewers who saw the ad for the first time only in cinemas.</li>
                                    <li>Current usage behavior or behavior towards the brand.</li>
                                    <li>Future intention to purchase/use post seeing the ad. = Categories Covered Under Ad Impact</li>
                                </ul>
                            </div>
                            <div className="col col-md-6  col-sm-12 adim-outline">
                                <img src={require('../asset/Images/shutterstock_557189953.jpg')} alt="Logo" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Addimpact;