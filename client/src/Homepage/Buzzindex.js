import React from 'react';

const Buzzindex = (props) => {
    return (
        <section id="buzzindex">
            <div id="lgx-footer" className="lgx-footer">
                <div className="lgx-inner-footer">
                    <div className="container">
                        <div className="lgx-footer-area animatedParent animateOnce">
                            <div className="lgx-footer-single animated fadeIn slow" >
                                <a className="logo" href="">
                                    <img src={require('../asset/Images/buzz_index_Logo.png')} alt="Logo" />
                                </a>
                            </div>
                            <span className="buzz-intro animated fadeInDown" data-sequence="600">A Step Forward To Smart And Strategic Planning</span>
                            <div className="clearfix"></div>
                            <div className="lead buzzlead animated fadeInDown" data-sequence="700">
                                Interactive Television introduced Buzz Index in 2016. Buzz Index is a revolutionary buzz measuring tool for helping advertisers make informed decisions for cinema advertising.
                            </div>
                            <div className="row text-left">
                                <div className="col col-sm-6 animated fadeInLeft" >
                                    <h3>The Aim</h3>
                                    <p>Interactive Televisions wants to make cinema advertising data driven rather than based on subjectivities. The agency airs to broaden the number of movies which can attract advertisers.</p>
                                    <h3>The Mechanics</h3>
                                    <p>It encapsulates the buzz around upcoming movies on a weekly basis by creating a score. The score is a combination of industry experience and analyzing social media interactions about the movies from Facebook, Twitter etc.</p>
                                    <h3>Key Features</h3>
                                    <ul className="unlist">
                                        <li>Convince advertisers to advertise on movies that are otherwise overlooked.</li>
                                        <li>In partnership with Group M, hair data at the center of al strategies.</li>
                                        <li>Combining all the touch points shaping a film and arriving at a measurable score in comparison to its competitor films.</li>
                                    </ul>
                                </div>
                                <div className="col col-sm-6 animated fadeInRight">
                                    <h3>How to Calculate Buzz Index Score</h3>
                                    <p>Buzz for an upcoming movie is coveted from 5 weeks prior to its release. last week before the movies for plan finalization Higher the score, higher is the Likelihood of the movie to have a good opening. All scores are benchmarked to the gold standard of 100 cr movies from the previous year.</p>
                                    <figure>
                                        <img src={require('../asset/Images/buzzindex.jpg')} alt="Logo" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default Buzzindex;