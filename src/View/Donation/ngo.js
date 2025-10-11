import React from "react";
import { Container } from "react-bootstrap";
import "./ngo.scss";

export default function NGO() {
    return (
        <React.Fragment>
            <div className="page-title">
                <Container>
                    <div className="bread-crumb-content">
                        <h2>Scrap Sevak</h2>
                        <ul className="bread-crumb clearfix">
                            <li><a href="/">Home</a></li>
                            <li>Donate Us</li>
                        </ul>
                    </div>
                </Container>
            </div>
            <section className="ngo-section">
                {/* <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h3>Donate Us</h3>
                        <p>To donate scrap materials in Mumbai, you'll want to find local businesses or organizations that specialize in recycling</p>
                    </div>
                </Container> */}

                <Container>
                    <div className="comming-soon">
                        <h2>Coming Soon!</h2>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}