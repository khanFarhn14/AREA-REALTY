import React from "react";
import "./location.scss";
import { Card, Col, Row, Button } from "react-bootstrap";

export default function Location() {

    return (
        <React.Fragment>
            {/* STRATEGIC LOCATION CARD */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Compliance & Due Diligence (Maharashtra-Specific)</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="land-plot-wrapper">
                        <div>
                            <h4 className="column-title">For Land/Plots (Agri → NA or Already NA)</h4>
                            <Row className="g-3">
                                {[
                                    {
                                        color: "#3b82f6",
                                        bgColor: "#eff6ff",
                                        title: "7/12 (Saat-Bara) Extract",
                                        description: "Verify owner, area, liabilities, crop history via e-mutation",
                                    },
                                    {
                                        color: "#22c55e",
                                        bgColor: "#ecfdf5",
                                        title: "NA Conversion Process",
                                        description: "District Collector/SDO process; NA order required before development",
                                    },
                                    {
                                        color: "#a855f7",
                                        bgColor: "#f5f3ff",
                                        title: "Layout/Build Approvals",
                                        description: "Local planning authority; follow DP/TP roads, set-backs, FSI",
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
                            <h4 className="column-title last">For Projects (Villas/Townships/Gated Communities)</h4>
                            <Row className="g-3">
                                {[
                                    {
                                        color: "#f97316",
                                        bgColor: "#fff7ed",
                                        title: "MahaRERA Registration",
                                        description: "Mandatory above thresholds (≥500m² land or ≥8 apartments)",
                                    },
                                    {
                                        color: "#ef4444",
                                        bgColor: "#fef2f2",
                                        title: "Regulatory Compliance",
                                        description: "MahaRERA suspended thousands for non-compliance - verify status",
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

            {/* OUR PROCESS */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Our Process (How We De-Risk Your Buy)</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="process-wrapper">
                        <Row className="g-2">
                            {[
                                {
                                    color: "#3b82f6",
                                    bgColor: "#eff6ff",
                                    title: "Screening & Legal",
                                    description: "7/12 + title + NA + RERA verification",
                                },
                                {
                                    color: "#3b82f6",
                                    bgColor: "#eff6ff",
                                    title: "Amenity & Ops Model",
                                    description: "Security, water, power, waste, MC formation",
                                },
                                {
                                    color: "#22c55e",
                                    bgColor: "#ecfdf5",
                                    title: "Engineering Due Diligence",
                                    description: "Soil, topography, flood lines, access road width",
                                },
                                {
                                    color: "#a855f7",
                                    bgColor: "#f5f3ff",
                                    title: "Exit Clarity",
                                    description: "Resale support, rental strategy, document handover",
                                },
                            ].map((item, index) => (
                                <Col md={6} sm={12} key={index}>
                                    <div className="process-card" style={{ backgroundColor: item.bgColor }}>
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
                </Card.Body>
            </Card>

            {/* INFRASTRUCTURE & TIMELINE */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Infrastructure & Timeline - What's Coming When</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="timeline-wrapper">
                        {[
                            {
                                color: "#22c55e",
                                bgColor: "#ecfdf5",
                                title: "Now Open",
                                description: "Atal Setu (MTHL) sea link operational since January 2024",
                                points: [],
                            },
                            {
                                color: "#3b82f6",
                                bgColor: "#eff6ff",
                                title: "2025 Targets",
                                description: "",
                                points: [
                                    "Panvel-Karjat suburban corridor by Dec 2025 (67–70% complete)",
                                    "NMIA Terminal-1 opening Oct 2025 post aerodrome licence",
                                ],
                            },
                            {
                                color: "#ea580c",
                                bgColor: "#fff7ed",
                                title: "2026 → 2030",
                                description: "MMC packages roll-out after 2026 with full corridor targeted closer to 2030",
                                points: [],
                            },
                        ].map((item, index) => (
                            <div
                                className="timeline-card"
                                key={index}
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <div className="timeline-header">
                                    <span className="dot" style={{ backgroundColor: item.color }}></span>
                                    <h5 className="title" style={{ color: item.color }}>
                                        {item.title}
                                    </h5>
                                </div>

                                {item.description && (
                                    <p className="description">{item.description}</p>
                                )}

                                {item.points?.length > 0 && (
                                    <ul className="timeline-points">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            {/* SAMPLE PROPERTY OFFERING */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Sample Property Offerings</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="project-highlights-wrapper">
                        {[
                            {
                                title: "Jambrung - Serviced Villa Plots (NA)",
                                description: "5-7,000 sqft plotted community; gated entry; internal 9m roads; power & water points ready; within 25-35 min of Karjat station",
                                links: [
                                    { label: "RERA-registered layout", url: "#" },
                                    { label: "possession in phases", url: "#" },
                                ],
                            },
                            {
                                title: "Chowk-Karjat Belt - Boutique Villas",
                                description: "3-bed courtyard villas; freehold NA plots; managed rentals optional; under 15 min to NH-48",
                                links: [
                                    { label: "Proximity to Panvel-Karjat corridor", url: "#" },
                                ],
                            },
                        ].map((item, index) => (
                            <div className="project-highlight" key={index}>
                                <h5 className="title">{item.title}</h5>
                                <p className="description">{item.description}</p>
                                <div className="links">
                                    {item.links.map((link, i) => (
                                        <a key={i} href={link.url}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>


            {/* LOCATION STATISTICS */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Location Statistics</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="g-3">
                        {[
                            {
                                value: "1",
                                value_text: "HR",
                                title: "From Mumbai",
                                subtitle: "Express highway",
                            },
                            {
                                value: "15+",
                                title: "Adventure Sports",
                                subtitle: "Activities available",
                            },
                            {
                                value: "12°C",
                                title: "Temperature Drop",
                                subtitle: "Cooler than Mumbai",
                            },
                            {
                                value: "500+",
                                title: "Annual Events",
                                subtitle: "Tourist activities",
                            }
                        ].map((item, index) => (
                            <Col md={3} xs={6} key={index}>
                                <div className="stat-card" key={index}>
                                    <h2 className="stat-value">{item.value}<span className="fs-12">{item.value_text}</span></h2>
                                    <h3 className="stat-title">{item.title}</h3>
                                    <p className="stat-subtitle">{item.subtitle}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>

            {/* LOCATION FEATURES */}
            <Card className="card-one h-auto overview-view-common">
                <Card.Header>
                    <Card.Title className="fs-14 mb-0">Location Features</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="features-wrapper">
                        <Row>
                            {[
                                {
                                    title: "Geographic Features",
                                    feature: [
                                        { label: "Elevation:", value: "1,800 ft" },
                                        { label: "Climate:", value: "Pleasant Hill Station" },
                                        { label: "Annual Rainfall:", value: "2,500mm" },
                                        { label: "Best Season:", value: "Year Round" },
                                    ],
                                },
                                {
                                    title: "Infrastructure",
                                    feature: [
                                        { label: "Road Access:", value: "Excellent", link: true },
                                        { label: "Public Transport:", value: "Good", link: true },
                                        { label: "Healthcare:", value: "Available", link: true },
                                        { label: "Safety Rating:", value: "A+", link: true },
                                    ],
                                }
                            ].map((item, index) => (
                                <Col key={index} md={6} sm={12}>
                                    <div className="features-card">
                                        <h3>{item.title}</h3>

                                        {item.feature.map((item, index) => (
                                            <div className="feature-item" key={index}>
                                                <div className="label">{item.label}</div>
                                                <div className={`value ${item.link ? "link" : ""}`}>{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
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
        </React.Fragment>
    )
}