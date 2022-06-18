import React from "react";
import Pex from "../../../../assets/compute3.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
// import Exam from "../../../../assets/examstudents4.png";
// import Chess from "../../../../assets/chess2.png";
// import Icofont from "react-icofont";

function Primary() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/academics/administrators-message">
          Academics
        </CBreadcrumbItem>
        <CBreadcrumbItem active>Junior Primary</CBreadcrumbItem>
      </CBreadcrumb>

      <div className="sub-cover col-md-11" style={{ textAlign: "center" }}>
        <ul className="sub-menu list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/Gallery"} className="active">
              Junior School
            </Link>
          </li>

          <li className="list-inline-item">
            <Link to={"/learn/secondary_school"}>Senior School</Link>
          </li>
        </ul>
      </div>
      <section className="container">
        <div className="comments col-md-12 flexy">
          <div className="intro col-md-9 sen">
            <small>Learning </small>
            <header>Junior School</header>
          </div>
        </div>
      </section>
    </>
  );
}

export default Primary;
