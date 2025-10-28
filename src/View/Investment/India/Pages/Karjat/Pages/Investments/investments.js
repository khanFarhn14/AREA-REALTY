import React from "react";
import "./investments.scss";
import { Col, Row, Card, Table, Button } from "react-bootstrap";

export default function Investments() {

    return (
        <React.Fragment>
            {/* INVESTMENT CARD */}
            <div className="investment-card">
                <h3 className="title">Investment Analysis</h3>
                <p className="description">Comprehensive investment metrics and market insights for informed decision-making.</p>

                <Row className="g-3 mt-3">
                    {[
                        {
                            "value": "15-20%",
                            "title": "Annual ROI",
                            "subtitle": "Expected Returns"
                        },
                        {
                            "value": "25%",
                            "title": "Price Growth",
                            "subtitle": "YoY Appreciation"
                        },
                        {
                            "value": "8-12%",
                            "title": "Rental Yield",
                            "subtitle": "Seasonal Revenue"
                        },
                        {
                            "value": "₹25L+",
                            "title": "Entry Investment",
                            "subtitle": "Starting Range"
                        }
                    ].map((item, index) => (
                        <Col md={3} sm={12} key={index}>
                            <div className="metric-card text-center p-3 bg-light rounded-3">
                                <h4 className="text-primary mb-1">{item.value}</h4>
                                <h5 >{item.title}</h5>
                                <h6 className="text-muted fs-12">{item.subtitle}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* INFRASTRUCTURE & GCONNECTIVITY */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Financial</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table className="table w-100" responsive>
                        <thead>
                            <tr>
                                <th>Investment Structure</th>
                                <th></th>
                                <th>Market Performance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Entry Investment:</td>
                                <td className="text-end">₹25,00,000</td>
                                <td>5Y Price Growth:</td>
                                <td className="text-primary text-end">150%</td>
                            </tr>

                            <tr>
                                <td>Annual Appreciation:</td>
                                <td className="text-primary text-end">25%</td>
                                <td>Tourism Growth:</td>
                                <td className="text-primary text-end">40% YoY</td>
                            </tr>

                            <tr>
                                <td>Rental Yield</td>
                                <td className="text-primary text-end">8-12%</td>
                                <td>Occupancy Rate:</td>
                                <td className="text-end">75%</td>
                            </tr>

                            <tr>
                                <td>Expected ROI:</td>
                                <td className="text-primary text-end">15-20%</td>
                                <td>Market Rating:</td>
                                <td className="text-primary text-end">A+</td>
                            </tr>

                            <tr>
                                <td>Payback Period:</td>
                                <td className="text-end">3-5 years</td>
                                <td>Risk Level:</td>
                                <td className="text-end">Low-Medium</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* INVESTMENT TIMLINE */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Investment Timeline</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="investment-timeline-wrapper">
                        {[
                            {
                                "phase": "Immediate",
                                "description": "Property acquisition and documentation",
                                "duration": "1-2 months"
                            },
                            {
                                "phase": "Short-term",
                                "description": "Infrastructure development and amenities",
                                "duration": "6-12 months"
                            },
                            {
                                "phase": "Medium-term",
                                "description": "Rental income generation",
                                "duration": "1-3 years"
                            },
                            {
                                "phase": "Long-term",
                                "description": "Capital appreciation realization",
                                "duration": "3-5 years"
                            }
                        ].map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-left">
                                    <span className="dot"></span>
                                    <div className="text-content">
                                        <h5 className="phase">{item.phase}</h5>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                                <div className="timeline-duration">{item.duration}</div>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            {/* INVESTMENT CARD */}
            <div className="investment-card">
                <h3 className="title">ROI Projections</h3>

                <Row className="g-3 mt-3">
                    {[
                        {
                            "value": "8-12%",
                            "title": "Year 1-2",
                            "subtitle": "Rental Income"
                        },
                        {
                            "value": "15-20%",
                            "title": "Year 3-4",
                            "subtitle": "Market Appreciation"
                        },
                        {
                            "value": "25-30%",
                            "title": "Year 5+",
                            "subtitle": "Capital Gains"
                        }
                    ].map((item, index) => (
                        <Col md={4} sm={12} key={index}>
                            <div className="metric-card text-center p-3 bg-light rounded-3">
                                <h4 className="text-primary mb-1">{item.value}</h4>
                                <h5 >{item.title}</h5>
                                <h6 className="text-muted fs-12">{item.subtitle}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* BUYER PERSONAS & USE CASES */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Buyer Personas & Use Cases</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="investor-segments-wrapper">
                        {[
                            {
                                "color": "#2563eb",
                                "title": "Lifestyle Upgraders",
                                "description": "2-3 bed villas in managed communities for weekend living",
                                "target": "Urban professionals seeking retreat"
                            },
                            {
                                "color": "#16a34a",
                                "title": "Yield Seekers",
                                "description": "Villa-stay rentals targeted at monsoon/winter peaks once NMIA scales",
                                "target": "Income-focused investors"
                            },
                            {
                                "color": "#9333ea",
                                "title": "Land Bank Investors",
                                "description": "NA-convertible or NA plots near rail corridor/arterials for 5–8 year holds",
                                "target": "Long-term appreciation play"
                            }
                        ].map((item, index) => (
                            <div className="investor-segment" key={index}>
                                <div className="segment-header">
                                    <span className="dot" style={{ backgroundColor: item.color }}></span>
                                    <h5 className="title">{item.title}</h5>
                                </div>
                                <p className="description">{item.description}</p>
                                <p className="target">
                                    <span className="label">Target: </span>
                                    <span className="value">{item.target}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            {/* RISK TO FACTOR */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Risks to Factor (Transparent Disclosure)</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="project-risks-wrapper">
                        {[
                            {
                                color: "#ea580c",
                                bgColor: "#fff7ed",
                                title: "Project Timing Risk",
                                description: "Suburban-corridor/NMIA dates may see slippages; we price with buffers",
                            },
                            {
                                color: "#dc2626",
                                bgColor: "#fef2f2",
                                title: "Infra-lag Risk",
                                description: "Drainage/utility scaling can trail demand; we prioritize in-house infra",
                            },
                            {
                                color: "#eab308",
                                bgColor: "#fefce8",
                                title: "Approval Risk",
                                description: "TP schemes may face village-level objections causing delays",
                            },
                        ].map((risk, index) => (
                            <div className="project-risk" key={index} style={{ backgroundColor: risk.bgColor }}>
                                <div className="risk-header">
                                    <span className="dot" style={{ backgroundColor: risk.color }}></span>
                                    <h5 className="title">{risk.title}</h5>
                                </div>
                                <p className="description">{risk.description}</p>
                            </div>
                        ))}
                    </div>

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
        </React.Fragment>
    )
}