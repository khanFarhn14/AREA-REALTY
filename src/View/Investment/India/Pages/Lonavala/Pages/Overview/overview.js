import React from "react";
import "./overview.scss"
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import growthIndicators from "../../../../../../../json/IndiaInvestment/Lonavala/Overview/growth-indicators.json";
import keyInvestmentFactors from "../../../../../../../json/IndiaInvestment/Lonavala/Overview/key-investment-factors.json";
import investmentCase from "../../../../../../../json/IndiaInvestment/Lonavala/Overview/investment-case.json";
import strategicAdvantages from "../../../../../../../json/IndiaInvestment/Lonavala/Overview/strategic-advantages.json";

export default function OverviewView() {
    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* QUICK FACTS & METRICS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Quick Facts & Metrics</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Drive Time:</th>
                                    <th className="text-primary text-end">Mumbai 90 mins (96 km)</th>
                                    <th>Villa Price Range:</th>
                                    <th className="text-primary text-end">₹8,000-₹15,000/sqft</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pune Distance:</td>
                                    <td className="text-end">64 km via expressway</td>
                                    <td>Plot Rate:</td>
                                    <td className="text-primary text-end">₹3,000-₹7,000/sqft</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* INFRASTRUCTURE & CONNECTIVITY */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Infrastructure & Connectivity</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Current Status</th>
                                    <th></th>
                                    <th>Major Upcoming Projects</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mumbai-Pune Expressway:</td>
                                    <td className="text-primary text-end">Operational</td>
                                    <td>Missing Link Tunnel:</td>
                                    <td className="text-primary text-end">96% Complete</td>
                                </tr>

                                <tr>
                                    <td>Rail Connectivity:</td>
                                    <td className="text-end">Major Station</td>
                                    <td>Travel Time Saving:</td>
                                    <td className="text-primary text-end">25 minutes</td>
                                </tr>

                                <tr>
                                    <td>Airport Access:</td>
                                    <td className="text-end">Pune 1.5 hrs</td>
                                    <td>Skywalk Project:</td>
                                    <td className="text-end">₹909 Cr Investment</td>
                                </tr>

                                <tr>
                                    <td>Luxury Hospitality:</td>
                                    <td className="text-end">Hilton, Radisson, Fariyas</td>
                                    <td>NMIA Access:</td>
                                    <td className="text-end">2025 (1.5 hrs)</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td className="text-end"></td>
                                    <td>Investment Grade:</td>
                                    <td className="text-primary text-end">Infrastructure Boom</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* ENVIRONMENTAL & CLIMATE PROFILE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Environmental & Climate Profile</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Air Quality & Environment</th>
                                    <th></th>
                                    <th>Climate & Weather Patterns</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AQI Range:</td>
                                    <td className="text-success text-end">45-65 (Good-Moderate)</td>
                                    <td>Temperature Range:</td>
                                    <td className="text-primary text-end">15°C - 28°C</td>
                                </tr>

                                <tr>
                                    <td>Air Quality:</td>
                                    <td className="text-success text-end">Excellent</td>
                                    <td>Annual Rainfall:</td>
                                    <td className="text-primary text-end">2500mm (Monsoon)</td>
                                </tr>

                                <tr>
                                    <td>Pollution Level:</td>
                                    <td className="text-success text-end">Minimal Industrial</td>
                                    <td>Humidity:</td>
                                    <td className="text-end">65-85% (Seasonal)</td>
                                </tr>

                                <tr>
                                    <td>Elevation:</td>
                                    <td className="text-end">625m above sea level</td>
                                    <td>Climate Type:</td>
                                    <td className="text-end">Tropical Monsoon</td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* INVESTMENT BENEFITS SECTION */}
                        <div className="investment-benefits-section">
                            {[
                                {
                                    title: "Investment Environmental Benefits",
                                    items: [
                                        [
                                            "Fresh Western Ghats air quality",
                                            "Low pollution perfect for wellness tourism",
                                        ],
                                        [
                                            "Year-round pleasant hill station climate",
                                            "Monsoon season drives peak rental demand",
                                        ],
                                    ],
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="benefit-block">
                                    <h4>{benefit.title}</h4>
                                    <div className="benefit-list">
                                        {benefit.items.map((column, colIndex) => (
                                            <ul key={colIndex}>
                                                {column.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>

                {/* MARKET DESCRIPTION */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Body>
                        <h3 className="fs-16 mb-2">Market Description</h3>
                        <p className="fs-12">
                            Lonavala has long been the weekend capital for Mumbai and Pune. But with infrastructure upgrades, luxury hospitality anchors,
                            and demand for second homes surging post-pandemic, it is evolving into one of India's most sought-after real estate investment
                            corridors. The Mumbai–Pune Expressway Missing Link Tunnel (8.9 km) is ~96% complete, expected to cut travel by ~25 minutes.
                            Upcoming ₹909 crore Skywalk Project (Tiger Point ↔ Lion's Point) with rooftop cafes, adventure zones, amphitheatre will boost
                            tourism value and short-stay rental demand significantly.
                        </p>
                    </Card.Body>
                </Card>

                {/* GROWTH INDICATORS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Growth Indicators</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Row className="g-3">
                            {growthIndicators.map((item, index) => (
                                <Col md={6} key={index}>
                                    <div className="product-wrapper fs-14 p-2">
                                        <i className="ri-arrow-right-up-line align-middle text-primary"></i> <span className="align-middle">{item?.name}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* KEY INVESTMENT FACTORS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Key Investment Factors</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Row className="g-3">
                            {keyInvestmentFactors.map((item, index) => (
                                <Col md={6} key={index}>
                                    <div className="product-wrapper fs-14 p-2">
                                        <i className="ri-global-line align-middle text-primary"></i> <span className="align-middle">{item?.name}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* WHY LONAVALA - THE INVESTMENT CASE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Why Lonavala - Maharashtra's Hill-Station Investment Powerhouse</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {investmentCase.map((section, index) => (
                            <div key={index} className="key-investment-factors mb-3">
                                <h5>{index + 1}. {section.category}</h5>
                                <Row>
                                    {section.items.map((item, idx) => (
                                        <Col md={12} key={idx}>
                                            <div className={`product-wrapper tag-${item.tag}`}>
                                                <span className={`investment-factors-symbol align-middle tag-${item.tag}`}></span>
                                                <span className="align-middle">{item.name}</span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </Card.Body>
                </Card>

                {/* WHY LONAVALA - INVESTMENT CASE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Strategic Advantages</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            {strategicAdvantages.map((item, index) => (
                                <Col md={6} key={index}>
                                    <div className="product-wrapper fs-14 p-2" style={{ backgroundColor: "#f4f7ff" }}>
                                        <i className="ri-star-s-line align-middle text-primary"></i> <span className="align-middle">{item?.name}</span>
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
    )

}