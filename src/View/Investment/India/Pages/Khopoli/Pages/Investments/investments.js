import React from "react";
import "./investments.scss";
import { Col, Row, Card, Table } from "react-bootstrap";

export default function Investments() {
    const segments = [
        {
            title: "Families / First-Time Buyers",
            description: "Affordable villas & gated communities with family-friendly amenities",
            strategy: "Strategy: Entry-level second homes with Imagicaa proximity advantage",
            color: "#2563eb",
        },
        {
            title: "Investors (Short to Medium-term)",
            description: "NA plots near Expressway/Imagicaa for infrastructure catalyst appreciation",
            strategy: "Strategy: 5-7 year appreciation play with Missing Link/NMIA tailwinds",
            color: "#16a34a",
        },
        {
            title: "NRIs / Mid-HNIs",
            description: "Villas for rental + lifestyle with lower entry vs. Lonavala/Alibaug",
            strategy: "Strategy: Affordable alternative with same connectivity benefits",
            color: "#2563eb",
        },
        {
            title: "Hospitality Investors",
            description: "Airbnb clusters near Imagicaa & Expressway junctions",
            strategy: "Strategy: Tourism anchor proximity for managed rental income",
            color: "#b45309",
        },
    ];

    const investment_bottomline = [
        {
            title: "Strategic Investment Opportunity",
            sub_title: `Khopoli is transitioning from an industrial outpost to a multi-use investment corridor. With the Expressway, NMIA, Imagicaa, and rising second-home demand, it offers a rare mix of affordability, growth potential, and dual-use (residential + rental) opportunities.`,
            des: "For investors priced out of Lonavala or Alibaug, Khopoli presents a smart, early-stage play with both lifestyle and ROI upside."
        },
    ];

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* TARGET BUYER PROFILES & STRATEGY */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Target Investment Profiles</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            {segments.map((item, index) => (
                                <Col md={6} sm={12} key={index}>
                                    <div className="buyer-segment-card">
                                        <h5 style={{ color: item.color }}>{item.title}</h5>
                                        <p>{item.description}</p>
                                        <a href="#" className="strategy">{item.strategy}</a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* COMPREHENSIVE ENVIRONMENTAL PROFILE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Rental Market Performance</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Weekend Villa Rentals</th>
                                    <th></th>
                                    <th>Homestay & Hospitality</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Weekend Rate:</td>
                                    <td className="text-primary text-end">₹8,000 - ₹18,000/night</td>
                                    <td>Homestay Demand:</td>
                                    <td className="text-primary text-end">Strong Seasonal</td>
                                </tr>

                                <tr>
                                    <td>Peak Season:</td>
                                    <td className="text-success text-end">Monsoon & Winters</td>
                                    <td>Business Model:</td>
                                    <td className="text-success text-end">Hybrid Resort Homes</td>
                                </tr>

                                <tr>
                                    <td>Target Market:</td>
                                    <td className="text-primary text-end">Mumbai-Pune Families</td>
                                    <td>Platform:</td>
                                    <td className="text-primary text-end">Airbnb Integration</td>
                                </tr>

                                <tr>
                                    <td>Occupancy Driver:</td>
                                    <td className="text-end" style={{ color: "#f54a00" }}>Imagicaa Proximity</td>
                                    <td>Management:</td>
                                    <td className="text-end" style={{ color: "#9810fa" }}>Professional Pools</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* VISION 2030 - KHOPOLI'S TRAJECTION */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Vision 2030 - Khopoli's Trajectory</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="project-risks-wrapper">
                            {[
                                {
                                    color: "#00c951",
                                    bgColor: "#f0fdf4",
                                    title: "Tourism-Industrial Hybrid Hub",
                                    description: "Both weekend tourism and employment-driven housing demand sustainability",
                                },
                                {
                                    color: "#2b7fff",
                                    bgColor: "#eff6ff",
                                    title: "Residential Spillover Market",
                                    description: "Benefiting from Navi Mumbai Airport and Expressway upgrades infrastructure push",
                                },
                                {
                                    color: "#ad46ff",
                                    bgColor: "#faf5ff",
                                    title: "Affordable Second-Home Destination",
                                    description: "Positioned as the affordable cousin of Lonavala for middle-class segment",
                                },
                                {
                                    color: "#d4af37",
                                    bgColor: "#faf7eb",
                                    title: "Financial Performance Target",
                                    description: "20-25% appreciation on NA plots and 6-8% rental yields for managed villas",
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

                {/* INVESTMENT BOTTOMLINE */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Investment Bottomline</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {investment_bottomline.map((item, index) => (
                            <div key={index} className="investment-bottomline">
                                <h3>{item.title}</h3>
                                <p>{item.sub_title}</p>
                                <h5>{item.des}</h5>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    )
}