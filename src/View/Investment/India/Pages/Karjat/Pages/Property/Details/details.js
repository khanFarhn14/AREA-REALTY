import React from "react";
import MorningStar from "./pages/morning-star";
import MountainRetreat from "./pages/mountain-retreat";
import SummerHills from "./pages/summer-hills";
import GreenGold from "./pages/green-gold";
import { useParams } from "react-router-dom";
import "./details.scss";

export default function KarjarPropertiesDetails() {
    const { location } = useParams();
    const selectedLocation = location?.toLowerCase();
    const renderLocationComponent = () => {
        switch (selectedLocation) {
            case "morning-star":
                return <MorningStar />;
            case "mountain-retreat":
                return <MountainRetreat />;
            case "summer-hills":
                return <SummerHills />;
            case "green-gold":
                return <GreenGold />;
            default:
                return <h3>Please select a valid location.</h3>;
        }
    };

    return <React.Fragment>{renderLocationComponent()}</React.Fragment>;
}