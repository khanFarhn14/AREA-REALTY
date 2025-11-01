import React from "react";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/img/home-background.png"
import locationData from "../../json/Location/location.json";
import Slider from "react-slick";
import "./location.scss";

export default function Location() {
    const locationSlide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        autoplay: false,
        draggable: true,
        centerPadding: "0px",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };
    return (
        <React.Fragment>
            {/* LOCATON SECTION */}
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
                <Container>
                    <div className="page-title-content">
                        <h2>AREA REALTY</h2>
                        <ul className="bread-crumb">
                            <li><a href="/home">Home</a></li>
                            <li>Location</li>
                        </ul>
                    </div>
                </Container>
                <div>
                    <div>
                        <Slider {...locationSlide}>
                            {locationData.map((item, index) => (
                                <div className="location-area-view" key={index}>
                                    <div className="light light-blue"></div>
                                    <div className="light light-purple"></div>
                                    <div className="content-container">
                                        <h1 className="title">{item.name}</h1>
                                        <p className="subtitle">{item.description}</p>
                                        <div className="info-cards">
                                            {item.info.map((info, i) => (
                                                <div key={i} className="info-card">
                                                    <h3>{info.title}</h3>
                                                    <p>{info.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="features">
                                            {item.features.map((feature, i) => (
                                                <span className="feature" key={i}>{feature}</span>
                                            ))}
                                        </div>

                                        <button className="explore-btn">Explore More</button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}