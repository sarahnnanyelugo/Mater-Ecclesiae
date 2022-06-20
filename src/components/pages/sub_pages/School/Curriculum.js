import React from 'react'
import Pex from "../../../../assets/church2.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import Read from "../../../../assets/lib2.png";
import Dorm from "../../../../assets/dormMerge.png";
import Ball from "../../../../assets/footballMerge.png";
import Science from "../../../../assets/science.png";
import Activities from "../../../../assets/sewMerge.png";
import Clap from "../../../../assets/clap.png";
import Lab from "../../../../assets/grotto4.png";
import Soap from "../../../../assets/procession.png";

// import Sing2 from "../../../../assets/act2.png";
// import Zoo from "../../../../assets/zoo2.png";
import { Link } from "react-router-dom";

function Curriculum() {
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
          <CBreadcrumbItem active>Student Life</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
      <div
        className="sub-cover col-md-11"
        style={{ textAlign: "center", paddingLeft: "0" }}
      >
        <ul className="sub-menu list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/about/history"} className="active">
              Student Life
            </Link>
          </li>{" "}
        </ul>
      </div>
      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>HOME </small>
            <header>Student Life</header>
          </div>

          <div className="col-md-12 space">&nbsp;</div>
          <div className="create ">
            <div className="col-md-12">
              <h5>We are passionate about giving you more</h5>

              <p>
                At Mater Ecclesiae College we provide state of the art
                facilities for your wards in order to promote good academic
                standards ,staff & students’ comfort and safety as well as
                general well being at all times
              </p>
            </div>
            <div className="col-md-12 space">&nbsp;</div>

            <div className="col-md-12 flexy ">
              <div className="col-md-5">
                <h3>Condusive Hostels</h3>
                <p>
                  Our new campus hostels , designed by world-renowned architect
                  provide myriad advantages for our learning community.
                </p>
              </div>
              <div className="col-md-1">&nbsp;</div>
              <div className="col-md-6">
                <img src={Dorm} alt="Header" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-12 space">&nbsp;</div>

          <div className="col-md-12 flexy ">
            <div className="col-md-6 lib">
              <h3>Library</h3>

              <p>
                We pride ourselves on offering a well-balanced education with
                opportunities for students to excel in many different areas.
                Academics are of course a priority for our students, and their
                hard work and talents are demonstrated through a variety of
                assessments, including external examinations.Thanks to our
                echelons of library resources online and offline.
              </p>
            </div>

            <div className="col-md-6 study">
              <img src={Read} alt="Header" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 space">&nbsp;</div>

          <div className="col-md-12 flexy ">
            <div className="col-md-6">
              <img src={Ball} alt="Header" className="img-fluid" />
            </div>
            <div className="col-md-6 sports">
              <h3>Sports Activities</h3>

              <p>
                Learning is a developmental process that changes our thinking
                and behaviours, enabling us to acquire skills, knowledge and
                attitudes while providing a catalyst for creativity, critical
                thinking and independent reasoning.
              </p>
            </div>
          </div>
          <div className="col-md-12 space">&nbsp;</div>

          <div className="col-md-12 flexy ">
            <div className="col-md-6">
              <img src={Science} alt="Header" className="img-fluid" />
            </div>
            <div className="col-md-6 lib">
              <h3>Laboratories</h3>

              <p>
                Learning through inquiry extends the development of students.
                Our students get the best practical knowledge as their
                conterparts around the world.
              </p>
            </div>
          </div>
          <div className="col-md-12 space">&nbsp;</div>

          <div className="col-md-12 flexy ">
            <div className="col-md-6 sports">
              <h3>Extra-curricular Activities</h3>

              <p>
                Every day in Mater Ecclesiae College is special. Our inspiring
                nutrition concept, signature programmes, and extensive range of
                extra-curricular activities round out a holistic BIS education.
              </p>
            </div>
            <div className="col-md-6">
              <img src={Activities} alt="Header" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 space">&nbsp;</div>

          <div className=" flexy flexyM space2  space3">
            <div className="col-md-4">
              <img src={Clap} alt="Header" className="img-fluid" />
            </div>
            <div className="col-md-4">
              <img src={Lab} alt="Header" className="img-fluid" />
            </div>
            <div className="col-md-4">
              <img src={Soap} alt="Header" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Curriculum