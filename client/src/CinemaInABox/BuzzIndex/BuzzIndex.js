import React, {
    Component
} from 'react';
import './Buzzindex.css';
/* import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'; */


class BuzzIndex extends Component {
    render() {
        const listitem = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
        return (
            <div className="container-excelupload2" >
                <h3 className="page-title">
                    <img src={require('../../asset/Images/buzz_index_Logo.png')} alt="Movie thumb" style={{ maxWidth: '150px' }} /> <small>reports &amp; statistics</small>
                </h3>
                <div className="video-list">
                    <div className="row row-eq-height">
                        {listitem.map((item, index) =>
                            <div className="col col-md-4 col-sm-12" key={index}>
                                <div className="video-item">
                                    <div className="video-thumb">
                                        <img src={require('../../asset/Images/Shamitabh.jpg')} alt="Movie thumb" style={{ maxWidth: '100%' }} />
                                    </div>
                                    <div className="video-details">
                                        <h3 className="video-title"><a href="#">Wonder Women</a></h3>
                                        <div className="video-attributes">
                                            <p className="release-date"><label>Date of Release:</label> July 4, 2017</p>
                                            <p className="cast"><label>Movie Buzz Index:</label> 278</p>
                                            <p className="duration"><label>One Week Prior:</label> 300</p>
                                            <p className="genre"><label>Two Weeks Prior:</label> 258</p>
                                            <p className="country"><label>First Day Collection: </label> 20</p>
                                            <p className="language"><label>Lifetime Collection: </label> 139</p>
                                            <p className="btnsection"><a href="/aa" className="btn-watch-now">Vew Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }

                        <div className="col col-md-4 col-sm-12">
                            <div className="video-item">
                                <div className="video-thumb">
                                    <img src={require('../../asset/Images/Shamitabh.jpg')} alt="Movie thumb" style={{ maxWidth: '100%' }} />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title"><a href="#">Wonder Women</a></h3>
                                    <div className="video-attributes">
                                        <p className="release-date"><label>Date of Release:</label> July 4, 2017</p>
                                        <p className="cast"><label>Movie Buzz Index:</label> 278</p>
                                        <p className="duration"><label>One Week Prior:</label> 300</p>
                                        <p className="genre"><label>Two Weeks Prior:</label> 258</p>
                                        <p className="country"><label>First Day Collection: </label> 20</p>
                                        <p className="language"><label>Lifetime Collection: </label> 139</p>
                                        <p className="btnsection"><a href="/aa" className="btn-watch-now">Vew Details</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-sm-12">
                            <div className="video-item">
                                <div className="video-thumb">
                                    <img src={require('../../asset/Images/Shamitabh.jpg')} alt="Movie thumb" style={{ maxWidth: '100%' }} />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title"><a href="#">Wonder Women</a></h3>
                                    <div className="video-attributes">
                                        <p className="release-date"><label>Date of Release:</label> July 4, 2017</p>
                                        <p className="cast"><label>Movie Buzz Index:</label> 278</p>
                                        <p className="duration"><label>One Week Prior:</label> 300</p>
                                        <p className="genre"><label>Two Weeks Prior:</label> 258</p>
                                        <p className="country"><label>First Day Collection: </label> 20</p>
                                        <p className="language"><label>Lifetime Collection: </label> 139</p>
                                        <p className="btnsection"><a href="/aa" className="btn-watch-now">Vew Details</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-sm-12">
                            <div className="video-item">
                                <div className="video-thumb">
                                    <img src={require('../../asset/Images/Shamitabh.jpg')} alt="Movie thumb" style={{ maxWidth: '100%' }} />
                                </div>
                                <div className="video-details">
                                    <h3 className="video-title"><a href="#">Wonder Women</a></h3>
                                    <div className="video-attributes">
                                        <p className="release-date"><label>Date of Release:</label> July 4, 2017</p>
                                        <p className="cast"><label>Movie Buzz Index:</label> 278</p>
                                        <p className="duration"><label>One Week Prior:</label> 300</p>
                                        <p className="genre"><label>Two Weeks Prior:</label> 258</p>
                                        <p className="country"><label>First Day Collection: </label> 20</p>
                                        <p className="language"><label>Lifetime Collection: </label> 139</p>
                                        <p className="btnsection"><a href="/aa" className="btn-watch-now">Vew Details</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuzzIndex;