import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function SideButtons() {
  return (
    <>
      <div className="hooked-cov ">
        <div className="hooked">
          <div className="search-fixed help">
            {" "}
            <Link>Search</Link>{" "}
          </div>
          <div className="enquire-fixed help">
            <Link to="/Contact">Enquire</Link>
          </div>
          <div className="apply-fixed help">
            <a href="https://evergreen.educare.school/admission-form">Apply</a>
          </div>
          <div className="visit-fixed help">
            <Link to="/Contact">Visit</Link>
          </div>
        </div>
      </div>
    </>
  );
}






















export default SideButtons;
