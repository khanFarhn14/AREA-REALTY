import React from "react";
import "./about-us.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import scrapShop from "../../assets/img/old-scrap-shop.png";

export default function About() {
    return (
        <React.Fragment>
            <div className="page-title">
                <Container>
                    <div className="bread-crumb-content">
                        <h2>Scrap Sevak</h2>
                        <ul className="bread-crumb clearfix">
                            <li><a href="/">Home</a></li>
                            <li>About us</li>
                        </ul>
                    </div>
                </Container>
            </div>
            <section className="about-us-section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h3>About us</h3>
                        <p>Get in Touch With Scrap Sevak" "We're Here to Help" "Connect With Our Team</p>
                    </div>

                    <Row className="g-3 align-items-center" data-aos="fade-up">
                        <Col sm={12} md={6} className="order-2 order-md-1">
                            <div className="about-us-content">
                                <h3>About Scrap Sevak</h3>
                                <h5>Your Trusted Partner Since Generations</h5>

                                <p>In the fast-paced urban environment of Mumbai, waste disposal is often neglected, leading to environmental degradation and missed 
                                    opportunities for recycling. At <b>Scrap Sevak</b>, we are revolutionizing scrap and e-waste management by combining eco-conscious 
                                    practices with digital convenience — making sustainability accessible to everyone, from individual households to large corporate offices.</p>

                                <p>Our platform enables users to schedule scrap pickups with ease — simply download our <b>Scrap Sevak</b> app, register your number, 
                                    and book a pickup as per your convenience and type of scrap. We collect a wide variety of recyclable materials, including paper, 
                                    plastic, metals, and electronic waste (e-waste), and ensure responsible disposal through authorized recycling channels.</p>

                                    <p>We are proud to be a licensed and authorized e-waste buyer, compliant with government norms and certified to handle and recycle 
                                        electronic waste in a safe, secure, and eco-friendly manner. Whether you’re a resident or a corporate entity, we provide tailored 
                                        solutions for efficient and lawful waste disposal.</p>
                                    <p>For our corporate clients, we offer daily scheduled pickups for bulk waste, enabling businesses to meet their ESG goals, 
                                        CSR commitments, and contribute to a greener India without interrupting operations. Our team of trained professionals ensures 
                                        timely service, secure handling, and transparent processes at every step.</p>
                                    <p>By choosing <b>SCRAP SEVAK</b> , you’re not just managing waste — you’re joining a movement towards a cleaner, greener, and smarter India</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="order-1 order-md-2">
                            <div className="scrap-shop-img">
                                <Image src={scrapShop} alt="show" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}