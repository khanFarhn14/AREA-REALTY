import React from "react";
import "./property.scss";
import { Card, Col, Row, Table } from "react-bootstrap";
import propertyList from "../../../../../../../json/IndiaInvestment/Khopoli/Properties/property-list.json";

export default function PropertyView() {
    const micro_markets_analysis = [
        "Expressway nodes: Direct highway access with premium for connectivity and visibility",
        "Imagicaa proximity belt: Tourism anchor driving consistent rental demand and hospitality integration",
        "MIDC industrial clusters: Employment-driven residential demand with logistics park expansion",
        "Khopoli-Pali road corridor: LATIM industrial park development creating employment hub",
        "Hill station adjacent areas: Sahyadri foothills offering scenic value and moderate climate appeal",
    ];

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* ASSET CLASSES & INVESTMENT OPTIONS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Asset Classes & Investment Options</Card.Title>
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
                                "value": "7-9% YoY",
                                "title": "Price Appreciation",
                                "subtitle": "Current Market Performance"
                            },
                            {
                                "value": "20-25%",
                                "title": "Projected Growth",
                                "subtitle": "3-5 Year NMIA/Tunnel Impact"
                            },
                            {
                                "value": "₹8k-18k/night",
                                "title": "Rental Yields",
                                "subtitle": "Weekend Villa Performance"
                            },
                            {
                                "value": "40-50% Lower",
                                "title": "Entry Advantage",
                                "subtitle": "vs. Lonavala Pricing"
                            },
                            {
                                "value": "1 Hr NMIA",
                                "title": "Airport Access",
                                "subtitle": "2025 Spillover Effect"
                            },
                            {
                                "value": "Imagicaa",
                                "title": "Tourism Anchor",
                                "subtitle": "Established Demand Driver"
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

                {/* REAL ESTATE MARKET MATRICS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Real Estate Market Metrics</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Land & Plots</th>
                                    <th></th>
                                    <th>Villas & Houses</th>
                                    <th></th>
                                    <th>Apartments</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Plot Rate Range:</td>
                                    <td className="text-end text-primary">₹1,800 - ₹4,000/sqft</td>
                                    <td>Villa Rate:</td>
                                    <td className="text-end text-primary">₹4,500 - ₹6,500/sqft</td>
                                    <td>Apartment Rate:</td>
                                    <td className="text-end text-primary">₹3,000 - ₹5,000/sqft</td>
                                </tr>

                                <tr>
                                    <td>NA Plots Entry:</td>
                                    <td className="text-end text-primary">₹20 - ₹50 lakh</td>
                                    <td>Entry Range:</td>
                                    <td className="text-end text-primary">₹50L - ₹1.2Cr</td>
                                    <td>Market Type:</td>
                                    <td className="text-end">Affordable Housing Focus</td>
                                </tr>

                                <tr>
                                    <td>Location Premium:</td>
                                    <td className="text-end">Expressway adjacent higher</td>
                                    <td>Premium Boutique:</td>
                                    <td className="text-end text-primary">₹2 - ₹4Cr</td>
                                    <td>Target Segment:</td>
                                    <td className="text-end">First-time Buyers</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* MICRO-MARKET ANALYSIS */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Micro-Markets Analysis</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="location-highlights">
                            <ul className="highlight-list">
                                {micro_markets_analysis.map((point, index) => (
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