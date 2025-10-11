import React from "react";
import "./home.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <React.Fragment>
            {/* HOME SECTION SECTION */}
            <section className="home-section">
                <div className="contact-no">
                    <Link to="tel:+919833141311"><i class="ri-phone-line"></i> <span>+91 98331 41311</span></Link>
                </div>
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
                        <h1 data-aos="fade-up" data-aos-delay="500">AREA REALTY</h1>
                        <p data-aos="fade-up" data-aos-delay="600">experiences - exploration - estates</p>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}