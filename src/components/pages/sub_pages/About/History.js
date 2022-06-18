import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/classgirl2.png";
// import Happy from "../../../../assets/mofty2.png";
// import Hood from "../../../../assets/hood.png";

import Clap from "../../../../assets/clap.png";
import Talk from "../../../../assets/talk.png";
import Class from "../../../../assets/class.png";


import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import Admin from "../../../../assets/fr.png";

import './Style.css';


function History() {
  return (
    <>
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
          <CBreadcrumbItem active>about Evergreen</CBreadcrumbItem>
        </CBreadcrumb>
      </div>

      <div className="sub-cover col-md-11">
        <ul className="sub-menu list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/administrators-message"} className="active">
              Administrator's Message
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/proprietors-message"}>Proprietor’s Message</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/history"}>History Of The School</Link>
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
            <small>About </small>
            <header>Administrator's Message</header>
          </div>
          <div className=" create col-md-12 flexy">
            <div className="col-md-4">
              {" "}
              <img src={Admin} alt="Header" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <p style={{ paddingTop: "0", margin: "0" }}>
                Welcome to Mater Ecclesiae College, a co-educational home for
                learning and culture. The the burning desire of the catholic
                community of the Church of the Assumption, Falomo to offer a
                world-class institution of learning as well as contribute to the
                educational sector of the nation gave birth to this noble
                College project. In line with the desire of the universal church
                for catholic education, our College develops the spiritual,
                intellectual, moral and socio-cultural dimensions of her
                students.
                <br />
                <br /> With an understanding of today and a look at tomorrow, we
                prepare students for purposeful living in whatever society they
                find themselves.
                <br />
                <br /> Mater Ecclesiae students crave for excellence. Filled
                with dedication and commitment, the programme of studies fosters
                a steady understanding of self and the world. With a team of
                dedicated staff, we journey along with all our students to make
                them the best of themselves. Life-long skills are incorporated
                into the learning experience to explore and enhance the creative
                skills and abilities of our students.
                <br />
                <br /> Mater Ecclesiae College has the desire to be a
                first-class institution of learning, equipped with ultra-modern
                facilities that enhance teaching and learning for purposeful
                living in a serene and quiet environment.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <p style={{ paddingTop: "0", margin: "0" }}>
              Respect for the human person and appreciation of the uniqueness of
              the male and female genders is fostered in our students. In an
              atmosphere of complementarity, our young boys and girls work
              together and offer their special abilities and potentials for the
              common good. The dignity of every human person regardless of
              gender is of utmost concern in our College.
              <br />
              <br /> Trusting in the unfailing intercession of the Blessed
              Virgin Mary – the Mother of the Church – we are confident of God’s
              unfailing help as we strive to reach the heights in all we do.
              <br />
              <br />
              Imagine yourself at Mater Ecclesiae College. It is a tranquil
              place. Peace and God bless.
            </p>
            <br /> <br />
            <p style={{ color: "rgb(9,43,130)", fontWeight: "bold" }}>
              REV FR. JOHN NJORTEAH <br />
              ADMINISTRATOR
            </p>
          </div>

          <div className="col-md-12 flexy" style={{ marginTop: "150px" }}>
            <div className="col-md-4">
              <img src={Clap} alt="Header" className="img-fluid" />

              <h3>Our Mission</h3>
              <p>
                As a co-educational Catholic College, we fill students with the
                aspiration to attain the heights in academic pursuits,
                reverential appreciation for the sense of the sacred and love
                for the supremely divine as well as a strong belief in creative
                thinking and initiative..
              </p>
            </div>

            <div className="col-md-4">
              <img src={Talk} alt="Header" className="img-fluid" />

              <h3>Our Vision</h3>
              <p>
                To raise men and women of sterling character and profound
                integrity, imbued with sincere respect for the dignity of the
                human person regardless of creed, colour or class; love for
                learning and commitment to innovative leadership.
              </p>
            </div>
            <div className="col-md-4">
              <img src={Class} alt="Header" className="img-fluid" />

              <h3>Our Values</h3>
              <p>
                WWe believe firmly in christian morality,politeness, hard
                work,responsibility, respect, courtesy and good manners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default History