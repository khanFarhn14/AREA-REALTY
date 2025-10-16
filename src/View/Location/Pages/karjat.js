import React from "react";
import "./karjat.scss"

export default function KarjatPremiumSection() {
    return (
        <div className="location-area-view">
            {/* Animated gradient lights */}
            <div className="light light-blue"></div>
            <div className="light light-purple"></div>

            {/* Content container */}
            <div className="content-container">
                <h1 className="title">KARJAT</h1>
                <p className="subtitle">
                    The adventure capital nestled in pristine valleys, offering exclusive
                    riverfront escapes and high-return investment opportunities.
                </p>

                {/* Information cards */}
                <div className="info-cards">
                    {[
                        { title: "DISTANCE", value: "1 hour from Mumbai" },
                        { title: "INVESTMENT", value: "₹3–8 Cr" },
                        { title: "APPRECIATION", value: "15–20% annually" },
                        { title: "HIGHLIGHT", value: "River rafting & trekking paradise" },
                    ].map((item, i) => (
                        <div key={i} className="info-card">
                            <h3>{item.title}</h3>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Key Features */}
                <div className="features">
                    {[
                        "Adventure Sports",
                        "Cool Climate",
                        "River Views",
                        "Proximity to Mumbai",
                    ].map((feature, i) => (
                        <span key={i} className="feature">
                            {feature}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <button className="explore-btn">Explore More</button>

                {/* Dots */}
                <div className="dots">
                    {[1, 2, 3, 4].map((dot, i) => (
                        <div key={i} className={`dot ${dot === 1 ? "active" : ""}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}