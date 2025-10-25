import React from "react";
import "./investments.scss";
import { Col, Row } from "react-bootstrap";

export default function Investments() {

    // INVESTMENT DATA ARRAY LIST
    const investmentData = [
        {
            type: "Conservative",
            range: "18–22% annually",
            color: "#1a56db",
            items: [
                { label: "Capital Appreciation", value: "6–8% annually" },
                { label: "Rental Income", value: "12–14% annually" },
            ],
            description: "Established areas with stable demand",
        },
        {
            type: "Moderate",
            range: "22–26% annually",
            color: "#1a56db",
            items: [
                { label: "Capital Appreciation", value: "8–10% annually" },
                { label: "Rental Income", value: "14–16% annually" },
            ],
            description: "Growth corridors with infrastructure development",
        },
        {
            type: "Aggressive",
            range: "25–33%+ annually",
            color: "#1a56db",
            items: [
                { label: "Capital Appreciation", value: "10–15% annually" },
                { label: "Rental Income", value: "15–18%+ annually" },
            ],
            description: "Pre-launch projects in emerging zones",
        },
    ];

    // INVESTOR PROFILES ARRAY LIST
    const investorProfiles = [
        {
            title: "International Investor",
            description: "Global HNI seeking tax-efficient wealth creation",
            preference: "Off-plan luxury apartments, Golden Visa eligible",
            timeline: "3-5 years",
            range: "AED 2M - 10M"
        },
        {
            title: "Trophy Asset Collector",
            description: "Ultra-high net worth seeking prestige assets",
            preference: "Penthouse, waterfront villa, iconic locations",
            timeline: "Long-term hold",
            range: "AED 10M - 50M"
        },
        {
            title: "Income Investor",
            description: "Professional seeking rental income and residency",
            preference: "Ready properties in high-demand areas",
            timeline: "Immediate rental",
            range: "AED 1M - 5M"
        }
    ];

    // RISK MANAGEMENT DATA ARRAY LIST
    const riskManagementData = {
        title: "Risk Management & Mitigation",
        sections: [
            {
                category: "Market Risks",
                items: [
                    {
                        iconColor: "#f28c28", // orange
                        title: "Global Economic Volatility",
                        description: "Diversified economy reduces exposure"
                    },
                    {
                        iconColor: "#f5c542", // yellow
                        title: "Currency Fluctuation",
                        description: "AED pegged to USD provides stability"
                    },
                    {
                        iconColor: "#4a90e2", // blue
                        title: "Supply Oversupply",
                        description: "Government regulation controls new supply"
                    }
                ]
            },
            {
                category: "Mitigation Strategies",
                items: [
                    {
                        iconColor: "#00c46a", // green
                        title: "Portfolio Diversification",
                        description: "Mix of residential and commercial properties"
                    },
                    {
                        iconColor: "#00c46a",
                        title: "Prime Location Focus",
                        description: "Established areas with proven track record"
                    },
                    {
                        iconColor: "#00c46a",
                        title: "Professional Management",
                        description: "Expert property management and advisory"
                    }
                ]
            }
        ]
    };

    // INVESTMENT TIMELINE ARRAY LIST
    const investmentTimeline = {
        title: "Investment Timeline & Process",
        steps: [
            {
                number: 1,
                title: "Market Research & Due Diligence",
                description: "2–4 weeks: Property analysis, legal verification, market positioning"
            },
            {
                number: 2,
                title: "Purchase & Documentation",
                description: "3–6 weeks: Purchase agreement, RERA registration, payment processing"
            },
            {
                number: 3,
                title: "Handover & Activation",
                description: "1–2 weeks: Property handover, utility setup, rental preparation"
            },
            {
                number: 4,
                title: "Portfolio Management",
                description: "Ongoing: Property management, tenant sourcing, maintenance coordination"
            }
        ]
    };

    return (
        <React.Fragment>

            {/* INVESTMENT CARD */}
            <div className="investment-card">
                <h3 className="title">Investment Analysis & Projections</h3>
                <p className="description">
                    Comprehensive investment analysis for Dubai real estate market with ROI projections,
                    risk assessment, and strategic positioning for different investor profiles.
                </p>
            </div>

            {/* INVESTMENT HORIZON */}
            <div className="investment-horizon">
                <h3>5-Year Investment Horizon</h3>
                <Row>
                    {investmentData.map((plan, i) => (
                        <Col md={4} key={i}>
                            <div className="cards">
                                <div className="card" key={i}>
                                    <h4>{plan.type}</h4>
                                    <p className="range" style={{ color: plan.color }}>
                                        {plan.range}
                                    </p>

                                    <ul>
                                        {plan.items.map((item, j) => (
                                            <li key={j}>
                                                <span>{item.label}</span>
                                                <span className="value">{item.value}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="description">{plan.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* INVESTOR PROFILES */}
            <div className="investor-profiles">
                <h2 className="investor-profiles__title">Investor Profiles & Strategies</h2>

                {investorProfiles.map((profile, index) => (
                    <div key={index} className="profile-card">
                        <div className="profile-card__header">
                            <div className="profile-title">{profile.title}</div>
                            <div className="profile-range">{profile.range}</div>
                        </div>
                        <div className="profile-card__desc">{profile.description}</div>
                        <div className="profile-card__details">
                            <div>
                                <span className="label">Preference:</span> {profile.preference}
                            </div>
                            <div>
                                <span className="label">Timeline:</span> {profile.timeline}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* RISK MANAGEMENT */}
            <div className="risk-management">
                <h2 className="risk-management__title">{riskManagementData.title}</h2>

                <div className="risk-management__content">
                    {riskManagementData.sections.map((section, index) => (
                        <div key={index} className="risk-column">
                            <h3 className="category-title">{section.category}</h3>

                            {section.items.map((item, i) => (
                                <div key={i} className="risk-item">
                                    <span className="icon" style={{ backgroundColor: item.iconColor }}></span>
                                    <div className="details">
                                        <div className="risk-title">{item.title}</div>
                                        <div className="risk-desc">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* INVESTMENT TIMELINE */}
            <div className="investment-timeline">
                <h2 className="investment-timeline__title">{investmentTimeline.title}</h2>

                {investmentTimeline.steps.map((step) => (
                    <div key={step.number} className="timeline-step">
                        <div className="step-number">{step.number}</div>
                        <div className="step-content">
                            <div className="step-title">{step.title}</div>
                            <div className="step-description">{step.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}