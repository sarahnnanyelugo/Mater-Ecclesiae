import React from 'react';
import Pex from "../../../../assets/draw2.png";
import Map from './Map';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Phone from "../../../../assets/phoneicon.png";
import Jar from "../../../../assets/jar.png";
import Books from "../../../../assets/books.png";
import Cap from "../../../../assets/cap.png";

import Facebook from "../../../../assets/facebook.svg";
import Instagram from "../../../../assets/ig.png";
import Twitter from "../../../../assets/twitter.svg";

// import Circle from "../assets/Circle.svg";
import './Style.css'

import MyForm from "./Form";







function Contact() {
  return (
    <>
      <div></div>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <div className="bread">
        <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
          <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
          <CBreadcrumbItem href="/about/administrators-message">
            About
          </CBreadcrumbItem>
          <CBreadcrumbItem active>Contact</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
      <div className="sub-cover col-md-11">
        <ul className="sub-menu list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/administrators-message"}>
              Administrator's Message
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/proprietors-message"}>Proprietor’s Message</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/history"} className="active">
              History Of The School
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"contact-us"}>Contact Us</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/conduct"}>Faculty & Staff Directory</Link>
          </li>
        </ul>
      </div>
      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ADMISSION </small>
            <header>Contact </header>
          </div>
          <div className="create">
            <div>
              <h6 className="happy">We’re Happy To Hear From You</h6>
              <h6 className="happy1">Mater Ecclesiae College</h6>
            </div>
            <div className="telecont flexy">
              <div>
                <h6>Telephone: </h6>
                <p>
                  (+234) 0807 559 4742, <br /> 0704 507 7560
                </p>
              </div>
              <div>
                <h6>Address: </h6>
                <p>
                  {" "}
                  Address: Old Isiwo Road, Igbodu Village, Epe Lagos State
                  
                </p>
              </div>
              <div>
                <h6>Socials </h6>
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <img src={Facebook} alt="stairs " className="fluid" />
                  </li>

                  <li className="list-inline-item">
                    {" "}
                    <img src={Twitter} alt="stairs " className="fluid" />
                  </li>
                  <li className="list-inline-item">
                    <img src={Instagram} alt="stairs " className="fluid" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 flexy">
              {" "}
              <Map />

              <div className="col-md-6">
                <MyForm />
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 flexy segments">
          <div className="col-md-4">
            <h3>
              <img src={Phone} alt="Header" className="img-fluid" />
              E-Learning
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <img src={Jar} alt="Header" className="img-fluid" />
              Technology
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>

            <h3>
              <img src={Books} alt="Header" className="img-fluid" />
              Alumni
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <img src={Cap} alt="Header" className="img-fluid" />
              Tuition
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>
        </div>
      </section>
      <div className="overlay-page"></div>
    </>
  );
}

export default Contact