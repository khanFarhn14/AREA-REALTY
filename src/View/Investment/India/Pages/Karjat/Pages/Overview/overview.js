import React from "react";
import "./overview.scss"
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import growthIndicators from "../../../../../../../json/IndiaInvestment/Karjat/Overview/growth-indicators.json";
import keyInvestmentFactors from "../../../../../../../json/IndiaInvestment/Karjat/Overview/key-investment-factors.json";
import investmentCase from "../../../../../../../json/IndiaInvestment/Karjat/Overview/investment-case.json";
import strategicAdvantages from "../../../../../../../json/IndiaInvestment/Karjat/Overview/strategic-advantages.json";

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
                                    <th className="text-primary text-end">Key Distance:</th>
                                    <th>Avg Villa Price:</th>
                                    <th className="text-primary text-end">₹5,800/sqft</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Key Distance:</td>
                                    <td className="text-end">Panvel 37-40 km</td>
                                    <td>Plot Range:</td>
                                    <td className="text-primary text-end">₹9.6L - ₹1.09Cr+</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* INFRASTRUCTURE & GCONNECTIVITY */}
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
                                    <th>Timeline & Upcoming</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>MTHL (Atal Setu):</td>
                                    <td className="text-primary text-end">Operational</td>
                                    <td>Rail Operations:</td>
                                    <td className="text-primary text-end">Dec 2025</td>
                                </tr>

                                <tr>
                                    <td>Panvel-Karjat Rail:</td>
                                    <td className="text-end">67-70% Complete</td>
                                    <td>NMIA Terminal-1:</td>
                                    <td className="text-primary text-end">Oct 2025</td>
                                </tr>

                                <tr>
                                    <td>Access Route:</td>
                                    <td className="text-end">Sion-Panvel Expwy</td>
                                    <td>MMC Rollout:</td>
                                    <td className="text-end">2026+</td>
                                </tr>

                                <tr>
                                    <td>Market Type:</td>
                                    <td className="text-end">Adventure Tourism Hub</td>
                                    <td>Planning Framework:</td>
                                    <td className="text-end">NAINA/CIDCO</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td className="text-end"></td>
                                    <td>Investment Grade:</td>
                                    <td className="text-primary text-end">High Potential</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* MARKET DESCRIPTION */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Body>
                        <h3 className="fs-16 mb-2">Market Description</h3>
                        <p className="fs-12">
                            Karjat represents Maharashtra's premier adventure tourism destination with significant infrastructure developments underway.
                            The Mumbai Trans Harbour Link (Atal Setu) opened January 2024, while the Panvel-Karjat suburban rail corridor (67-70% complete)
                            targets December 2025 operations. Proximity to the upcoming Navi Mumbai International Airport (Terminal-1 opening October 2025)
                            positions Karjat as a strategic investment location within the Mumbai Metropolitan Region's growth corridor.
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

                {/* WHY KARJAT - THE INVESTMENT CASE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Why Karjat - The Investment Case</Card.Title>
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

                {/* WHY DUBAI - INVESTMENT CASE */}
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
        </React.Fragment>
    )

}