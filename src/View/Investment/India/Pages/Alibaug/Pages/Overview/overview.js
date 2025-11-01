import React from "react";
import "./overview.scss"
import { Card, Col, Row, Table } from "react-bootstrap";
import growthIndicators from "../../../../../../../json/IndiaInvestment/Alibaug/Overview/growth-indicators.json";
import keyInvestmentFactors from "../../../../../../../json/IndiaInvestment/Alibaug/Overview/key-investment-factors.json";
import strategicAdvantages from "../../../../../../../json/IndiaInvestment/Alibaug/Overview/strategic-advantages.json";

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
                                    <th>Access Time:</th>
                                    <th className="text-end">Mumbai ~1.5 hrs total</th>
                                    <th>Villa Price Range:</th>
                                    <th className="text-primary text-end">₹1.25Cr - ₹15Cr+</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ferry Route:</td>
                                    <td className="text-end">64 km via expressway</td>
                                    <td>Plot Rate Range:</td>
                                    <td className="text-primary text-end">₹1k - ₹15k/sqft</td>
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
                                    <td>Atal Setu (MTHL):</td>
                                    <td className="text-primary text-end">Operational</td>
                                    <td>NMIA Terminal-1:</td>
                                    <td className="text-primary text-end">Oct 2025</td>
                                </tr>

                                <tr>
                                    <td>Ro-Ro Ferry Service:</td>
                                    <td className="text-primary text-end">Multiple Daily</td>
                                    <td>Airlines Status:</td>
                                    <td className="text-primary text-end">Lining Up Schedules</td>
                                </tr>

                                <tr>
                                    <td>Ferry Duration:</td>
                                    <td className="text-end">~1 hr pier-to-pier</td>
                                    <td>Access Impact:</td>
                                    <td className="text-end">Demand Accelerator</td>
                                </tr>

                                <tr>
                                    <td>Market Type:</td>
                                    <td className="text-end">Luxury Coastal Investment</td>
                                    <td>Institutional Activity:</td>
                                    <td className="text-primary text-end">Peninsula Land Acquisition</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td className="text-end"></td>
                                    <td>Investment Grade:</td>
                                    <td className="text-primary text-end">Medium-term Compelling</td>
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
                                    <th>Climate & Geography</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AQI Status:</td>
                                    <td className="text-success text-end">Good/Moderate</td>
                                    <td>Climate Type:</td>
                                    <td className="text-primary text-end">Tropical Coastal</td>
                                </tr>

                                <tr>
                                    <td>PM2.5 Levels:</td>
                                    <td className="text-success text-end">15-16 μg/m³</td>
                                    <td>Sea Breeze:</td>
                                    <td className="text-primary text-end">Consistent Year-round</td>
                                </tr>

                                <tr>
                                    <td>vs Mumbai Core:</td>
                                    <td className="text-success text-end">Materially Cleaner</td>
                                    <td>Best Season:</td>
                                    <td className="text-end">Oct - March</td>
                                </tr>

                                <tr>
                                    <td>Location Type:</td>
                                    <td className="text-end">Sea level coastal</td>
                                    <td>Supply Constraint:</td>
                                    <td className="text-end" style={{color: "#f54a00"}}>CRZ-Limited Plots</td>
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
                                            "Coastal air quality materially better than Mumbai",
                                            "Sea breeze provides natural cooling and wellness",
                                        ],
                                        [
                                            "Outdoor living value tangible for rental appeal",
                                            "Weekend tourism drives consistent rental demand",
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
                            South Mumbai's Atal Setu (MTHL) is open, Ro-Ro ferries are frequent, and Navi Mumbai International Airport (NMIA) has its DGCA 
                            aerodrome licence with Terminal-1 targeted to open in Oct '25. Access + brand + limited coastal supply = a compelling medium-term investment case. 
                            Alibaug represents Mumbai's luxury coastal investment corridor with established hospitality ecosystem, 
                            celebrity endorsement cementing aspirational status, and natural supply constraints driving premium valuations.
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

            </div>
        </React.Fragment>
    )

}