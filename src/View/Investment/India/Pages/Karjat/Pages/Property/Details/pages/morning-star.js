import React, { useState } from "react";
import pageTitleImg from "../../../../../../../../../assets/img/location/karjat/morning-star.png";
import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gallery1 from "../../../../../../../../../assets/img/location/details/gallery1.png";
import gallery2 from "../../../../../../../../../assets/img/location/details/gallery2.png";
import Slider from "react-slick";

export default function MorningStar() {
    // HIGHLIGHT
    const highlights = [
        { label: "Total Villas", value: "24" },
        { label: "Plot Sizes", value: "3099 - 7101 SQ.FT." },
        { label: "Configurations", value: "4 & 5 BHK" },
        { label: "Price Range", value: "₹2.25 - 2.50 CR" },
        { label: "Land Type", value: "NA LAND" },
        { label: "Status", value: "AVAILABLE", isAvailable: true },
    ];

    // FEATURES
    const features = [
        {
            title: "RERA Registered",
            description: "Maharashtra RERA approved project",
        },
        {
            title: "NA Land",
            description: "Collector-approved non-agricultural land",
        },
        {
            title: "Clear Title",
            description: "Verified legal documentation",
        },
        {
            title: "Green Certified",
            description: "Sustainable development practices",
        },
    ];

    // VILLA SPECIFICATION
    const villaSpecifications = [
        {
            title: "5 BHK Luxury Villa",
            beds: 5,
            baths: 5,
            price: "₹2.50 Cr",
            pricePerSqFt: "₹7,407/sq.ft.",
            reraCarpet: "2249 sq.ft.",
            usableArea: "3232 sq.ft.",
            builtUp: "3375 sq.ft.",
            plotSize: "7101 sq.ft.",
            features: [
                "Corner Plot Options",
                "Private Garden",
                "Terrace with Mountain View",
                "Premium Finishes"
            ],
            extraCharges: "5% Stamp Duty + 5% GST + 1% Registration",
            status: "Limited Units",
            statusColor: "orange"
        },
        {
            title: "4 BHK Luxury Villa - TYPE A",
            beds: 4,
            baths: 4,
            price: "₹2.25 Cr",
            pricePerSqFt: "₹8,553/sq.ft.",
            reraCarpet: "2023 sq.ft.",
            usableArea: "2477 sq.ft.",
            builtUp: "2631 sq.ft.",
            plotSize: "4224 sq.ft.",
            features: [
                "Optimized Layout",
                "Private Courtyard",
                "Dual Balconies",
                "Modern Fixtures"
            ],
            extraCharges: "5% Stamp Duty + 5% GST + 1% Registration",
            status: "Available",
            statusColor: "green"
        },
        {
            title: "4 BHK Luxury Villa - TYPE B",
            beds: 4,
            baths: 4,
            price: "₹2.25 Cr",
            pricePerSqFt: "₹9,282/sq.ft.",
            reraCarpet: "1975 sq.ft.",
            usableArea: "2524 sq.ft.",
            builtUp: "2425 sq.ft.",
            plotSize: "3099 sq.ft.",
            features: [
                "Compact Luxury",
                "Easy Maintenance",
                "Efficient Design",
                "Premium Interiors"
            ],
            extraCharges: "5% Stamp Duty + 5% GST + 1% Registration",
            status: "Available",
            statusColor: "green"
        }
    ];

    const mainImages = [
        gallery1,
        gallery2
    ];

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    // NEXT ARROW BUTTON FUNCTION
    const NextArrow = ({ onClick }) => (
        <Button variant="light" className="custom-arrow next" onClick={onClick}>
            <i className="ri-arrow-right-s-line"></i>
        </Button>
    );

    // PREV ARROW BUTTON FUNCTION
    const PrevArrow = ({ onClick }) => (
        <Button variant="light" className="custom-arrow prev" onClick={onClick}>
            <i className="ri-arrow-left-s-line"></i>
        </Button>
    );

    const settingsMain = {
        asNavFor: nav2,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        fade: true,
    };
    const settingsThumbs = {
        asNavFor: nav1,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        arrows: false,
    };

    return (
        <React.Fragment>
            <div className="detils-page-title">
                <Link className="back-btn" to="/india/explore/karjat">
                    <i className="ri-arrow-left-line align-middle"></i>
                    <span className="align-middle">Back TO Karjat</span>
                </Link>
                <Image className="detils-page-title-img" src={pageTitleImg} alt="bgImage" />
                <div className="banner-overlay">
                    <Container>
                        <div className="banner-overlay-content">
                            <span className="tag">Luxury Villa Community</span>
                            <h2>Morning Star</h2>
                            <p>A Luxury Villa Community in the Hills</p>
                            <div className="location">
                                <i className="ri-map-pin-line"></i>
                                <span>Karjat, Maharashtra</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* DETAILS PAGE CONTENT */}
            <div className="detail-page-content">
                <Container>
                    {/* BUTTON INFO */}
                    <div className="buttin-info">
                        <ButtonGroup className="custom-btn-group">
                            <Button variant="primary" className="schedule-btn">
                                <i className="ri-phone-line"></i>
                                Schedule Visit
                            </Button>

                            <Button variant="outline-light" className="download-btn">
                                <i className="ri-arrow-down-line"></i>
                                Download Brochure
                            </Button>

                            <Button variant="outline-light" className="share-btn">
                                <i className="ri-share-line"></i>
                                Share Property
                            </Button>
                        </ButtonGroup>
                    </div>

                    {/* Highlights */}
                    <Card className="property-highlights">
                        <Card.Body>
                            <h6 className="title">Highlights</h6>
                            {highlights.map((item, idx) => (
                                <Row key={idx} className={`highlight-row ${idx !== highlights.length - 1 ? "bordered" : ""}`}>
                                    <Col xs={6}>
                                        <p className={`value ${item.isAvailable ? "available" : ""}`}>{item.value}</p>
                                    </Col>
                                    <Col xs={6} className="text-end">
                                        <p className="label">{item.label}</p>
                                    </Col>
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>

                    <hr className="mt-5 mb-5" style={{ borderColor: "#959595" }} />

                    {/* PROJECT FEATURES */}
                    <div className="project-features">
                        <Row className="g-3">
                            {features.map((item, idx) => (
                                <Col key={idx} xs={12} md={6} lg={3}>
                                    <Card className="feature-card">
                                        <Card.Body>
                                            <div className="d-flex gap-2">
                                                <div>
                                                    <i className="ri-shield-line"></i>
                                                </div>
                                                <div>
                                                    <h6 className="feature-title">{item.title}</h6>
                                                    <p className="feature-desc">{item.description}</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* VILLA SPECS */}
                    <div>
                        <div className="villa-specs-heading">
                            <h2>Villa Specifications</h2>
                            <p>Choose from our carefully designed villa configurations</p>
                        </div>
                        <div className="villa-specs-container">
                            {villaSpecifications.map((villa, index) => (
                                <div className="villa-card" key={index}>
                                    <div className="villa-header">
                                        <div>
                                            <h3>{villa.title}</h3>
                                            <p className="villa-sub">
                                                🛏 {villa.beds} Beds &nbsp; &nbsp; 🛁 {villa.baths} Baths
                                            </p>
                                        </div>
                                        <div className="villa-price">
                                            <h4>{villa.price}</h4>
                                            <p>{villa.pricePerSqFt}</p>
                                        </div>
                                    </div>

                                    <div className="villa-details-row">
                                        <div className="detail-box">
                                            <p className="label">RERA CARPET</p>
                                            <p className="value">{villa.reraCarpet}</p>
                                        </div>
                                        <div className="detail-box">
                                            <p className="label">USABLE AREA</p>
                                            <p className="value">{villa.usableArea}</p>
                                        </div>
                                        <div className="detail-box">
                                            <p className="label">BUILT-UP</p>
                                            <p className="value">{villa.builtUp}</p>
                                        </div>
                                        <div className="detail-box">
                                            <p className="label">PLOT SIZE</p>
                                            <p className="value">{villa.plotSize}</p>
                                        </div>
                                    </div>

                                    <div className="villa-features">
                                        {villa.features.map((feature, i) => (
                                            <span key={i} className="feature-pill">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="villa-extra">{villa.extraCharges}</p>

                                    <div className={`villa-status ${villa.statusColor}`}>
                                        {villa.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GALLERY WRAPPER */}
                    <div className="gallery-wrapper">
                        <Row>
                            <Col>
                                <h2 className="gallery-title">
                                    <span className="divider"></span> Gallery
                                </h2>
                                <p className="gallery-subtitle">
                                    Experience the beauty through our lens
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="slider-wrapper">
                                    <Slider
                                        {...settingsMain}
                                        asNavFor={nav2}
                                        ref={(slider1) => setNav1(slider1)}
                                        className="main-slider"
                                    >
                                        {mainImages.map((img, idx) => (
                                            <div key={idx}>
                                                <Image src={img} alt={`Gallery ${idx + 1}`} />
                                            </div>
                                        ))}
                                    </Slider>

                                    <div className="thumb-slider">
                                        <Slider
                                            {...settingsThumbs}
                                            asNavFor={nav1}
                                            ref={(slider2) => setNav2(slider2)}
                                        >
                                            {mainImages.map((img, idx) => (
                                                <div key={idx} className="thumb-item">
                                                    <Image src={img} alt={`Thumbnail ${idx + 1}`} />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* EXPERIENCE MORNING STAR */}
                    <div className="experience-morning-star">
                        <Row>
                            <Col>
                                <h2 className="section-title">
                                    <span className="divider"></span>
                                    Experience Morning Star
                                </h2>
                                <p className="section-subtitle">
                                    Book a personalized site visit and discover the ultimate luxury
                                    villa living experience in the hills
                                </p>

                                <div className="button-group">
                                    <Button variant="primary" className="btn-call">
                                        <i className="ri-phone-line"></i>
                                        <span>Call Expert Now</span>
                                    </Button>
                                    <Button variant="outline-light" className="btn-visit">
                                        <i className="ri-calendar-line"></i>
                                        <span>Book Site Visit</span>
                                    </Button>
                                </div>

                                <div className="features">
                                    <span><i className="ri-award-line"></i> RERA Certified</span>
                                    <span><i className="ri-shield-line"></i> Clear Title</span>
                                    <span><i className="ri-star-line"></i> Premium Location</span>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
        </React.Fragment>
    )
}