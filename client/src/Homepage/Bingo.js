import React from 'react';

const Bingo = (props) => {
    return (
        <section className="organizer-area jarallax over-layer-black" id="organizer">
            <img className="jarallax-img" src={require('../asset/Images/2.jpg')} alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="organizer-col text-center">
                            <img src={require('../asset/Images/bingologo.png')} />
                            <h2 className="lead">Mix media modelling for media optimisation</h2>
                            <div className="row">
                                <div className="col col-md-3 col-sm-6">
                                    <div className="bingo-resize">
                                        <h3>Reach</h3>
                                        <p>Provides Incremental reach at least cost</p>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-sm-6">
                                    <div className="bingo-resize">
                                        <h3>Efficiency</h3>
                                        <p>Cost per incremental roach curves for individual media</p>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-sm-6">
                                    <div className="bingo-resize">
                                        <h3>Eliminates Duplication</h3>
                                        <p>to generate combined cover cost</p>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-sm-6">
                                    <div className="bingo-resize">
                                        <h3>Budget Allocation</h3>
                                        <p>optimization algorithm for media mix</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bingo;