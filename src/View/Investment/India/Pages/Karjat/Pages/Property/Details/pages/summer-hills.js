import React, { useState } from "react";
import pageTitleImg from "../../../../../../../../../assets/img/location/karjat/summer-hills.png";
import { Button, ButtonGroup, Card, Col, Accordion, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import gallery1 from "../../../../../../../../../assets/img/location/details/summer-hills/gallery1.png";
import gallery2 from "../../../../../../../../../assets/img/location/details/summer-hills/gallery2.png";
import Slider from "react-slick";
import highlights from "../../../../../../../../../json/Location/IndiaExplore/Karjat/Properties/SummerHills/highlights.json";
import features from "../../../../../../../../../json/Location/IndiaExplore/Karjat/Properties/SummerHills/features.json";
import villaSpecifications from "../../../../../../../../../json/Location/IndiaExplore/Karjat/Properties/SummerHills/villa-specifications.json";

export default function SummerHills() {
    // VILLA SPECIFICATION
    const [activeKey, setActiveKey] = useState(null);

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
                        <h2>Plot Specifications</h2>
                        <p>Choose from our exclusive NA plot options</p>
                    </div>

                    <div className="villa-specs-container">
                        {villaSpecifications.map((villa, index) => (
                            <div className="villa-card" key={index}>
                                {/* Header */}
                                <div className="villa-header">
                                    <div>
                                        <h3>{villa.title}</h3>
                                        <p className="villa-sub">🛏 {villa.beds}</p>
                                    </div>
                                    <div className="villa-price">
                                        <h4>{villa.price}</h4>
                                        <p>{villa.pricePerSqFt}</p>
                                    </div>
                                </div>

                                {/* Area Details */}
                                <div className="villa-details-row">
                                    <div className="detail-box">
                                        <p className="label text-uppercase">Plot Area</p>
                                        <p className="value">{villa.reraCarpet}</p>
                                    </div>
                                    <div className="detail-box">
                                        <p className="label text-uppercase">Build Rights</p>
                                        <p className="value">{villa.usableArea}</p>
                                    </div>
                                    <div className="detail-box">
                                        <p className="label text-uppercase">Bedrooms</p>
                                        <p className="value">{villa.builtUp}</p>
                                    </div>
                                    <div className="detail-box">
                                        <p className="label text-uppercase">Bathrooms</p>
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
                                    <Accordion.Item eventKey={villa?.id || "0"}>
                                        <Accordion.Header onClick={() => setActiveKey(activeKey === (villa?.id || "0") ? null : villa?.id || "0")} className="text-uppercase amenities-header">Amenities and More</Accordion.Header>
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

                                                    <hr />

                                                    <div className="location-connectivity">
                                                        <h3>Location & Connectivity</h3>

                                                        {villa.locationConnectivity.map((listItem, i) => (
                                                            <ul key={i}>
                                                                <li>{listItem?.title}</li>
                                                                {listItem.list.map((list) => (
                                                                    <li>{list}</li>
                                                                ))}
                                                            </ul>
                                                        ))}
                                                    </div>
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

                    {/* EXPERIENCE SUMMER HILL */}
                    <div className="experience-morning-star">
                        <Row>
                            <Col>
                                <h2 className="section-title">
                                    <span className="divider"></span>
                                    Experience Summer Hills
                                </h2>
                                <p className="section-subtitle">
                                    Book a personalized site visit and discover Californian hillside luxury with infinity pools, vineyard spaces, and panoramic valley views
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
                                    <span><i className="ri-award-line"></i> NA Plot Status</span>
                                    <span><i className="ri-shield-line"></i> Clear Title</span>
                                    <span><i className="ri-star-line"></i> Only 70 Plots</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}