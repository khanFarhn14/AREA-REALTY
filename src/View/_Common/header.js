import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <Link to="tel:+919833141311"><i className="ri-phone-line align-middle"></i> <span className="align-middle">+91 98331 41311</span></Link>
            </header>
        </React.Fragment>
    )
}