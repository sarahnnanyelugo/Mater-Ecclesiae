import React from 'react';
import Pex from "../../../../assets/compute3.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Icofont from "react-icofont";
import Write from "../../../../assets/bluewrite.png";
import Books from "../../../../assets/books.png";
import People from "../../../../assets/bluepeople.png";
import Cap from "../../../../assets/bluecap.png";
import Talk from "../../../../assets/talk.png";

function Apply() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/academics/how_to_apply">
          Admission
        </CBreadcrumbItem>
        <CBreadcrumbItem active>How to Apply</CBreadcrumbItem>
      </CBreadcrumb>
      <div className="create">
        <div className="sub-cover" style={{ textAlign: "center" }}>
          <ul className="sub-menu list-inline">
            <li className="list-inline-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link className="active" to={"/academics/how_to_apply"}>
                How To Apply
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={"/academics/school-fees"}>School Fees</Link>
            </li>
            <li className="list-inline-item">
              <Link to={"/academics/result_&_scholarships"}>Transfer</Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ADMISSION </small>
            <header>How to Apply</header>
          </div>

          <div className="col-md-12 flexy  aply">
            <div className="col-md-6 ">
              <div className="col-md-12 js">
                {" "}
                <h3>Junior School</h3>
              </div>{" "}
            </div>

            <div className="col-md-6 ">
              <div className="col-md-12 ss">
                {" "}
                <h3>Senior School</h3>
              </div>
            </div>
          </div>

          <div className="col-md-12 space">&nbsp;</div>
          <div className="col-md-12">
            <h3>Now Accepting Applications</h3>

            <p>
              At Mater Ecclesiae College, our leadership and staff’s unique way
              of seeing the world reflects our focus on the Life of the Mind: we
              aim to foster critical and independent thinking, deep intellectual
              curiosity, exploration, and a lifelong love of learning in
              everything we do. If you want to be part of a dynamic and robust
              learning community, we welcome you to consider joining us at Mater
              Ecclesiae College.
            </p>
          </div>

          <div className="col-md-12 flexy segments">
            <div className="col-md-4">
              <h3>
                <img src={Write} alt="Header" className="img-fluid" />
                Junior & Secondary Schools
              </h3>
              <p>
                We are accepting applications into the Junior Secondary School
                as well as Senior Secondary Schools. Let’s prepare you for the
                most promising future you can imagine
              </p>
            </div>

            <div className="col-md-4">
              <h3>
                <img src={Books} alt="Header" className="img-fluid" />
                Academic Growth
              </h3>
              <p>
                Returning students experience all-round academic growth compared
                to where they have been. We provide very good standards
                academically and we allow students to explore their innate
                strengths.
              </p>

              <h3>
                <img src={Cap} alt="Header" className="img-fluid" />
                Best Learning Space
              </h3>
              <p>
                Our E-Learning Educational Platform and resources aims to help
                parents, teachers and pupils relate and make learning easier.We
                have over 200 students, comfortable classrooms and laboratories
                for all students.
              </p>
            </div>

            <div className="col-md-4">
              <h3>
                <img src={People} alt="Header" className="img-fluid" />
                Alumni
              </h3>
              <p>
                Our alumni will attest to the quality of education and formation
                we provide as they are successful in their endeavors in life.
              </p>
            </div>
          </div>
          <div className="col-md-12 space">&nbsp;</div>

          <div className="col-md-12 flexy ">
            <div className="col-md-6 how">
              <h3>ADMISSION PROCESS</h3>
              <ul>
                <li>
                  Obtain an Entrance Examination form for ₦5,000 from the
                  College Administrative office, Catholic Church of the
                  Assumption, Falomo-Ikoyi, parish offices of catholic churches
                  in Lagos or from the school website.
                </li>
              </ul>

              <ul>
                <li>
                  Fill the sections therein appropriately and affix a passport
                  photograph each on the required portions of the form.
                </li>
              </ul>
              <ul>
                <li>
                  Ensure that the “RECOMMENDATION BY HEAD TEACHER” section is
                  duly signed and stamped by the Head Teacher.
                </li>
              </ul>
              <ul>
                <li>
                  Return the form to the College or the collection centre as
                  stated on the form
                </li>
              </ul>
              <ul>
                <li>
                  Examination venues for Mater Ecclesiae College candidates are
                  as follows: Mater Ecclesiae College Epe, Maryland
                  Comprehensive College Maryland and Catholic Church of the
                  Assumption, Falomo, Ikoyi.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={Talk} alt="Header" className="img-fluid" />
            </div>
          </div>

          <a href={"/principal"} className="read2">
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}

export default Apply