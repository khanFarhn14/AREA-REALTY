import React from "react";
import bgImage from "../../../../../assets/img/location/lonovala-heading.png";
import { Container, Nav, Tab } from "react-bootstrap";

export default function InvestmentsLonavala() {
    return (
        <React.Fragment>
            <div className="page-title" style={{ backgroundImage: `url(${bgImage})` }}>
                <Container>
                    <div className="page-title-content">
                        <h2>AREA REALTY</h2>
                        <ul className="bread-crumb">
                            <li><a href="/home">Home</a></li>
                            <li>Lonavala</li>
                        </ul>
                    </div>
                </Container>
            </div>

             <section className="investment-explore-section">
                <Container>
                    <div className="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h3>Lonavala</h3>
                        <p>Monsoon magic in the Western Ghats with stunning valley views</p>
                    </div>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="overview_tab" data-aos="fade-up" data-aos-delay="500">
                        <div className="investment-explore-tabs">
                            <div className="investment-tabs-header mb-5">
                                <Nav variant="pills">
                                    <Nav.Item><Nav.Link eventKey="overview_tab">Overview</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="properties_tab">Properties</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="investments_tab">Investments</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="location_tab">Location</Nav.Link></Nav.Item>
                                </Nav>
                            </div>

                            <div className="explore-tabs-content">
                             
                            </div>
                        </div>
                    </Tab.Container>
                </Container>
            </section>
        </React.Fragment>
    )
}