import React from 'react';
import Pex from "../../../../assets/grotto3.png";


// import Circle from "../../../assets/circle2.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import "./News.css";
import { Link } from "react-router-dom";


function SchoolNews() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>

        <CBreadcrumbItem active>News & Events</CBreadcrumbItem>
      </CBreadcrumb>
      <div className="sub-cover col-md-11" style={{ textAlign: "center" }}>
        <ul className="sub-menu list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/aboutschool_news"} className="active">
              News & Events
            </Link>
          </li>
        </ul>
      </div>
      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>HOME </small>
            <header>News & Events</header>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-6">
              <div className="col-md-12 event event1">
                <h6 className="title">EVENT</h6>
                <div className="newstitle">
                  <h5>DEDICATION</h5>
                  <div className="flexy flexM">
                    <small>20/04/2022</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col-md-12 event event2">
                <h6 className="title">EVENT</h6>
                <div className="newstitle">
                  <h5>SOCIAL NIGHT</h5>
                  <div className="flexy flexM">
                    <small>20/04/2022</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-6">
              <div className="col-md-12 event event3">
                <h6 className="title">EVENT</h6>
                <div className="newstitle">
                  <h5>CULTURAL DAY</h5>
                  <div className="flexy flexM">
                    <small>20/04/2022</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col-md-12 event event4">
                <h6 className="title">EVENT</h6>
                <div className="newstitle">
                  <h5>GRADUATION DAY</h5>
                  <div className="flexy flexM">
                    <small>20/04/2022</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolNews