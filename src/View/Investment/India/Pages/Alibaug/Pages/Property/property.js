import React from "react";
import "./property.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
import propertyList from "../../../../../../../json/IndiaInvestment/Karjat/Properties/properties-view.json";

import morningStarImg from "../../../../../../../assets/img/location/karjat/morning-star.png";
import mountainRetreatImg from "../../../../../../../assets/img/location/karjat/mountain-retreat.png";
import summerHillsImg from "../../../../../../../assets/img/location/karjat/summer-hills.png";
import greenGoldImg from "../../../../../../../assets/img/location/karjat/green-gold.png";

export default function PropertyView() {

    // IMAGE MAP
    const imageMap = {
        "morning-star.png": morningStarImg,
        "mountain-retreat.png": mountainRetreatImg,
        "summer-hills.png": summerHillsImg,
        "green-gold.png": greenGoldImg,
    };

    // GET IMAGE FILE NAME
    const getImageFileName = (imagePath) => imagePath.split("/").pop();

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
        <div className="overview-wrapper">
            <div className="strategic-location-card">
                <h3 className="title">Property Portfolio</h3>
                <p className="description">Premium properties for adventure enthusiasts and nature lovers.</p>
            </div>

            {/* PROPERTY LIST */}
            <Row className="g-3">
                {propertyList.map((item, index) => {
                    const imgSrc = imageMap[getImageFileName(item.image)];
                    return (
                        <Col md={4} sm={12} key={index}>
                            <Card className="card-one h-auto overview-view-common property-card">
                                <div className="property-image-wrapper">
                                    <Card.Img src={imgSrc} alt={item.title} className="property-image" />
                                    <div className="property-title-overlay">
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>

                                <Card.Body className="property-footer d-flex justify-content-between align-items-center">
                                    <Button variant="outline-dark" className="text-uppercase">{item.buttonText}</Button>
                                    <i className="ri-share-forward-line share-icon" onClick={() => handleShare(item)} style={{ cursor: "pointer" }}></i>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            {/* MARKET STATSTICS */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Body>
                    <h3 className="fs-16 mb-3">Market Statistics</h3>

                    <Row className="g-3">
                        {[
                            {
                                "value": "50+",
                                "label": "Active Listings",
                                "subLabel": "Properties Available"
                            },
                            {
                                "value": "₹45L",
                                "label": "Average Price",
                                "subLabel": "Per Property"
                            },
                            {
                                "value": "15%",
                                "label": "Annual ROI",
                                "subLabel": "Returns Potential"
                            },
                            {
                                "value": "2.5Y",
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
                                "name": "Is Karjat just a monsoon spot or year-round?",
                                "des": "Year-round destination. Connectivity improving via Panvel-Karjat rail and NMIA airport, with MTHL already easing Mumbai ↔ Navi Mumbai travel."
                            },
                            {
                                "name": "Will NMIA actually open?",
                                "des": "DGCA aerodrome licence is issued; Terminal-1 opening targeted for Oct 2025 with airlines staging phased ramps."
                            },
                            {
                                "name": "How do I verify a project?",
                                "des": "Check MahaRERA (project/agent numbers), NA order, layout/building permissions, and scan quarterly updates on official portal."
                            },
                            {
                                "name": "What's the current market pricing?",
                                "des": "Apartments avg ₹4,700-₹4,800/sqft; villas avg ₹5,800/sqft. Plot ticket sizes range ₹9.6L to ₹1.09Cr+ depending on size, access & title."
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
                    <h3>Ready to Invest in Karjat?</h3>
                    <p>
                        Get comprehensive legal pack: 7/12, FERFAR/e-mutation, title search, NA order, layout approvals, RERA docs, encumbrance report,
                        and site access affidavit.
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
                    <Button variant="outline-secondary" className="d-flex gap-1 align-items-center">
                        <i className="ri-share-line align-middle"></i>
                        <span className="align-middle">Share This Page</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}