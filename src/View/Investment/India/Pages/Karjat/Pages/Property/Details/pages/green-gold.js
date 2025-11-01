import React from "react";
import pageTitleImg from "../../../../../../../../../assets/img/location/karjat/green-gold.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function GreenGold() {
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
                            <span className="tag">Eco-Friendly Riverside Community</span>
                            <h2>Green Gold</h2>
                            <p>Riverside Luxury Villas</p>
                            <div className="location">
                                <i className="ri-map-pin-line"></i>
                                <span>Karjat, Maharashtra</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    )
}