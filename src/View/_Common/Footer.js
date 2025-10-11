import React from "react";
import "./footer.scss";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer-top">
                    <Container>
                        <Row className="gy-4">
                            <Col md={4} className="footer-col">
                                <div className="footer-title">
                                    <h2>Scrap Sevak</h2>
                                    <h3>Your truster partner for scrap  <br /> recycling solutions.</h3>
                                </div>

                            </Col>
                            <Col md={4} className="footer-col">
                                <h5 className="text-uppercase">Contact</h5>
                                <ul>
                                    <li><Nav.Link as="a" href="tel:+917304012347">+91 7304012347</Nav.Link></li>
                                    <li><Nav.Link as={Link}>info@scrapsevak.com</Nav.Link></li>
                                </ul>
                            </Col>
                            <Col md={4} className="footer-col">
                                <h5 className="text-uppercase">Social</h5>
                                <ul>
                                    <li><Nav.Link as="a" href="https://www.facebook.com/61573548068759"><i className="ri-facebook-fill"></i> <span>Facebook</span></Nav.Link></li>
                                    {/* <li><Nav.Link as={Link}><i className="ri-linkedin-box-fill"></i> <span>Linkdin</span></Nav.Link></li> */}
                                    <li><Nav.Link as="a" href="https://www.instagram.com/scrapsevak?igsh=MXhhbXBwODBoMWFvYg==">
                                        <i className="ri-instagram-line"></i> <span>Instagram</span>
                                        </Nav.Link>
                                        </li>
                                </ul>
                            </Col>
                           
                        </Row>
                    </Container>
                </div>
                <div className="text-center copyright">Copyright © 2025 | Scrap Sevak | All Rights Reserved.</div>
            </footer>
        </React.Fragment>
    )
}