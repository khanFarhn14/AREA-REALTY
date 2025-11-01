import React from "react";
import pageTitleImg from "../../../../../../../../../assets/img/location/karjat/summer-hills.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SummerHills() {
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
                            <span className="tag">Californian Hillside Estate</span>
                            <h2>Summer Hills</h2>
                            <p>A Californian Hillside Inspired Luxury Villa Estate</p>
                            <div className="location">
                                <i className="ri-map-pin-line"></i>
                                <span>Near Bhimashankar Hills, Karjat — easily accessible from Mumbai & Pune</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    )
}