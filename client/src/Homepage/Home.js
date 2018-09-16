import React, { Component } from "react";
import { connect } from "react-redux";
import './Animate.min.css';
import './Home.css';
import Topnavigation from './Topnavigation';
import Banner from './Headerbanner';
import Camsection from './Camsection';
import Buzzindex from './Buzzindex';
import Addimpact from './Addimpact';
import Bingo from './Bingo';
import $ from 'jquery';
import {
    jarallax,
    jarallaxElement,
    jarallaxVideo
} from 'jarallax';


class Home extends Component {
    componentDidMount() {
        jarallaxVideo();
        jarallaxElement();
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2
        });
        var doAnimations = function () {

            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');

            // Unbind scroll handler if we have no animatables
            if ($animatables.length == 0) {
                $(window).off('scroll', doAnimations);
            }

            // Check all animatables and animate them if necessary
            $animatables.each(function (i) {
                var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');
                }
            });

        };

        // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');
    }
    render() {
        return (
            <div className="clearfix">
                <Topnavigation />
                <Banner></Banner>
                <Buzzindex></Buzzindex>
                <Camsection></Camsection>
                <Addimpact></Addimpact>
                <Bingo></Bingo>
                <div className="footer-copyright text-center">
                    &copy; 2018 CINEMA IN A BOX.
                </div>
            </div>
        )
    }
}


export default Home;