import React from "react";
import "./location.scss";
import Header from "../_Common/header";
import { Container } from "react-bootstrap";
import KarjatPremiumSection from "./Pages/karjat";
import bgImage from "../../assets/img/home-background.png"

export default function Location() {
    return (
        <React.Fragment>
            <Header />
            <div className="page-title" style={{ backgroundImage: `url(${bgImage})` }}>
                <Container>
                    <div className="page-title-content">
                        <h2>AREA REALTY</h2>
                        <ul className="bread-crumb">
                            <li><a href="/home">Home</a></li>
                            <li>Location</li>
                        </ul>
                    </div>
                </Container>
            </div>

            <section className="location-section">
                <div className="home-section-background">
                    <iframe
                        src="https://www.youtube.com/embed/8po7smxXgrU?autoplay=1&mute=1&loop=1&playlist=8po7smxXgrU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0&end=0&version=3&enablejsapi=1&origin=window.location.origin"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                        allowFullScreen={false}
                        title="Hero Background Video"
                    />
                </div>
                <KarjatPremiumSection />
            </section>
        </React.Fragment>
    )
}