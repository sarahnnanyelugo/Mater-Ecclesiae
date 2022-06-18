import React from 'react';
import Pex from "../../../../assets/assembly2.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import Phone from "../../../../assets/phoneicon.png";
import Jar from "../../../../assets/jar.png";
import Books from "../../../../assets/books.png";
import Cap from "../../../../assets/cap.png";
function Result() {
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
          <CBreadcrumbItem href="/academics/how_to_apply">
            Admission
          </CBreadcrumbItem>
          <CBreadcrumbItem active>Transfer</CBreadcrumbItem>
        </CBreadcrumb>
      </div>

      <section className="container">
        <div className="comments">
          <div className="sub-cover" style={{ textAlign: "center" }}>
            <ul className="sub-menu list-inline">
              <li className="list-inline-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/academics/how_to_apply"}>How To Apply</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/academics/school-fees"}>School Fees</Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to={"/academics/result_&_scholarships"}
                  className="active"
                >
                  Transfer
                </Link>
              </li>
            </ul>
          </div>
          <div className="intro">
            <small>ADMISSION </small>
            <header>Transfer</header>
          </div>
          <div className="create">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            </p>

            <div className="col-md-12 flexy segments">
              <div className="col-md-4">
                <h3>
                  <img src={Phone} alt="Header" className="img-fluid" />
                  E-Learning
                </h3>
                <p>
                  We expose students to all of the best available resources
                  online and offline to keep abreast with theeir counterparts in
                  other schools of the world.
                </p>
              </div>

              <div className="col-md-4">
                <h3>
                  <img src={Jar} alt="Header" className="img-fluid" />
                  Technology
                </h3>
                <p>
                  Our E-learning educational platforms and resources aim to help
                  parents, teachers and pupils relate and make learning easier .
                </p>

                <h3>
                  <img src={Cap} alt="Header" className="img-fluid" />
                  Alumni
                </h3>
                <p>
                  Our tuition fees are the best available for the standards we
                  provide contact us for more information on tuition fees
                </p>
              </div>

              <div className="col-md-4">
                <h3>
                  <img src={Books} alt="Header" className="img-fluid" />
                  Tuition
                </h3>
                <p>
                  Students are exposed to extra artificial intelligience
                  technology provided by Robotic Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Result