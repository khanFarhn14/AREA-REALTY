import React from "react";
import "./property.scss";
import { Card, Row, Col } from "react-bootstrap";
import propertyList from "../../../../../../../json/IndiaInvestment/Alibaug/Properties/property-list.json";

export default function PropertyView() {
    const highlights = [
        "Mandwa-Kihim-Awas-Sasawane-Zirad: jetty proximity premium, weekend liquidity optimization",
        "Varsoli-Alibaug town-Chendhare: services infrastructure, schools, retail accessibility",
        "Revdanda-Korlai-Kashid: scenic coastline, lower density, view plot development potential",
        "Sea-access belts: premium ADR performance, strong weekend occupancy rates",
        "Town/Varsoli: steady year-round utilization, hybrid live-and-rent suitability",
    ];

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Investment Property Formats</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="property-listing-section">
                            {propertyList.map((item, index) => (
                                <div className="property-card" key={index}>
                                    {/* Header */}
                                    <div className="property-card-header">
                                        <span className="property-badge" style={{ backgroundColor: item.tagColor }}>{item.status}</span>
                                        <span className="property-id">{item.id}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="property-title">{item.title}</h3>
                                    <h4 className="property-price">{item.price}</h4>

                                    {/* Features */}
                                    <ul className="property-feature-list">
                                        {item.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                    {/* Footer status */}
                                    <div className="property-status" style={{ color: item.statusColor, borderColor: item.statusColor }}>{item.status}</div>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>

                {/* INVESTMENT CARD */}
                <div className="investment-card">
                    <h3 className="title">Investment Performance Metrics</h3>

                    <Row className="g-3 mt-3">
                        {[
                            {
                                "value": "MTHL + Ferries + NMIA",
                                "title": "Infrastructure Stack",
                                "subtitle": "Access Trifecta Operational/Imminent"
                            },
                            {
                                "value": "15-16 μg/m³",
                                "title": "Air Quality",
                                "subtitle": "PM2.5 Wellness Advantage"
                            },
                            {
                                "value": "₹1.25-15Cr+",
                                "title": "Villa Spectrum",
                                "subtitle": "Entry Luxury to Ultra-Premium"
                            },
                            {
                                "value": "CRZ-Limited",
                                "title": "Supply Constraint",
                                "subtitle": "Natural Scarcity Value"
                            },
                            {
                                "value": "Celebrity/HNI",
                                "title": "Brand Premium",
                                "subtitle": "Aspirational Status Established"
                            },
                            {
                                "value": "6-8% Peak",
                                "title": "Rental Yields",
                                "subtitle": "Weekend/Seasonal Performance"
                            }
                        ].map((item, index) => (
                            <Col md={4} sm={6} key={index}>
                                <div className="metric-card text-center p-3 bg-light rounded-3">
                                    <h4 className="text-primary mb-1">{item.value}</h4>
                                    <h6 className="mb-1">{item.title}</h6>
                                    <h5 className="text-muted fs-12 mb-0">{item.subtitle}</h5>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* MICRO-MARKET ANALYSIS */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Micro-Markets Analysis</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="location-highlights">
                            <ul className="highlight-list">
                                {highlights.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
}