import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <div className="contact-no">
                    <Link to="tel:+919833141311"><i className="ri-phone-line"></i> <span>+91 98331 41311</span></Link>
                </div>
            </header>
        </React.Fragment>
    )
}