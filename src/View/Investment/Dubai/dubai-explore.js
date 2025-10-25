import React from "react";
import "./dubai-explore.scss";
import bgImage from "../../../assets/img/home-background.png"
import { Container, Nav, Tab } from "react-bootstrap";
import OverviewView from "./Pages/Overview/overview";
import PropertyView from "./Pages/Property/property";
import Investments from "./Pages/Investments/investments";
import Location from "./Pages/Location/location";

export default function DubaiExplore() {
    return (
        <React.Fragment>
            <div className="page-title" style={{ backgroundImage: `url(${bgImage})` }}>
                <Container>
                    <div className="page-title-content">
                        <h2>AREA REALTY</h2>
                        <ul className="bread-crumb">
                            <li><a href="/home">Home</a></li>
                            <li>DUBAI</li>
                        </ul>
                    </div>
                </Container>
            </div>

            <section className="dubai-explore-section">
                <Container>
                    <div className="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h3>DUBAI Explore</h3>
                        <p>Global investment hub with tax-free opportunities and golden visa benefits</p>
                    </div>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="overview_tab" data-aos="fade-up" data-aos-delay="500">
                        <div className="dubai-explore-tabs">
                            <div className="explore-tabs-header mb-5">
                                <Nav variant="pills">
                                    <Nav.Item><Nav.Link eventKey="overview_tab">Overview</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="properties_tab">Properties</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="investments_tab">Investments</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="location_tab">Location</Nav.Link></Nav.Item>
                                </Nav>
                            </div>

                            <div className="explore-tabs-content">
                                <Tab.Content>
                                    <Tab.Pane eventKey="overview_tab">
                                        <OverviewView />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="properties_tab">
                                        <PropertyView />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="investments_tab">
                                        <Investments />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="location_tab">
                                        <Location />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </Container>
            </section>
        </React.Fragment>
    )
}