import React from "react";
import "./home.scss";
import Header from "../_Common/header";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import secondHomeList from "../../json/Home/second-home.json";
import dubaiInvestmentList from "../../json/Home/dubai-investment.json";
import Slider from "react-slick";

export default function Home() {
    const secondHomeImgPath = {
        "img_1.jpg": require("../../assets/img/home/second-home/img_1.jpg"),
        "img_2.jpg": require("../../assets/img/home/second-home/img_2.jpg"),
        "img_3.jpg": require("../../assets/img/home/second-home/img_3.jpg"),
        "img_4.jpg": require("../../assets/img/home/second-home/img_4.jpg"),
        "img_5.jpg": require("../../assets/img/home/second-home/img_5.jpg"),
        "img_6.jpg": require("../../assets/img/home/second-home/img_6.jpg"),
    }

    const dubaiInvestmentSlide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Show 4 slides
        slidesToScroll: 3,
        swipe: true,
        autoplay: false,
        draggable: true,
        centerPadding: "0px",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <React.Fragment>
            <Header />
            {/* HOME SECTION SECTION */}
            <section className="home-section">
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
                        <h1 data-aos="fade-up" data-aos-delay="800">AREA REALTY</h1>
                        <p data-aos="fade-up" data-aos-delay="900">experiences - exploration - estates</p>

                        <div className="home-section-content-link" data-aos="fade-up" data-aos-delay="1000">
                            <Link to="/location">
                                <span>second homes, villas and residence</span>
                            </Link>
                            <Link to="/location">
                                <span>land banks, plots and developments</span>
                            </Link>
                            <Link to="/location">
                                <span>international investments</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SECOND HOME LUXURY LIVING */}
            <section className="second-home-section">
                <Container>
                    <div className="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h3>SECOND HOMES</h3>
                        <p>LUXURY LIVING</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <Row className="g-3">
                            {secondHomeList.map((item, index) => (
                                <Col md={4} sm={12} key={index}>
                                    <Card className="second-home-card">
                                        <div className="second-home-card-img">
                                            <Image className="img-fluid" src={secondHomeImgPath[item.img]} alt="Image" />
                                        </div>
                                        <Card.Body>
                                            <div className="second-home-card-content">
                                                <h2>{item?.name}</h2>
                                                <p>{item?.des}</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <div className="text-center mt-4">
                            <Button className="common-btn" type="button">Explore More</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* DXB - DUBAI INVESTMENTS SECTION */}
            <section className="dxb-investments-section">
                <Container>
                    <div className="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h3>DXB - DUBAI INVESTMENTS</h3>
                        <p>GLOBAL LUXURY</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="500">
                        <Slider {...dubaiInvestmentSlide}>
                            {dubaiInvestmentList.map((item, index) => (
                                <div className="dxb-testimonial-card" key={index}>
                                    <div className="dxb-testimonial">
                                        <div className="dxb-testimonial-img">{item?.img}</div>
                                        <div className="dxb-testimonial-content">
                                            <h5>{item?.name}</h5>
                                            <p>{item?.des}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}