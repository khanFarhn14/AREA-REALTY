import React from "react";
import "./contact.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
    return (
        <React.Fragment>
                <div className="page-title">
                    <Container>
                        <div className="bread-crumb-content">
                            <h2>Scrap Sevak</h2>
                            <ul className="bread-crumb clearfix">
                                <li><a href="/">Home</a></li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <section className="contact-us-section">
                    <Container>
                        <div className="section-title" data-aos="fade-up">
                            <h3>Contact Us</h3>
                            <p>Get in Touch With Scrap Sevak "We're Here to Help" Connect With Our Team</p>
                        </div>
                        <Row className="g-3" data-aos="fade-up">
                            <Col md={6}>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <div className="contact-info">
                                            <i className="ri-map-pin-line"></i>
                                            <h3>Address</h3>
                                            <p>GROUND FLOOR PLOT NO-43, SHOP NO-16 RAJA BAHADUR BUILDING HUTATMA CHOWK, MUDHANA SHETTY MARG,Mumbai-400001</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-info">
                                            <i className="ri-phone-line"></i>
                                            <h3>Call Us</h3>
                                            <p>+91 7304012347</p>
                                            <p>+91 9820540559</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-info">
                                            <i className="ri-mail-line"></i>
                                            <h3>Email Us</h3>
                                            <p>info@scrapsevak.com</p>
                                            <p>contact@example.com</p>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className="contact-info">
                                            <i className="ri-time-line"></i>
                                            <h3>Open Hours</h3>
                                            <p>Monday - Saturday</p>
                                            <p>10:00AM - 07:00PM</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6}>
                                <div className="contact-info h-100 d-flex">
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Control type="text" placeholder="Enter Your Name" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Control type="text" placeholder="Enter Your Email" />
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Form.Control type="text" placeholder="Enter Your Subject" />
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className="mb-3">
                                                <Form.Control as="textarea" rows={4} placeholder="Enter Your Subject" />
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div>
                                                <Button variant="success" className="btn-class">Send Message</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
        </React.Fragment>
    )
}