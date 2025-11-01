import React from "react";
import "./overview.scss"
import { Card, Col, Row, Table } from "react-bootstrap";
import growthIndicators from "../../../../../../../json/IndiaInvestment/Khopoli/Overview/growth-indicators.json";
import keyInvestmentFactors from "../../../../../../../json/IndiaInvestment/Khopoli/Overview/key-investment-factors.json";
import uniqueSellingPoint from "../../../../../../../json/IndiaInvestment/Khopoli/Overview/unique-selling-points.json";

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
                                    <th>Connectivity:</th>
                                    <th className="text-end">Expressway + Rail + Airport</th>
                                    <th>Plot Range:</th>
                                    <th className="text-primary text-end">₹1.8k - ₹4k/sqft</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Location Type:</td>
                                    <td className="text-end">Tri-city Strategic Hub</td>
                                    <td>Villa Range:</td>
                                    <td className="text-primary text-end">₹50L - ₹4Cr</td>
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
                                    <th>Major Upcoming Projects</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mumbai-Pune Expressway:</td>
                                    <td className="text-primary text-end">Direct Access</td>
                                    <td>Missing Link Tunnel:</td>
                                    <td className="text-primary text-end">2025 Completion</td>
                                </tr>

                                <tr>
                                    <td>Central Railway:</td>
                                    <td className="text-primary text-end">Suburban Terminus</td>
                                    <td>Time Savings:</td>
                                    <td className="text-primary text-end">20-25 Minutes</td>
                                </tr>

                                <tr>
                                    <td>Imagicaa Theme Park:</td>
                                    <td className="text-end">Tourism Anchor</td>
                                    <td>NMIA Access:</td>
                                    <td className="text-primary text-end">2025 (~1 hr)</td>
                                </tr>

                                <tr>
                                    <td>Economic Base:</td>
                                    <td className="text-end">Tourism-Industrial Hybrid</td>
                                    <td>NeoLiv Projects:</td>
                                    <td className="text-primary text-end">₹600Cr + ₹150Cr GDV</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td className="text-end"></td>
                                    <td>Investment Grade:</td>
                                    <td className="text-primary text-end">Emerging Growth Hub</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* LOCATION & ECONOMIC PROFILE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Location & Economic Profile</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Geographic & Climate</th>
                                    <th></th>
                                    <th>Economic Foundation</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Location:</td>
                                    <td className="text-success text-end">Sahyadri Foothills</td>
                                    <td>Industrial Base:</td>
                                    <td className="text-primary text-end">MIDC Hub Established</td>
                                </tr>

                                <tr>
                                    <td>Climate:</td>
                                    <td className="text-primary text-end">Hill Station Adjacent</td>
                                    <td>Tourism Anchor:</td>
                                    <td className="text-primary text-end">Imagicaa Theme Park</td>
                                </tr>

                                <tr>
                                    <td>Natural Assets:</td>
                                    <td className="text-success text-end">Waterfalls & Trekking</td>
                                    <td>Employment:</td>
                                    <td className="text-dark text-end">Logistics + Hospitality</td>
                                </tr>

                                <tr>
                                    <td>Tourism Type:</td>
                                    <td className="text-end">Weekend & Monsoon</td>
                                    <td>Market Type:</td>
                                    <td className="text-end" style={{ color: "#f54a00" }}>Mixed-Use Growth Hub</td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* INVESTMENT BENEFITS SECTION */}
                        <div className="investment-benefits-section">
                            {[
                                {
                                    title: "Strategic Investment Benefits",
                                    items: [
                                        [
                                            "40-50% lower entry cost vs. Lonavala pricing",
                                            "Dual economy ensures year-round demand stability",
                                        ],
                                        [
                                            "Same infrastructure catalysts as premium locations",
                                            "Tourism anchor creates immediate rental opportunities",
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
                            Khopoli, once known primarily as an industrial town along the foothills of the Sahyadris, is rapidly transforming into a mixed-use growth hub.
                            With mega infrastructure catalysts, rising demand for affordable second homes, weekend tourism, and strong industrial-commercial underpinnings,
                            Khopoli is poised to emerge as the investment gateway between Mumbai, Pune, and Lonavala. Whether it's land banking, affordable gated communities,
                            or strategically located plots near upcoming infra — Khopoli offers a rare blend of ROI, growth safety,
                            and affordability that few locations can match today.
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

                {/* WHY DUBAI - INVESTMENT CASE */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Unique Selling Points</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            {uniqueSellingPoint.map((item, index) => (
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