import React from "react";
import "./investments.scss";
import { Col, Row, Card, Table, Button } from "react-bootstrap";

export default function Investments() {
    const segments = [
        {
            title: "Weekend-First Families",
            description:
                "Gated villa communities near Mandwa/Kihim with managed services + rental potential",
            strategy: "Strategy: Turnkey luxury with hospitality partnerships",
            color: "#2563eb",
        },
        {
            title: "Design-Led Buyers",
            description:
                "Bespoke NA bungalow sites with view/orchard potential in Awas-Sasawane-Zirad",
            strategy: "Strategy: Architectural freedom with coastal premium",
            color: "#16a34a",
        },
        {
            title: "Investors (5–8 Years)",
            description:
                "Larger land banks off jetty belt; ride access + airport halo appreciation",
            strategy:
                "Strategy: Infrastructure-driven value creation with development upside",
            color: "#2563eb",
        },
        {
            title: "Yield Hunters",
            description:
                "Hospitality-overlay villas with transparent revenue-share + owner-use calendar",
            strategy: "Strategy: Managed rental pools with professional operators",
            color: "#b45309",
        },
    ];

    const approachData = [
        {
            title: "Conservative Investment Approach",
            sub_title: "Expect broader catchment (fly-in weekends, corporates). Do not price today on blue-sky scenarios; treat airport as a demand accelerator, not your only thesis.",
            des: "Base pricing on current access trifecta; NMIA upside is additional value creation potential."
        },
    ];

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Target Buyer Profiles & Strategy</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            {segments.map((item, index) => (
                                <Col md={6} sm={12} key={index}>
                                    <div className="buyer-segment-card">
                                        <h5 style={{ color: item.color }}>{item.title}</h5>
                                        <p>{item.description}</p>
                                        <a href="#" className="strategy">
                                            {item.strategy}
                                        </a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>

                {/* COMPREHENSIVE ENVIRONMENTAL PROFILE */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Rental Yields & Performance Logic</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table className="table w-100" responsive>
                            <thead>
                                <tr>
                                    <th>Sea-Access Belts Performance</th>
                                    <th></th>
                                    <th>Town/Varsoli Performance</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Coverage Area:</td>
                                    <td className="text-primary text-end">Mandwa-Kihim-Awas</td>
                                    <td>Usage Pattern:</td>
                                    <td className="text-primary text-end">Year-round Steady</td>
                                </tr>

                                <tr>
                                    <td>ADR Performance:</td>
                                    <td className="text-success text-end">Premium Tier</td>
                                    <td>ADR Level:</td>
                                    <td className="text-end" style={{ color: "#f54a00" }}>Lower but Consistent</td>
                                </tr>

                                <tr>
                                    <td>Peak Demand:</td>
                                    <td className="text-primary text-end">3-5BHK Pool Villas</td>
                                    <td>Occupancy:</td>
                                    <td className="text-success text-end">Higher Utilization</td>
                                </tr>

                                <tr>
                                    <td>Access Advantage:</td>
                                    <td className="text-end text-success">Ro-Ro Car-Borne Stays</td>
                                    <td>Best For:</td>
                                    <td className="text-primary text-end">Hybrid Live-and-Rent</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* 5-YEAR INVESTMENT OUTLOOK (2025-2025) */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">5-Year Investment Outlook (2025-2030)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="project-risks-wrapper">
                            {[
                                {
                                    color: "#00c951",
                                    bgColor: "#f0fdf4",
                                    title: "Access Stack Impact",
                                    description: "MTHL + ferries + NMIA ramp-up should deepen demand and compress vacancy",
                                },
                                {
                                    color: "#2b7fff",
                                    bgColor: "#eff6ff",
                                    title: "Supply Discipline",
                                    description: "Naturally capped by CRZ, slopes, limited premium plots - supporting price discipline",
                                },
                                {
                                    color: "#ad46ff",
                                    bgColor: "#faf5ff",
                                    title: "Base Case Scenario",
                                    description: "Prime gated assets can compound steadily with infrastructure-driven appreciation",
                                },
                                {
                                    color: "#d4af37",
                                    bgColor: "#faf7eb",
                                    title: "Bull Case Scenario",
                                    description: "Tourism + airport + brand converts Alibaug into year-round eco-luxury district for MMR",
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

                {/* POST-NMIA MARKET IMPACT ANALYSIS */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Post-NMIA Market Impact Analysis</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {approachData.map((item, index) => (
                            <div key={index} className="approach-card">
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