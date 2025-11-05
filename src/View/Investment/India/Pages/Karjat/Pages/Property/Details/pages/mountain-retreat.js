import React, { useState } from "react";
import pageTitleImg from "../../../../../../../../../assets/img/location/karjat/mountain-retreat.png";
import { Button, ButtonGroup, Card, Col, Accordion, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gallery1 from "../../../../../../../../../assets/img/location/details/mountain-retreat/gallery1.png";
import gallery2 from "../../../../../../../../../assets/img/location/details/mountain-retreat/gallery2.png";
import Slider from "react-slick";

export default function MountainRetreat() {
    // HIGHLIGHTS
    const highlights = [
        { label: "Premium Villas", value: "10" },
        { label: "Plot Size", value: "UP TO 5000 SQ.FT." },
        { label: "Configuration", value: "4 BHK" },
        { label: "Price Range", value: "₹2.65 Cr ONWARDS" },
        { label: "Carpet Area", value: "2160 SQ.FT." },
        { label: "Key Feature", value: "PRIVATE POOL." },
        { label: "Status", value: "AVAILABLE", isAvailable: true },
    ];

    // FEATURES
    const features = [
        { title: "RERA Registered", description: "Maharashtra RERA approved project" },
        { title: "Gated Community", description: "Secure exclusive enclave with controlled access" },
        { title: "Clear Title", description: "Verified legal documentation" },
        { title: "Modern Infrastructure", description: "Premium construction and amenities" },
    ];

    // VILLA SPECIFICATION
    const [activeKey, setActiveKey] = useState(null);
    const villaSpecifications = [
        {
            title: "4 BHK Premium Villa with Private Pool",
            beds: 4,
            baths: 4,
            price: "₹2.65 Cr",
            pricePerSqFt: "₹9,143/sq.ft.",
            reraCarpet: "2160 sq.ft.",
            usableArea: "2700 sq.ft.",
            builtUp: "2900 sq.ft.",
            plotSize: "5000 sq.ft.",
            features: [
                "Private Swimming Pool",
                "Spacious Balconies",
                "Landscaped Outdoor Areas",
                "Mountain Views",
            ],
            extraCharges: "5% Stamp Duty + 5% GST + 1% Registration",
            status: "Limited Units",
            statusColor: "orange",
            amenityGroups: [
                {
                    title: "Lifestyle & Wellness",
                    items: [
                        {
                            icon: "🏋️‍♀️",
                            name: "Clubhouse & Gym",
                            desc: "Space for fitness, leisure and small gatherings",
                        },
                        {
                            icon: "🏊‍♂️",
                            name: "Individual Private Swimming Pool",
                            desc: "Private pool with every villa",
                        },
                        {
                            icon: "🏡",
                            name: "Common Swimming Pool",
                            desc: "Shared pool facility at the clubhouse",
                        },
                        {
                            icon: "🌳",
                            name: "Landscaped Gardens",
                            desc: "Nature-centered relaxation spaces",
                        },
                        {
                            icon: "👶",
                            name: "Children's Play Area",
                            desc: "Designed for safe, engaging outdoor play",
                        },
                        {
                            icon: "☕",
                            name: "Café & Social Spaces",
                            desc: "For family time and hosting guests",
                        },
                    ],
                },
                {
                    title: "Community & Convenience",
                    items: [
                        {
                            icon: "🛡️",
                            name: "Gated Community",
                            desc: "Secured entry with controlled access",
                        },
                        {
                            icon: "📷",
                            name: "24x7 CCTV Surveillance",
                            desc: "Controlled access for safety",
                        },
                        {
                            icon: "💧",
                            name: "Ample Water Supply",
                            desc: "Ensuring uninterrupted comfort",
                        },
                        {
                            icon: "🛣️",
                            name: "Internal Paved Roads",
                            desc: "Smooth movement inside the community",
                        },
                        {
                            icon: "⭐",
                            name: "Decorative Main Entrance Gate",
                            desc: "Enhancing the premium feel",
                        },
                    ],
                },
                {
                    title: "Design & Experience-Oriented Features",
                    items: [
                        {
                            icon: "🌿",
                            name: "Modern Zen Architecture",
                            desc: "Blending minimalism + nature",
                        },
                        {
                            icon: "🧭",
                            name: "Vastu Compliant Design",
                            desc: "For balance & harmony",
                        },
                        { icon: "🌲", name: "50% Open Space", desc: "Across the community" },
                        {
                            icon: "👁️",
                            name: "Mountain & Nature-Facing Views",
                            desc: "From terraces and balconies",
                        },
                        {
                            icon: "📏",
                            name: "Spacious Living & Lounge Areas",
                            desc: "Enhancing openness",
                        },
                    ],
                },
            ],
        },
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
            {/* Page Header */}
            <div className="detils-page-title">
                <Link className="back-btn" to="/india/explore/karjat">
                    <i className="ri-arrow-left-line"></i>
                    <span>Back TO Karjat</span>
                </Link>
                <Image
                    className="detils-page-title-img"
                    src={pageTitleImg}
                    alt="bgImage"
                />
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

            {/* Details Page Content */}
            <div className="detail-page-content">
                <Container>
                    {/* Buttons */}
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
                                <Row
                                    key={idx}
                                    className={`highlight-row ${idx !== highlights.length - 1 ? "bordered" : ""
                                        }`}
                                >
                                    <Col xs={6}>
                                        <p
                                            className={`value ${item.isAvailable ? "available" : ""}`}
                                        >
                                            {item.value}
                                        </p>
                                    </Col>
                                    <Col xs={6} className="text-end">
                                        <p className="label">{item.label}</p>
                                    </Col>
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>

                    <hr className="mt-5 mb-5" style={{ borderColor: "#959595" }} />

                    {/* Features */}
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

                    {/* Villa Specs */}
                    <div className="villa-specs-heading">
                        <h2>Villa Specifications</h2>
                        <p>Choose from our carefully designed villa configurations</p>
                    </div>

                    <div className="villa-specs-container">
                        {villaSpecifications.map((villa, index) => (
                            <div className="villa-card" key={index}>
                                {/* Header */}
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

                                {/* Area Details */}
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

                                {/* Features */}
                                <div className="villa-features">
                                    {villa.features.map((feature, i) => (
                                        <span key={i} className="feature-pill">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-3">
                                    <p className="villa-extra w-60">{villa.extraCharges}</p>
                                    <div className={`villa-status position-static ${villa.statusColor}`}>{villa.status}</div>
                                </div>

                                {/* ✅ Updated Accordion (React-Bootstrap v2+ Syntax) */}
                                <Accordion activeKey={activeKey}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header onClick={() => setActiveKey(activeKey === "0" ? null : "0")} className="text-uppercase amenities-header">Amenities and More</Accordion.Header>

                                        <Accordion.Body>
                                            {villa.amenityGroups.map((group, idx) => (
                                                <div key={idx} className="amenities-section pb-3">
                                                    <h6 className="category-title text-primary text-uppercase mb-3">{group.title}</h6>
                                                    {group.items.map((item, i) => (
                                                        <div key={i} className="amenity-item d-flex align-items-start gap-2">
                                                            <div className="icon">{item.icon}</div>
                                                            <div>
                                                                <div className="amenity-title">{item.name}</div>
                                                                <div className="amenity-desc">{item.desc}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        ))}
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

                    {/* EXPERIENCE MOUNTAIN RETTEAT */}
                    <div className="experience-morning-star">
                        <Row>
                            <Col>
                                <h2 className="section-title">
                                    <span className="divider"></span>
                                    Experience Mountain Retreat
                                </h2>
                                <p className="section-subtitle">
                                    Book a personalized site visit and discover the ultimate luxury living experience with private pools and mountain views
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
    );
}