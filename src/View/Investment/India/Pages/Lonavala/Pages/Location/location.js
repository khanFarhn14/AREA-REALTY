import React from "react";
import "./location.scss";
import { Card, Col, Row, Button } from "react-bootstrap";

export default function Location() {

    return (
        <React.Fragment>
            <div className="overview-wrapper">
                {/* STRATEGIC LOCATION CARD */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Compliance Checklist (Maharashtra)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="land-plot-wrapper">
                            <div>
                                <h4 className="column-title">Essential Documentation</h4>
                                <Row className="g-3">
                                    {[
                                        {
                                            color: "#3b82f6",
                                            bgColor: "#eff6ff",
                                            title: "7/12 Extract",
                                            description: "Verify ownership, liabilities, mutation records",
                                        },
                                        {
                                            color: "#22c55e",
                                            bgColor: "#ecfdf5",
                                            title: "NA Conversion",
                                            description: "Required for non-agri use; check Collector's NA order",
                                        },
                                        {
                                            color: "#a855f7",
                                            bgColor: "#f5f3ff",
                                            title: "MahaRERA Registration",
                                            description: "For projects ≥500 sq.m or ≥8 units. Cross-verify portal",
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
                                <h4 className="column-title last">Hill Station Specific</h4>
                                <Row className="g-3">
                                    {[
                                        {
                                            color: "#f97316",
                                            bgColor: "#fff7ed",
                                            title: "Environmental Clearance",
                                            description: "Mandatory for hill/forest/lake-adjacent projects",
                                        },
                                        {
                                            color: "#ef4444",
                                            bgColor: "#fef2f2",
                                            title: "Municipal Approvals",
                                            description: "Layout sanction, building permissions, FSI compliance",
                                        },
                                        {
                                            color: "#f0b100",
                                            bgColor: "#fefce8",
                                            title: "Eco-Sensitive Zone",
                                            description: "Check restrictions for forest/water body proximity",
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
                                        title: "Legal & Documentation",
                                        description: "Title verification + RERA + society compliance",
                                    },
                                    {
                                        color: "#3b82f6",
                                        bgColor: "#eff6ff",
                                        title: "Rental Strategy",
                                        description: "Tourism demand analysis, rental optimization",
                                    },
                                    {
                                        color: "#22c55e",
                                        bgColor: "#ecfdf5",
                                        title: "Site Assessment",
                                        description: "Access, views, utilities, slope analysis",
                                    },
                                    {
                                        color: "#a855f7",
                                        bgColor: "#f5f3ff",
                                        title: "Exit Planning",
                                        description: "Resale strategy, market timing guidance",
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
                        <Card.Title className="fs-14 mb-0">Infrastructure Game-Changers</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="timeline-wrapper">
                            {[
                                {
                                    color: "#22c55e",
                                    bgColor: "#ecfdf5",
                                    title: "Currently Operational",
                                    description: "",
                                    points: [
                                        "Mumbai-Pune Expressway - Direct access for 2+ decades",
                                        "Lonavala railway station - Major intercity & suburban halt",
                                        "Luxury hospitality ecosystem: Hilton Shillim, Radisson Blu, Fariyas"
                                    ],
                                },
                                {
                                    color: "#3b82f6",
                                    bgColor: "#eff6ff",
                                    title: "96% Complete - Immediate Impact",
                                    description: "",
                                    points: [
                                        "Missing Link Tunnel (8.9 km) - 25 minutes travel reduction",
                                        "Expected completion: 2024-25, game-changer for accessibility",
                                    ],
                                },
                                {
                                    color: "#ad46ff",
                                    bgColor: "#faf5ff",
                                    title: "₹909 Crore Skywalk Project",
                                    description: "",
                                    points: [
                                        "Tiger Point ↔ Lion's Point connection",
                                        "Rooftop cafes, adventure zones, amphitheatre - tourism value boost"
                                    ],
                                },
                                {
                                    color: "#ff6900",
                                    bgColor: "#fff7ed",
                                    title: "NMIA by 2025",
                                    description: "Navi Mumbai International Airport within 1.5 hrs access",
                                    points: [],
                                }
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
                                    title: "Valley View Villas - Premium Hilltop",
                                    description: "3-4 bed luxury villas with panoramic valley views; established community with resort amenities; 10 min from main bazaar",
                                    links: [
                                        { label: "Managed rental program available with established operators", url: "#" }
                                    ],
                                },
                                {
                                    title: "Heritage Resort Apartments - Central Location",
                                    description: "2-3 bed serviced apartments in heritage resort setting; walking distance to Tiger's Leap; established rental track record",
                                    links: [
                                        { label: "HSR station proximity planned for enhanced connectivity", url: "#" },
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

                {/* ENVIREMENT */}
                <Card className="card-one h-auto overview-view-common">
                    <Card.Header>
                        <Card.Title className="fs-14 mb-0">Frequently Asked Questions</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ul className="frequently-asked-questions">
                            {[
                                {
                                    "name": "Why is Lonavala called Maharashtra's Hill-Station Investment Powerhouse?",
                                    "des": "With Missing Link Tunnel 96% complete (25 min savings), ₹909 cr Skywalk project, NMIA access, and celebrity endorsement - it's evolving beyond weekend destination to investment ecosystem."
                                },
                                {
                                    "name": "WWhat are realistic rental yields for villa investments?",
                                    "des": "Weekend rentals: ₹12,000-₹30,000/night for premium villas. Annual Airbnb yields ~6-8% in peak season with millions of tourists annually."
                                },
                                {
                                    "name": "How do monsoons affect property investments?",
                                    "des": "Heavy rains, slope stability, drainage issues must be factored. However, monsoon season drives peak tourism. Choose projects with proper engineering design."
                                },
                                {
                                    "name": "How does Lonavala's air quality impact investment potential?",
                                    "des": "AQI 45-65 (Good-Moderate) due to Western Ghats location, 8-10°C cooler than Mumbai, minimal industrial pollution. This drives wellness tourism premium and health-conscious buyer demand, supporting rental yields."
                                },
                                {
                                    "name": "What should I budget for a quality villa investment?",
                                    "des": "Entry gated community villa: ₹1.2-₹2 Cr. Premium boutique: ₹4-₹8 Cr+. Supreme Universal example: ₹2.65 Cr average. Always verify NA, 7/12, and RERA status."
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
                        <h3>Ready to Invest in Lonavala?</h3>
                        <p>
                            Get comprehensive legal pack: Title documents, society papers, hill station clearances, RERA verification, utility connections,
                            and tourism rental guidance.
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}