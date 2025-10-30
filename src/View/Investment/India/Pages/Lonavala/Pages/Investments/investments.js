import React from "react";
import "./investments.scss";
import { Col, Row, Card, Table, Button } from "react-bootstrap";

export default function Investments() {

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* INVESTMENT CARD */}
                <div className="investment-card">
                    <h3 className="title">Investment Analysis</h3>
                    <p className="description">Comprehensive investment metrics and market insights for established hill station market.</p>

                    <Row className="g-3 mt-3">
                        {[
                            {
                                "value": "8-10%",
                                "title": "Annual Growth",
                                "subtitle": "Current YoY Appreciation"
                            },
                            {
                                "value": "25-30%",
                                "title": "3-5Y Appreciation",
                                "subtitle": "Projected Growth"
                            },
                            {
                                "value": "6-8%",
                                "title": "Rental Yield",
                                "subtitle": "Peak Season Airbnb"
                            },
                            {
                                "value": "₹1.2Cr+",
                                "title": "Entry Investment",
                                "subtitle": "Gated Community Villa"
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

                {/* REAL ESTATE MARKET METRIX */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Real Estate Market Metrics</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Investment Thresholds</th>
                                    <th></th>
                                    <th>Market Examples & Data</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Entry Villa (Gated):</td>
                                    <td className="text-end">₹1.2-₹2 Cr</td>
                                    <td>Supreme Universal Launch:</td>
                                    <td className="text-end">₹2.65 Cr avg</td>
                                </tr>

                                <tr>
                                    <td>Premium Boutique Villa:</td>
                                    <td className="text-primary text-end">₹4-₹8 Cr+</td>
                                    <td>Luxury Villa Range:</td>
                                    <td className="text-primary text-end">₹15,000+/sqft</td>
                                </tr>

                                <tr>
                                    <td>Weekend Rental Income:</td>
                                    <td className="text-primary text-end">₹12K-₹30K/night</td>
                                    <td>Annual Tourist Flow:</td>
                                    <td className="text-primary text-end">Millions</td>
                                </tr>

                                <tr>
                                    <td>Annual Appreciation:</td>
                                    <td className="text-primary text-end">8-10% Current</td>
                                    <td>Rental Season:</td>
                                    <td className="text-primary text-end">Year-round</td>
                                </tr>

                                <tr>
                                    <td>3-5Y Projected:</td>
                                    <td className="text-primary text-end">25-30% Total</td>
                                    <td>Market Status:</td>
                                    <td className="text-primary text-end">Established + Growth</td>
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
                                    "duration": "1 month"
                                },
                                {
                                    "phase": "Short-term",
                                    "description": "Rental preparation and marketing",
                                    "duration": "2-3 months"
                                },
                                {
                                    "phase": "Medium-term",
                                    "description": "Established rental income generation",
                                    "duration": "6-18 months"
                                },
                                {
                                    "phase": "Long-term",
                                    "description": "Capital appreciation and exit strategy",
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
                                "value": "12-16%",
                                "title": "Year 1-2",
                                "subtitle": "Rental Income"
                            },
                            {
                                "value": "18-25%",
                                "title": "Year 3-4",
                                "subtitle": "Market Appreciation"
                            },
                            {
                                "value": "25-35%",
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
                        <Card.Title className="fs-14 mb-0">Investment Profiles - Vision 2030</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="investor-segments-wrapper">
                            {[
                                {
                                    "color": "#2563eb",
                                    "title": "Families / Retirees",
                                    "description": "Ready villas or gated communities for lifestyle upgrade and weekend capital",
                                    "target": "Investment: ₹1.2-₹4 Cr for established luxury communities"
                                },
                                {
                                    "color": "#16a34a",
                                    "title": "Investors",
                                    "description": "NA plots in growth pockets for appreciation, rental yields 6-8% Airbnb",
                                    "target": "Strategy: Land banking + custom builds near infrastructure"
                                },
                                {
                                    "color": "#9333ea",
                                    "title": "NRIs / HNIs",
                                    "description": "Branded villas for prestige & dual income (capital + weekend rentals)",
                                    "target": "Premium: ₹4-₹8 Cr+ boutique villas with managed services"
                                },
                                {
                                    "color": "#ff6900",
                                    "title": "Hospitality Investors",
                                    "description": "Managed rental pools / resort collaborations / wellness retreats",
                                    "target": "Opportunity: Pool villas into hospitality with established operators"
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
                                    title: "Monsoon Challenges",
                                    description: "Heavy rains, slope stability, drainage issues must be factored into project design",
                                },
                                {
                                    color: "#dc2626",
                                    bgColor: "#fef2f2",
                                    title: "Overpricing Risk",
                                    description: `Some projects quote inflated "luxury" premiums without infrastructure backing`,
                                },
                                {
                                    color: "#eab308",
                                    bgColor: "#fefce8",
                                    title: "Title & NA Conversion",
                                    description: "Always verify NA order, 7/12 extract, and chain of title documentation",
                                },



                                {
                                    color: "#ad46ff",
                                    bgColor: "#faf5ff",
                                    title: "Eco-Sensitive Zoning",
                                    description: "Hill, forest, lake proximities may face restrictions - due diligence crucial",
                                },
                                {
                                    color: "#2b7fff",
                                    bgColor: "#eff6ff",
                                    title: "Infrastructure Delays",
                                    description: `Tunnel/Skywalk timelines could shift - avoid speculative buys banking only on dates`,
                                },
                                {
                                    color: "#00bba7",
                                    bgColor: "#f0fdfa",
                                    title: "Seasonal Climate Impact",
                                    description: "2500mm monsoon rains may affect accessibility; plan for seasonal rental patterns",
                                }
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
    )
}