import React from "react";
import pageTitleImg from "../../../../../../../../../assets/img/location/karjat/mountain-retreat.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MountainRetreat() {
    return (
        <React.Fragment>
            <div className="detils-page-title">
                <Link className="back-btn" to="/india/explore/karjat">
                    <i className="ri-arrow-left-line"></i>
                    <span>Back TO Karjat</span>
                </Link>
                <Image className="detils-page-title-img" src={pageTitleImg} alt="bgImage" />
                <div className="banner-overlay">
                    <Container>
                        <div className="banner-overlay-content">
                            <span className="tag">Luxury Villa Community</span>
                            <h2>Mountain Retreat</h2>
                            <p>A Luxury Modern Gated Community Amidst Nature</p>
                            <div className="location">
                                <i className="ri-map-pin-line"></i>
                                <span>Vadap, Karjat — Just 15 mins from Karjat Station</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    )
}