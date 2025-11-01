import React from "react";
import "./location.scss";
import { Card, Col, Row } from "react-bootstrap";

export default function Location() {
    const strategic_location = [
        "Strategic tri-city location midway between Mumbai, Pune, and Lonavala",
        "Direct Mumbai-Pune Expressway access with Missing Link tunnel time savings",
        "Central Railway suburban line terminus connecting directly to Mumbai CST",
        "Imagicaa Theme Park established tourism anchor ensuring year-round footfall",
        "Mixed tourism-industrial economy providing employment base stability",
        "NMIA 2025 within 1-hour access creating airport spillover investment opportunity",
    ];

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* UPCOMING GOVERNMENT & UBFRASTRUCTURE PROJECTS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Upcoming Government & Infrastructure Projects</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="land-plot-wrapper">
                            <div>
                                <h4 className="column-title">Transport & Connectivity Upgrades</h4>
                                <Row className="g-3">
                                    {[
                                        {
                                            color: "#00c951",
                                            bgColor: "#f0fdf4",
                                            title: "Missing Link Expressway Tunnel",
                                            description: "Expected completion 2025 - will cut travel time and reduce bottlenecks",
                                        },
                                        {
                                            color: "#2b7fff",
                                            bgColor: "#eff6ff",
                                            title: "Panvel-Karjat Suburban Rail Corridor",
                                            description: "29.6 km MUTP-III project enhancing regional connectivity",
                                        },
                                        {
                                            color: "#a855f7",
                                            bgColor: "#f5f3ff",
                                            title: "Road & Local Expansions",
                                            description: "State-level widening and link roads improving last-mile access",
                                        }
                                    ].map((item, index) => (
                                        <Col sm={12} key={index}>
                                            <div className="land-plot-card" style={{ backgroundColor: item.bgColor }}>
                                                <span className="dot" style={{ backgroundColor: item.color }}></span>
                                                <div>
                                                    <h5 className="title">{item.title}</h5>
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            <div>
                                <h4 className="column-title last">Industrial & Development Projects</h4>
                                <Row className="g-3">
                                    {[
                                        {
                                            color: "#f97316",
                                            bgColor: "#fff7ed",
                                            title: "LATIM Industrial Park",
                                            description: "30-40 acres Phase-1 on Khopoli-Pali road creating employment hub",
                                        },
                                        {
                                            color: "#00c951",
                                            bgColor: "#f0fdf4",
                                            title: "NeoLiv Institutional Projects",
                                            description: "₹600Cr GDV + ₹150Cr plotted development bringing infrastructure",
                                        },
                                        {
                                            color: "#2b7fff",
                                            bgColor: "#eff6ff",
                                            title: "Healthcare Infrastructure",
                                            description: "5 doctor-dispensaries project by 2026-27 enhancing social infrastructure",
                                        }
                                    ].map((item, index) => (
                                        <Col sm={12} key={index}>
                                            <div className="land-plot-card" style={{ backgroundColor: item.bgColor }}>
                                                <span className="dot" style={{ backgroundColor: item.color }}></span>
                                                <div>
                                                    <h5 className="title">{item.title}</h5>
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                {/* COMPLIANCE CHECKLIST MAHARASHTRA */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Compliance Checklist (Maharashtra)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            <Col md={4} sm={12}>
                                <Card className="compliance-card h-100">
                                    <Card.Body>
                                        <Card.Title>Legal Documentation</Card.Title>
                                        <ul>
                                            <li className="compliance-item text-blue">7/12 Extract for ownership & mutation</li>
                                            <li className="compliance-item text-blue">NA Conversion Order essential for construction</li>
                                            <li className="compliance-item text-blue">MahaRERA Registration (projects ≥500 sqm/8+ units)</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} sm={12}>
                                <Card className="compliance-card h-100">
                                    <Card.Body>
                                        <Card.Title>Environmental & Planning</Card.Title>
                                        <ul>
                                            <li className="compliance-item text-green">Environmental clearances (hills/rivers/forest)</li>
                                            <li className="compliance-item text-green">Municipal approvals & layout sanction</li>
                                            <li className="compliance-item text-green">FSI compliance & building permissions</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={4} sm={12}>
                                <Card className="compliance-card h-100">
                                    <Card.Body>
                                        <Card.Title>Title Verification</Card.Title>
                                        <ul>
                                            <li className="compliance-item text-purple">Chain of title verification (30-year)</li>
                                            <li className="compliance-item text-purple">Encumbrance certificate checking</li>
                                            <li className="compliance-item text-purple">Revenue records & survey settlement</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* STRATEGIC LOCATION ADVANTAGES */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Strategic Location Advantages</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="location-highlights">
                            <ul className="highlight-list">
                                {strategic_location.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </Card.Body>
                </Card>

                {/* RIS & INVESTMENT CONSIDERATIONS */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Risks & Investment Considerations</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="project-risks-wrapper">
                            {[
                                {
                                    color: "#ff6900",
                                    bgColor: "#fff7ed",
                                    title: "Industrial Adjacency Risk",
                                    description: "Some zones near MIDC hubs may face noise/pollution - location choice matters",
                                },
                                {
                                    color: "#2b7fff",
                                    bgColor: "#eff6ff",
                                    title: "Monsoon Flooding",
                                    description: "Low-lying areas require proper drainage planning and flood-path assessment",
                                },
                                {
                                    color: "#fb2c36",
                                    bgColor: "#fef2f2",
                                    title: "Infrastructure Timing Drift",
                                    description: "Airport ramp-up and last-mile road upgrades can experience delays. Use conservative absorption/ADR assumptions in financial modeling.",
                                },
                                {
                                    color: "#f0b100",
                                    bgColor: "#fefce8",
                                    title: "Project Due Diligence",
                                    description: 'Some developers push "Lonavala extension" branding - independent verification needed',
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

                {/* PROJECT TIMELINE & SENSTIVITY ANALYSIS */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Project Timeline & Sensitivity Analysis</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="infrastructure-dependencies">
                            <h4>Infrastructure Dependencies</h4>
                            <ul>
                                <li>Many projects are in planning/DPR/early construction phases</li>
                                <li>Missing Link tunnel is critical infrastructure bet - valuations depend on timely completion</li>
                                <li>Private developments move faster when anchor infrastructure is assured</li>
                                <li>Zoning changes/DP revisions may experience municipal/state approval delays</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </React.Fragment>
    )
}