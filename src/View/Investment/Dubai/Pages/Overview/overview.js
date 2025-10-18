import React from "react";
import "./overview.scss"
import { Alert, Badge, Button, Card, Col, Row, Table } from "react-bootstrap";
import strategicAdvantages from "../../../../../json/Location/DubaiExmplore/Overview/strategic-advantages.json";
import growthIndicators from "../../../../../json/Location/DubaiExmplore/Overview/growth-indicators.json";
import keyInvestmentFactors from "../../../../../json/Location/DubaiExmplore/Overview/key-investment-factors.json";
import investmentCase from "../../../../../json/Location/DubaiExmplore/Overview/investment-case.json";

export default function OverviewView() {
    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* QUICK FACTS & METRICS */}
                <Card className="card-one h-auto mb-3">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Quick Facts & Metrics</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100">
                            <thead>
                                <tr>
                                    <th>Tax Rate:</th>
                                    <th className="text-primary text-end">0% Personal Tax</th>
                                    <th>Avg Studio Price:</th>
                                    <th className="text-primary text-end">AED 500K - 800K</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Golden Visa:</td>
                                    <td className="text-end">10 Years</td>
                                    <td>Rental Yield:</td>
                                    <td className="text-primary text-end">12% - 18%+</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* INFRASTRUCTURE & GLOBAL CONNECTIVITY */}
                <Card className="card-one h-auto mb-3">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Infrastructure & Global Connectivity</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100">
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
                                    <td>Metro Network:</td>
                                    <td className="text-primary text-end">Fully Operational</td>
                                    <td>Al Maktoum Airport:</td>
                                    <td className="text-primary text-end">2027</td>
                                </tr>

                                <tr>
                                    <td>Airport Connectivity:</td>
                                    <td className="text-end">260+ Destinations</td>
                                    <td>Dubai South:</td>
                                    <td className="text-primary text-end">67% Complete</td>
                                </tr>

                                <tr>
                                    <td>Business Hubs:</td>
                                    <td className="text-end">DIFC, DMCC</td>
                                    <td>Creek Harbour:</td>
                                    <td className="text-end">2025+</td>
                                </tr>

                                <tr>
                                    <td>Market Type:</td>
                                    <td className="text-end">Global Financial Hub</td>
                                    <td>Master Plan:</td>
                                    <td className="text-end">Dubai 2040</td>
                                </tr>

                                <tr>
                                    <td>Legal Framework</td>
                                    <td className="text-end">Common Law System</td>
                                    <td>Investment Grade:</td>
                                    <td className="text-primary text-end">AAA Emerging</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* MARKET DESCRIPTION */}
                <Card className="card-one h-auto mb-3">
                    <Card.Body>
                        <h3 className="fs-16 mb-2">Market Description</h3>
                        <p className="fs-12">Dubai has established itself as the premier real estate investment destination in the Middle East, offering unparalleled opportunities for
                            international investors. With its strategic location connecting East and West, world-class infrastructure,
                            and business-friendly environment, Dubai continues to attract global capital and deliver exceptional returns.
                            The emirate's 0% personal tax policy, Golden Visa program, and robust legal framework make it an ideal destination for
                            high-net-worth individuals seeking tax-efficient wealth creation and long-term residency options.</p>
                    </Card.Body>
                </Card>

                {/* STRATEGIC ADVANTAGE */}
                <Card className="card-one h-auto mb-3">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Strategic Advantages</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Row className="g-3">
                            {strategicAdvantages.map((item, index) => (
                                <Col md={6} key={index}>
                                    <div className="product-wrapper fs-14 p-2">
                                        <i className="ri-arrow-right-up-line align-middle text-primary"></i> <span className="align-middle">{item?.name}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* GROWTH INDICATORS */}
                <Card className="card-one h-auto mb-3">
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
                <Card className="card-one h-auto mb-3">
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
                <Card className="card-one h-auto mb-3">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Why Dubai - The Investment Case</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {investmentCase.map((item, index) => (
                            <div key={index} className="investment-case-wrapper">
                                <h3 className="fs-14 mb-2 fw-semibold">{index + 1} {item.name}</h3>
                                <div className="ps-2 pe-2">
                                    {item?.business_environment?.map((business, index) => (
                                        <Alert key={index} variant={business.status}>
                                            <Badge bg={business.status}></Badge>
                                            <span>{business.name}</span>
                                        </Alert>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Card.Body>
                </Card>

                {/* ENVIREMENT */}
                <Row className="g-3 mb-3">
                    {[
                        {
                            "icon": "ri-shield-star-line",
                            "name": "Tax-Free Environment",
                            "des": "Zero personal income tax, capital gains tax, and property tax for investors"
                        },
                        {
                            "icon": "ri-star-line",
                            "name": "Golden Visa Program",
                            "des": "10-year residency visa for property investors with investment of AED 2M+"
                        },
                        {
                            "icon": "ri-plane-line",
                            "name": "Global Connectivity",
                            "des": "Dubai International Airport connects to 260+ destinations worldwide"
                        },
                        {
                            "icon": "ri-global-line",
                            "name": "Business Hub",
                            "des": "Strategic location between Europe, Asia, and Africa for business"
                        }
                    ].map((item, index) => (
                        <Col md={6} key={index}>
                            <Card className="card-one h-auto">
                                <div className="p-3">
                                    <div className="environment-wrapper">
                                        <div>
                                            <div className="environment-icon">
                                                <i className={item?.icon}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="fs-18 mb-1">{item?.name}</h3>
                                            <p className="fs-14">{item?.des}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* READY TO INVEST IN DUBAI */}
                <Card className="card-one h-auto">
                    <Card.Body>
                        <h3 className="fs-14">Ready to Invest in Dubai?</h3>
                        <p className="fs-12">Speak with our Dubai investment specialists today</p>
                        <div className="d-flex gap-2 mt-3">
                            <Button variant="primary" className="fs-14" type="buttobn">
                                <i className="ri-phone-line me-1 align-middle"></i>
                                <span className="align-middle">Call Now</span>
                            </Button>
                            <Button variant="outline-secondary" className="fs-14" type="buttobn">
                                <i className="ri-calendar-line me-1 align-middle"></i>
                                <span className="align-middle">Schedule Meeting</span>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    )

}