import React from "react";
import "./location.scss";
import { Card, Col, Row } from "react-bootstrap";

export default function Location() {
    const complianceData = [
        {
            title: "Title & Land Use (Maharashtra)",
            items: [
                "7/12 extract + e-mutation (Ferfar) verification",
                "Title search (30-year chain) comprehensive review",
                "Encumbrance certificate with liability assessment",
                "NA order (if agricultural use conversion required)",
            ],
            color: "#2563eb", // blue bullets
        },
        {
            title: "CRZ & RERA Critical Requirements",
            items: [
                "MahaRERA registration (projects ≥500 m² or ≥8 units)",
                "CRZ Notification, 2019 compliance verification",
                "MCZMA clearance as applicable for coastal activities",
                "Self-dwelling homes ~300 m² (delegated local approvals)",
            ],
            colors: ["#dc2626", "#dc2626", "#dc2626", "#16a34a"], // per bullet color
        },
    ];

    const footerNote = {
        title: "Our Comprehensive Compliance Pack",
        description:
            `We provide CRZ status map overlay, HTL/LTL references, MCZMA notes, NA/RERA documentation, and access affidavit for every 
            short-listed site before investment commitment.`,
    };

    const strategic_location = [
        "1 hour Mumbai ferry access via Ro-Ro/fast ferries (multiple daily sailings)",
        "Atal Setu (MTHL) operational - cuts cross-harbour time significantly",
        "NMIA Terminal-1 opening Oct 2025 within strategic access arc",
        "Celebrity purchases and institutional buying signal market confidence",
        "Established hospitality ecosystem with global brands (Radisson Blu)",
        "CRZ regulations create natural supply scarcity supporting price discipline",
    ];

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* COMPLIANCE IN COASTAL ALIBAUG */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Compliance in Coastal Alibaug (Non-Negotiable)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            {complianceData.map((section, sIndex) => (
                                <Col md={6} sm={12} key={sIndex}>
                                    <Card className="compliance-card h-100">
                                        <Card.Body>
                                            <Card.Title>{section.title}</Card.Title>
                                            <ul>
                                                {section.items.map((item, i) => {
                                                    // pick color from array or default
                                                    const color = Array.isArray(section.colors) && section.colors[i] ? section.colors[i] : section.color;
                                                    // map hex or color codes to class
                                                    let colorClass = "";
                                                    if (color === "#dc2626") colorClass = "text-red";
                                                    else if (color === "#16a34a") colorClass = "text-green";
                                                    else if (color === "#2563eb") colorClass = "text-blue";
                                                    else colorClass = "text-default";

                                                    return (
                                                        <li key={i} className={`compliance-item ${colorClass}`}>{item}</li>
                                                    );
                                                })}
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <div className="compliance-footer">
                            <h3>{footerNote?.title}</h3>
                            <h5>{footerNote?.description}</h5>
                        </div>
                    </Card.Body>
                </Card>

                {/* COMPREHENSIVE DUE-DILIGENCE CHECKLIST */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Comprehensive Due-Diligence Checklist</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="g-3">
                            <Col md={4} sm={12}>
                                <Card className="compliance-card h-100">
                                    <Card.Body>
                                        <Card.Title>Legal & Regulatory</Card.Title>
                                        <ul>
                                            <li className="compliance-item text-blue">CRZ category (I/II/III/IV) classification</li>
                                            <li className="compliance-item text-blue">HTL buffer zone verification</li>
                                            <li className="compliance-item text-blue">CZMP screenshot validation</li>
                                            <li className="compliance-item text-blue">MCZMA/EC conditions assessment</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} sm={12}>
                                <Card className="compliance-card h-100">
                                    <Card.Body>
                                        <Card.Title>Technical & Infrastructure</Card.Title>
                                        <ul>
                                            <li className="compliance-item text-green">Flood-path & stormwater design analysis</li>
                                            <li className="compliance-item text-green">Slope stability & soil bearing capacity</li>
                                            <li className="compliance-item text-green">Power/water availability & borewell testing</li>
                                            <li className="compliance-item text-green">Approach road width & right-of-way</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={4} sm={12}>
                                <Card className="compliance-card h-100">
                                    <Card.Body>
                                        <Card.Title>Planning & Strategy</Card.Title>
                                        <ul>
                                            <li className="compliance-item text-purple">Zoning/FSI under local DCR regulations</li>
                                            <li className="compliance-item text-purple">Society/MC formation planning</li>
                                            <li className="compliance-item text-purple">Exit strategy optimization (resale/rental/hold)</li>
                                            <li className="compliance-item text-purple">Rental yield potential assessment</li>
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

                {/* INVESTMENT RISK & TRANSOARENCY */}
                <Card className="card-one h-auto overview-view-common mb-0">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Investment Risks & Transparency (Price with Buffers)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="project-risks-wrapper">
                            {[
                                {
                                    color: "#fb2c36",
                                    bgColor: "#fef2f2",
                                    title: "CRZ & CZMP Complexity Risk",
                                    description: "Wrong assumptions = redesigns or construction stoppage. Work exclusively from approved CZMP layers; avoid tidal creeks' no-go buffer zones.",
                                },
                                {
                                    color: "#ff6900",
                                    bgColor: "#fff7ed",
                                    title: "Documentation Fraud Risk",
                                    description: "Coastal belts have seen map tampering scams. Stick to primary revenue records & independent title search verification.",
                                },
                                {
                                    color: "#2b7fff",
                                    bgColor: "#eff6ff",
                                    title: "Infrastructure Timing Drift",
                                    description: "Airport ramp-up and last-mile road upgrades can experience delays. Use conservative absorption/ADR assumptions in financial modeling.",
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

            </div>
        </React.Fragment>
    )
}