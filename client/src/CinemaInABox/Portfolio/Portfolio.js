import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    Jumbotron,
    Button,
    Container,
    Main,
    Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import $ from 'jquery';

class Portfolio extends Component {
    constructor() {
        super();

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onClick(e) {
        e.preventDefault();
        let tabClicked = this
            .href
            .split("/")[1];
        //console.log(this.href.split("/")[1]);
        if (tabClicked == 'login') {
            console.log("login")
            window.location.href = '/login';
        } else {
            $('html,body').animate({
                scrollTop: $("#" + tabClicked)
                    .offset()
                    .top
            }, 'slow');
        }

    }
    render() {

        
        return (
            <div className="portfolio">
                <Navbar
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    expand="md"
                    id="top">
                    <NavbarBrand className="nav-bar-title" href="/"><h2>Cinema in a box</h2></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto nav-bar-menu" navbar>
                            <NavItem>
                                <NavLink href="/buzzIndex" onClick={this.onClick}>Buzz Index</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cam" onClick={this.onClick}>Cam</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/adImpact" onClick={this.onClick}>Ad Impact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/bingo" onClick={this.onClick}>Bingo</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login" to="/login" onClick={this.onClick}>Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="portfolio-body ">
                <div className="welcome-screen">
                    <div className="welcome-text typewriter">
                        <h1>Welcome to Cinema in a box!</h1>
                    </div>
                </div>
                    <main role="main" className="main main1">
                            <div className="col-sm-10 mx-auto">
                                <Container fluid className="home-container-1" id="buzzIndex">
                                    <div className="buzz-image"></div>
                                    <div className="buzz-index"></div>
                                    <p className="lead">A Step Forward To Smart And Strategic Planning
                                    </p>
                                    <hr className="my-2"/>
                                    <div className="portfolio-info">
                                        <p>It uses utility classes for typography and spacing to space content out
                                            within the larger container.</p>
                                        <b>BUZZOJNDEX</b>
                                        <p>
                                            Interactive Television introduced Buzz Index in 2016. Buzz Index is a
                                            revolutionary buzz measuring tool for helping advertisers make informed
                                            decisions for cinema advertising
                                        </p>
                                        <b>The Aim
                                        </b>
                                        <p>Interactive Televisions wants to make cinema advertising data driven rather
                                            than based on subjectivities. The agency airs to broaden the number of movies
                                            which can attract advertisers.</p>
                                        <b>The Mechanics</b>
                                        <p>It encapsulates the buzz around upcoming movies on a weekly basis by creating
                                            a score. The score is a combination of industry experience and analyzing social
                                            media interactions about the movies from Facebook, Twitter etc.</p>
                                        <b>Key Features</b>
                                        <p>Convince advertisers to advertise on movies that are otherwise overlooked.</p>
                                        <p>In partnership with Group M, hair data at the center of al strategies.
                                        </p>
                                        <p>Combining all the touch points shaping a film and arriving at a measurable
                                            score in comparison to its competitor films.
                                        </p>
                                        <b>How to Calculate Buzz Index Score
                                        </b>
                                        <p>Buzz for an upcoming movie is coveted from 5 weeks prior to its release. last
                                            week before the movies for plan finalization Higher the score, higher is the
                                            Likelihood of the movie to have a good opening. All scores are benchmarked to
                                            the gold standard of 100 cr movies from the previous year.
                                        </p>
                                    </div>

                                    <p>
                                        <NavLink className="topButton" href="/top" onClick={this.onClick}>
                                            <i className="fa fa-chevron-up"></i>
                                            Top</NavLink>
                                    </p>
                                </Container>
                            </div>
                    </main>

                    <main role="main" className="main">
                        <div>
                            <div className="col-sm-10 mx-auto">
                                <Container fluid className="home-container-2" id="cam">
                                    <div className="cam-image"></div>
                                    <p className="lead">The Cinema Audit and Monitoring System</p>
                                    <p>CAM Cinema Audit and Monitoring System or CAM is an interactive proprietary
                                        tool for cinema monitoring and a game changer for brands investing in cinema
                                        advertising in India.</p>
                                    <hr className="my-2"/>
                                    <div className="portfolio-info">
                                        <b>Research Objective</b>
                                        <p>To understand the presence of various categories and brands in the
                                            advertisements aired ii theatres and measure and recall among the cinema
                                            viewers.</p>
                                        <b>The Process</b>
                                        <p>The monitoring is carried out in collaboration with Kantar IMRB across top 8
                                            metros(Ahmedabad, Bengaluru, Chennai, Delhi NCR, Hyderabad, Kolkata, Mumbai &
                                            Pune) covering 200 premium multiplex screens every month. The report captures
                                            all the brand advertisements screened before the movie and during interval.</p>
                                        <p>203: - - every month. The report
                                        </p>
                                        <b>Key Information Areas</b>
                                        <p>
                                            Total brands present in cinemas New brand entrants National/local brands in
                                            cinema Total spots advertised Brand recall
                                        </p>
                                        <b>Assistance in Result - Oriented Media Planning and Buying</b>
                                        <p>The results of the monthly audit help out existing and potential clients
                                            recognize the growth opportunities for their brands while choosing as an
                                            advertising medium</p>
                                    </div>

                                    <p>
                                        <NavLink className="topButton" href="/top" onClick={this.onClick}>
                                            <i className="fa fa-chevron-up"></i>
                                            Top</NavLink>
                                    </p>
                                </Container>
                            </div>
                        </div>
                    </main>

                    <main role="main" className="main main3">
                        <div>
                            <div className="col-sm-10 mx-auto">
                                <Container fluid className="home-container-3" id="adImpact">
                                    <h1 className="display-3">Ad Impact</h1>
                                    <p className="lead">The Impacts Of Ad Placement
                                    </p>
                                    <hr className="my-2"/>
                                    <div className="portfolio-info">
                                        <b>Ad Impact Measurement </b>
                                        <p>As pioneer in auditing & monitoring of cinema ads, Interactive Television provides another solution which helps in capturing the incremental reach cinema is adding to a multimedia campaign. </p>
                                        <p>This research is conducted alongside CAM with KANTAR IMRB.  </p>
                                        <b>The Outcome </b>
                                        <p>It’s imperative to measure and understated the impact of ads played on cinema screens In doing this, we are able to capture:</p>
                                        <ul>
                                            <li>Ad recall at three ley& to know the awareness of the ad played on cinema screens - - lop of mind - Spontaneous - Aided level</li>
                                            <li>Incremental reach by cinema i.e. viewers who saw the ad for the first time only in cinemas.</li>
                                            <li>Current usage behavior or behavior towards the brand.</li>
                                            <li>Future intention to purchase/use post seeing the ad. = 
                                            Categories Covered Under Ad Impact</li>
                                        </ul>
                                    </div>
                                    <p>
                                        <NavLink className="topButton" href="/top" onClick={this.onClick}>
                                            <i className="fa fa-chevron-up"></i>
                                            Top</NavLink>
                                    </p>
                                </Container>
                            </div>
                        </div>
                    </main>

                    
                     <main role="main" className="main main4">
                            <div className="col-sm-10 mx-auto">
                                <Container fluid className="home-container-4" id="bingo">
                                <h1 className="display-3">Bingo</h1>
                                <Row>
                                <Col sm="6">
                                    <Card>
                                        <CardBody>
                                        <CardText>Reach Provides Incremental reach at least cost</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card>
                                        <CardBody>
                                        <CardText>Mix media modelling for media optimization</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                    <Col sm="6">
                                        <Card>
                                            <CardBody>
                                            <CardText>Efficiency Cost per incremental roach curves for individual media</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card>
                                            <CardBody>
                                            <CardText>Eliminates Duplication to generate combined cover cost</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card>
                                            <CardBody>
                                            <CardText>Budget Allocation optimization algorithm for media mix</CardText>
                                            </CardBody>
                                        </Card> 
                                    </Col>
                                </Row>
                                <p>                                                             </p>
                                    <p> </p>  
                                    <p>                                    </p>
                                    <p>                                           </p>
                                    <p>                                            </p>
                                    <p>
                                        <NavLink className="topButton" href="/top" onClick={this.onClick}>
                                            <i className="fa fa-chevron-up"></i>
                                            Top</NavLink>
                                    </p>
                                </Container>
                            </div>
                    </main>
                    <main role="main" className="main main5 footer">
                    <div className="col-sm-10 mx-auto">
                    <Container fluid id="footer">
                            <h3>
                            this is footer
                            </h3>
                    </Container>
                    </div>
                    </main>
                </div>
            </div>

        );
    }
}

export default Portfolio;