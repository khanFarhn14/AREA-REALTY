import React from "react";
import "./property.scss";
import { Button, Card, Row, Col } from "react-bootstrap";
import properties from "../../../../../../../json/IndiaInvestment/Lonavala/Properties/properties-view.json";


export default function PropertyView() {
    // HANLDE SHARE
    const handleShare = (item) => {
        if (navigator.share) {
            navigator
                .share({
                    title: item.title,
                    text: `Explore ${item.title} in Karjat — premium nature property!`,
                    url: window.location.href,
                })
                .then(() => console.log("Shared successfully"))
                .catch((error) => console.error("Error sharing:", error));
        } else {
            alert("Sharing is not supported on this browser.");
        }
    };

    return (
        <React.Fragment>
            <div className="overview-wrapper">

                {/* PROPERTY PORTFOLIO */}
                <div className="strategic-location-card">
                    <h3 className="title">Property Portfolio</h3>
                    <p className="description">Premium hill station properties with heritage charm and valley views.</p>
                </div>

                {/* PROPERTY CARD */}
                <div className="property-card-section">
                    {properties.map((prop, index) => (
                        <div className="property-card" key={index}>
                            <div className="property-header">
                                <span className="status-tag" style={{ backgroundColor: prop.color }}>
                                    {prop.tag}
                                </span>
                                <span className="property-id">{prop.id}</span>
                            </div>

                            <h3 className="property-title">{prop.title}</h3>
                            <h4 className="property-price">{prop.price}</h4>
                            <p className="property-subtitle">{prop.subtitle}</p>

                            <div className="property-info">
                                <div><b>{prop.bedrooms}</b><span>Bedrooms</span></div>
                                <div><b>{prop.bathrooms}</b><span>Bathrooms</span></div>
                                <div><b>{prop.area}</b><span>Sq.Ft.</span></div>
                            </div>

                            <ul className="property-features">
                                {prop.features.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="property-footer">
                                <Button className="btn-view">View Details</Button>
                                <Button className="btn-share" onClick={() => handleShare(prop)}>
                                    <i className="ri-share-line"></i>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MARKET STATSTICS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Body>
                        <h3 className="fs-16 mb-3">Market Statistics</h3>

                        <Row className="g-3">
                            {[
                                {
                                    "value": "85+",
                                    "label": "Active Listings",
                                    "subLabel": "Properties Available"
                                },
                                {
                                    "value": "₹3.2Cr",
                                    "label": "Average Price",
                                    "subLabel": "Per Property"
                                },
                                {
                                    "value": "20%",
                                    "label": "Annual ROI",
                                    "subLabel": "Returns Potential"
                                },
                                {
                                    "value": "1.8Y",
                                    "label": "Avg. Payback",
                                    "subLabel": "Investment Period"
                                }
                            ].map((item, index) => (
                                <Col md={3} xs={6} key={index}>
                                    <div className="summary-card">
                                        <h4>{item.value}</h4>
                                        <h5>{item.label}</h5>
                                        <h6>{item.subLabel}</h6>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* ENVIREMENT */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Frequently Asked Questions</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ul className="frequently-asked-questions">
                            {[
                                {
                                    "name": "Why is Lonavala called Maharashtra's Hill-Station Investment Powerhouse?",
                                    "des": "With Missing Link Tunnel 96% complete (25 min savings), ₹909 cr Skywalk project, NMIA access, and celebrity endorsement - it's evolving beyond weekend destination to investment ecosystem."
                                },
                                {
                                    "name": "WWhat are realistic rental yields for villa investments?",
                                    "des": "Weekend rentals: ₹12,000-₹30,000/night for premium villas. Annual Airbnb yields ~6-8% in peak season with millions of tourists annually."
                                },
                                {
                                    "name": "How do monsoons affect property investments?",
                                    "des": "Heavy rains, slope stability, drainage issues must be factored. However, monsoon season drives peak tourism. Choose projects with proper engineering design."
                                },
                                {
                                    "name": "How does Lonavala's air quality impact investment potential?",
                                    "des": "AQI 45-65 (Good-Moderate) due to Western Ghats location, 8-10°C cooler than Mumbai, minimal industrial pollution. This drives wellness tourism premium and health-conscious buyer demand, supporting rental yields."
                                },
                                {
                                    "name": "What should I budget for a quality villa investment?",
                                    "des": "Entry gated community villa: ₹1.2-₹2 Cr. Premium boutique: ₹4-₹8 Cr+. Supreme Universal example: ₹2.65 Cr average. Always verify NA, 7/12, and RERA status."
                                }
                            ].map((item, index) => (
                                <li key={index}>
                                    <h4 className="fs-14 mb-1">{item.name}</h4>
                                    <h6 className="fs-12 text-gra">{item.des}</h6>
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>

                {/* READY TO INVEST IN KARJAT */}
                <div className="ready-to-invest-location">
                    <div className="ready-to-invest-header">
                        <h3>Ready to Invest in Lonavala?</h3>
                        <p>
                            Get comprehensive legal pack: Title documents, society papers, hill station clearances, RERA verification, utility connections,
                            and tourism rental guidance.
                        </p>
                    </div>

                    <div className="ready-to-invest-bttn">
                        <Button variant="primary" className="d-flex gap-1 align-items-center">
                            <i className="ri-phone-line align-middle"></i>
                            <span className="align-middle">Contact Karjat Expert</span>
                        </Button>
                        <Button variant="outline-secondary" className="d-flex gap-1 align-items-center">
                            <i className="ri-calendar-line align-middle"></i>
                            <span className="align-middle">Schedule Site Visit</span>
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}