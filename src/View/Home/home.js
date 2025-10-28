import React, { useEffect } from "react";
import "./home.scss";
import Header from "../_Common/header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    // GO LOCATION PAGE
    const goLocationPage = () => {
        navigate('/location');
    };

    // GO DUBAI EXPLORE PAGE
    const goDubaiExplorePage = () => {
        navigate('/dubai/explore');
    };

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    const handleLocation = (locationName) => {
        navigate(`/india/explore/${locationName}`);
        window.scrollTo(0, 0);
    };

    return (
        <React.Fragment>

            {/* HOME SECTION SECTION */}
            <section className="home-section" data-aos="fade-up" data-aos-delay="500">
                <Header />
                <div className="home-section-background">
                    <iframe
                        src="https://www.youtube.com/embed/VKAKbueezMk?autoplay=1&mute=1&loop=1&playlist=VKAKbueezMk&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                        allowFullScreen={false}
                        title="Hero Background Video"
                    />
                </div>
                <Container>
                    <div className="home-section-content">
                        <h1 data-aos="fade-up">AREA REALTY</h1>
                        <p data-aos="fade-up">experiences - exploration - estates</p>


                    </div>
                </Container>
                <div className="home-section-content-link">
                    <div className="content-link-box">
                        <h4>second homes, villas and residence</h4>
                        <Link to="/location">
                            <span className="align-middle">Explore More</span>
                            <i className="ri-arrow-right-s-line align-middle"></i>
                        </Link>
                    </div>
                    <div className="content-link-box">
                        <h4>land banks, plots and developments</h4>
                        <Link to="/location">
                            <span className="align-middle">Explore More</span>
                            <i className="ri-arrow-right-s-line align-middle"></i>
                        </Link>
                    </div>
                    <div className="content-link-box">
                        <h4>international investments</h4>
                        <Link to="/location">
                            <span className="align-middle">Explore More</span>
                            <i className="ri-arrow-right-s-line align-middle"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECOND HOME LUXURY LIVING */}
            <section className="second-home-section" data-aos="fade-up" data-aos-delay="500">
                <Container>
                    <div className="section-title">
                        <h3>SECOND HOMES</h3>
                        <p>LUXURY LIVING</p>
                    </div>

                    <div className="second-home-content">
                        <p>Discover our curated collection of premium second homes, luxury retreats, and exclusive lifestyle properties.
                            From waterfront villas to hill station retreats, we specialize in finding your perfect escape.</p>

                        <h4>Our Range of Properties</h4>

                        <div className="second-home-content-info">
                            <Row className="g-5 m-0">
                                <Col md={4} xs={6}>
                                    <h6>luxury villas</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>farm houses</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>holiday homes</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>gated communities</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>weekend retreats</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>investment villas</h6>
                                </Col>
                            </Row>
                        </div>

                        <div className="text-center mt-5">
                            <Button className="common-btn" onClick={goLocationPage} type="button">Explore More</Button>
                        </div>
                    </div>

                    <div className="second-content-footer">
                        <h4>Locations:</h4>
                        <div className="content-footer-link">
                            <Button variant="link" onClick={() => handleLocation("karjat")}>
                                <span className="align-middle">Karjat</span>
                            </Button>
                            <Button variant="link" onClick={() => handleLocation("lonavala")}>
                                <span className="align-middle">Lonavala</span>
                            </Button>
                            <Button variant="link" onClick={() => handleLocation("alibaug")}>
                                <span className="align-middle">Alibaug</span>
                            </Button>
                            <Button variant="link" onClick={() => handleLocation("khopoli")}>
                                <span className="align-middle">Khopoli</span>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* DXB - DUBAI INVESTMENTS SECTION */}
            <section className="dxb-investments-section" data-aos="fade-up" data-aos-delay="500">
                <Container>
                    <div className="section-title">
                        <h3>DXB - DUBAI INVESTMENTS</h3>
                        <p>GLOBAL LUXURY</p>
                    </div>

                    <div className="dxb-investments-content">
                        <p>Unlock premium investment opportunities in Dubai's most prestigious real estate market. From luxury apartments in Downtown Dubai to
                            exclusive waterfront estates, we specialize in tax-free investments with exceptional returns.</p>
                        <h4>Our Range of Properties</h4>

                        <div className="dxb-investments-content-info">
                            <Row className="g-5 m-0">
                                <Col md={4} xs={6}>
                                    <h6>luxury villas</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>farm houses</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>holiday homes</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>gated communities</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>weekend retreats</h6>
                                </Col>
                                <Col md={4} xs={6}>
                                    <h6>investment villas</h6>
                                </Col>
                            </Row>
                        </div>

                        <div className="text-center mt-5">
                            <Button className="common-btn" onClick={goDubaiExplorePage} type="button">Explore More</Button>
                        </div>
                    </div>

                    <div className="second-content-footer">
                        <h4>Locations:</h4>
                        <div className="content-footer-link">
                            <Link to="/dubai/explore" onClick={() => window.scrollTo(0, 0)}>
                                <span className="align-middle">Downtown Dubai</span>
                            </Link>
                            <Link to="/dubai/explore" onClick={() => window.scrollTo(0, 0)}>
                                <span className="align-middle">Dubai Marina</span>
                            </Link>
                            <Link to="/dubai/explore" onClick={() => window.scrollTo(0, 0)}>
                                <span className="align-middle">Palm Jumeirah</span>
                            </Link>
                            <Link to="/dubai/explore" onClick={() => window.scrollTo(0, 0)}>
                                <span className="align-middle">Business Bay</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}