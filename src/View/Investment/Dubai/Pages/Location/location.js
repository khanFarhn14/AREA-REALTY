import React from "react";
import "./location.scss";

export default function Location() {
    // LEGAL DATA ARRAY LIST
    const legalData = [
        {
            sectionTitle: "RERA Regulatory Framework",
            items: [
                {
                    icon: "🛡️", // or use <i class="icon-shield"></i>
                    title: "Transparent Transactions",
                    description: "All real estate transactions regulated and protected"
                },
                {
                    icon: "🛡️",
                    title: "Escrow Protection",
                    description: "Buyer funds protected through escrow accounts"
                },
                {
                    icon: "🛡️",
                    title: "Developer Licensing",
                    description: "All developers licensed and monitored by RERA"
                }
            ]
        },
        {
            sectionTitle: "Ownership Rights",
            items: [
                {
                    icon: "🏢",
                    title: "Freehold Ownership",
                    description: "100% foreign ownership in designated areas"
                },
                {
                    icon: "🏢",
                    title: "Inheritance Rights",
                    description: "Full inheritance and transfer rights"
                },
                {
                    icon: "🏢",
                    title: "Rental Freedom",
                    description: "Complete freedom to rent and manage property"
                }
            ]
        }
    ];

    // VISA DATA ARRAY LIST
    const visaData = [
        {
            title: "Golden Visa (10 Years)",
            benefits: [
                "Property investment AED 2M+",
                "Renewable 10-year visa",
                "Includes family members",
                "No sponsor required",
            ],
            bgColor: "#FFF9EC", // soft yellow
        },
        {
            title: "Property Investor Visa",
            benefits: [
                "Property investment AED 750K+",
                "2-year renewable visa",
                "Banking and business access",
                "Utility connections",
            ],
            bgColor: "#F5F6FF", // soft blue
        },
        {
            title: "Retirement Visa (55+)",
            benefits: [
                "Property investment AED 2M+",
                "5-year renewable visa",
                "Healthcare benefits",
                "Pension exemptions",
            ],
            bgColor: "#F3FEF8", // soft green
        },
    ];

    // STRATEGIC ADVANTAGES AEEAY LISY
    const strategicAdvantages = [
        {
            title: "Global Connectivity",
            items: [
                {
                    heading: "Aviation Hub",
                    description: "Emirates Airline connecting 150+ cities worldwide"
                },
                {
                    heading: "Time Zone Advantage",
                    description: "Business hours overlap with Asia, Europe, and Africa"
                },
                {
                    heading: "Trade Routes",
                    description: "Strategic position on East-West trade corridors"
                }
            ]
        },
        {
            title: "Infrastructure Development",
            items: [
                {
                    heading: "Metro Expansion",
                    description: "Blue and Gold Line extensions connecting all major areas"
                },
                {
                    heading: "Al Maktoum Airport",
                    description: "World's largest airport by 2030 (200M+ passengers)"
                },
                {
                    heading: "Smart City Initiative",
                    description: "Digital infrastructure and IoT integration across the city"
                }
            ]
        }
    ];

    // PRIME INVESTMENT AREA ARRAY LIST
    const primeInvestmentAreas = [
        {
            name: "Downtown Dubai",
            yield: "12–14%",
            description: "Luxury apartments in prestigious Downtown district",
            features: ["Burj Khalifa", "Dubai Mall", "Metro Connectivity"],
            investment: "AED 2,000–4,500/sqft"
        },
        {
            name: "Dubai Hills Estate",
            yield: "14–16%",
            description: "Mid-tier apartments with family amenities",
            features: ["Golf Course", "Parks", "Schools"],
            investment: "AED 1,200–1,800/sqft"
        },
        {
            name: "Arabian Ranches",
            yield: "12–15%",
            description: "Villas and townhouses in gated community",
            features: ["Family Villas", "Golf Course", "Community Pools"],
            investment: "AED 1,500–3,000/sqft"
        },
        {
            name: "Dubai South",
            yield: "15–18%+",
            description: "Next real estate epicenter near airport",
            features: ["Al Maktoum Airport", "Logistics Hub", "Future Metro"],
            investment: "AED 800–1,500/sqft"
        },
        {
            name: "Business Bay",
            yield: "13–16%",
            description: "Business and residential towers with canal",
            features: ["Canal Views", "Metro Access", "Mixed Use"],
            investment: "AED 1,800–3,500/sqft"
        },
        {
            name: "Palm Jumeirah",
            yield: "12–14%",
            description: "Iconic artificial island with luxury properties",
            features: ["Beachfront", "Luxury Hotels", "Exclusive Addresses"],
            investment: "AED 2,500–8,000/sqft"
        }
    ];

    // BUSINESS ENVIRONMENT ARRAY LIST
    const businessEnvironment = [
        {
            title: "Tax Benefits",
            color: "#00c46a", // green
            points: [
                "0% personal income tax",
                "0% capital gains tax",
                "0% property tax",
                "0% inheritance tax"
            ]
        },
        {
            title: "Economic Stability",
            color: "#2b7cff", // blue
            points: [
                "Diversified economy beyond oil",
                "Strong banking sector",
                "Stable currency (AED–USD peg)",
                "Government fiscal discipline"
            ]
        },
        {
            title: "Market Access",
            color: "#9b51e0", // purple
            points: [
                "Gateway to MENA region",
                "Free trade zones",
                "100% foreign ownership",
                "World-class logistics"
            ]
        }
    ];

    return (
        <React.Fragment>
            {/* STRATEGIC LOCATION CARD */}
            <div className="strategic-location-card">
                <h3 className="title">Strategic Location Analysis</h3>
                <p className="description">
                    Dubai's strategic positioning as a global business hub, coupled with investor-friendly regulations and world-class infrastructure,
                    creates unique advantages for real estate investment.
                </p>
            </div>

            {/* LEGAL CARD */}
            <div className="legal-card">
                <h3 className="legal-main-title">Legal Framework & Investor Protection</h3>
                <div className="legal-sections">
                    {legalData.map((section, index) => (
                        <div className="legal-content" key={index}>
                            <h4 className="legal-content-title">{section.sectionTitle}</h4>

                            <ul className="item-list">
                                {section.items.map((item, i) => (
                                    <li className="item" key={i}>
                                        <span className="icon">{item.icon}</span>
                                        <div className="text">
                                            <strong>{item.title}</strong>
                                            <p>{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* VISA CARD */}
            <div className="visa-card">
                <h3 className="main-title">Golden Visa & Residency Benefits</h3>

                <div className="visa-sections">
                    {visaData.map((visa, index) => (
                        <div
                            className="visa-box"
                            key={index}
                            style={{ backgroundColor: visa.bgColor }}
                        >
                            <h4 className="visa-title">{visa.title}</h4>
                            <ul className="benefit-list">
                                {visa.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* STRATEGIC ADVANTAGES */}
            <div className="strategic-advantages">
                {strategicAdvantages.map((section) => (
                    <div className="category" key={section.title}>
                        <h3>{section.title}</h3>
                        {section.items.map((item) => (
                            <div className="item" key={item.heading}>
                                <h4>{item.heading}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* PRIME INVESTMENT AREAS */}
            <div className="prime-investment-areas">
                <h2>Prime Investment Areas</h2>
                <div className="area-grid">
                    {primeInvestmentAreas.map((area) => (
                        <div className="area-card" key={area.name}>
                            <span className="yield">{area.yield}</span>
                            <h3>{area.name}</h3>
                            <p>{area.description}</p>
                            <ul>
                                {area.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <div className="investment">
                                <span>Investment:</span>
                                <span>{area.investment}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BUSINESS ENVIRONMENT */}
            <div className="business-environment">
                <h2>Business Environment & Economic Factors</h2>
                <div className="factors-grid">
                    {businessEnvironment.map((section) => (
                        <div className="factor-column" key={section.title}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.points.map((point) => (
                                    <li key={point} style={{ "--dot-color": section.color }}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </React.Fragment>
    )
}