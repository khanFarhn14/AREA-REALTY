import React from "react";
import "./property.scss";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import propertyPortfolioList from "../../../../../../../json/IndiaInvestment/Karjat/Properties/property-portfolio.json";
import propertiesInfo from "../../../../../../../json/IndiaInvestment/Karjat/Properties/property-info.json";

export default function PropertyView() {
    return (
        <React.Fragment>
            <div className="property-wrapper">

                {/* PROPERTY PORTFOLIO */}
                <div className="property-portfolio-wrapper">
                    <Row className="g-3">
                        {propertyPortfolioList.map((item, index) => (
                            <Col md={4} sm={12} key={index}>
                                <div className="property-card">
                                    <div className="property-header">
                                        <span className="availability">{item?.available} Available</span>
                                    </div>

                                    <div className="property-body">
                                        <h3 className="property-title">{item?.name}</h3>
                                        <h2 className="property-price">{item?.price}</h2>
                                        <p className="price-range">{item?.price_des}</p>

                                        <div className="property-specs">
                                            <div className="spec">
                                                <h4>{item?.bedrooms}</h4>
                                                <p>Bedrooms</p>
                                            </div>
                                            <div className="spec">
                                                <h4>{item?.bathrooms}</h4>
                                                <p>Bathrooms</p>
                                            </div>
                                            <div className="spec">
                                                <h4>{item?.square_fit}</h4>
                                                <p>Sq.Ft.</p>
                                            </div>
                                        </div>

                                        <ul className="property-features">
                                            {item?.list.map((l, i) => (
                                                <li key={i}><i className="ri-arrow-right-s-line"></i> {l}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="property-footer">
                                        <Button variant="primary" className="w-100">View Details</Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* MARKET STATISTICS */}
                <Card className="card-one h-auto market-statistics">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Market Statistics</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100">
                            <thead>
                                <tr>
                                    <th>Segment</th>
                                    <th className="text-end">Avg Price/sqft	</th>
                                    <th className="text-end">Rental Yield</th>
                                    <th className="text-end">Supply</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Luxury Apartments</td>
                                    <td className="text-end">AED 2,800</td>
                                    <td className="text-end text-success">6.2%</td>
                                    <td className="text-end">Limited</td>
                                </tr>
                                <tr>
                                    <td>Premium Villas</td>
                                    <td className="text-end">AED 1,950</td>
                                    <td className="text-end text-success">5.8%</td>
                                    <td className="text-end">Moderate</td>
                                </tr>
                                <tr>
                                    <td>Commercial Spaces</td>
                                    <td className="text-end">AED 1,650</td>
                                    <td className="text-end text-success">7.1%</td>
                                    <td className="text-end">Available</td>
                                </tr>
                                <tr>
                                    <td>Waterfront Estates</td>
                                    <td className="text-end">AED 4,200</td>
                                    <td className="text-end text-success">4.9%</td>
                                    <td className="text-end">Exclusive</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* PROPERTY INFO CAR */}
                <Row className="g-3">
                    {propertiesInfo.map((item, index) => (
                        <Col md={4} sm={12} key={index}>
                            <div className="property-info-card">
                                <div className="header">
                                    <h3>{item.title}</h3>
                                    <span className="tag">{item.tag}</span>
                                </div>
                                <p className="subtitle">{item.description}</p>

                                <div className="stats">
                                    <div className="item">
                                        <p className="label">Investment</p>
                                        <p className="value">{item.investment}</p>
                                    </div>
                                    <div className="item">
                                        <p className="label">Yield</p>
                                        <p className="value yield">{item.yield}</p>
                                    </div>
                                </div>

                                <ul className="features">
                                    {item.features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </React.Fragment>
    )
}