import React from "react";
import "./india-explore.scss";
import { useParams } from "react-router-dom";
import InvestmentsKarjat from "./Pages/Karjat/karjat";
import InvestmentsLonavala from "./Pages/Lonavala/lonavala";
import InvestmentsKhopoli from "./Pages/Khopoli/khopoli";
import InvestmentsAlibaug from "./Pages/Alibaug/alibaug";

export default function IndiaExplore() {
  const { location } = useParams();
  const selectedLocation = location?.toLowerCase();

  const renderLocationComponent = () => {
    switch (selectedLocation) {
      case "karjat":
        return <InvestmentsKarjat />;
      case "lonavala":
        return <InvestmentsLonavala />;
      case "khopoli":
        return <InvestmentsKhopoli />;
      case "alibaug":
        return <InvestmentsAlibaug />;
      default:
        return <h3>Please select a valid location.</h3>;
    }
  };

  return <React.Fragment>{renderLocationComponent()}</React.Fragment>;
}
