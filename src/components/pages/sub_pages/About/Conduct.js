import React from "react";
import Pex from "../../../../assets/grotto3.png";
// import Rev from "../../../../assets/admin.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import { Link } from "react-router-dom";

import Sis from "../../../../assets/sisterwhite.png";
import Sis2 from "../../../../assets/sister2.png";

import Staff12 from "../../../../assets/teacher12.png";
import Staff13 from "../../../../assets/teacher13.png";
import Staff8 from "../../../../assets/teacher8.png";
import Staff9 from "../../../../assets/teacher9.png";
import Staff10 from "../../../../assets/teacher10.png";
import Staff11 from "../../../../assets/teacher11.png";
import Staff5 from "../../../../assets/teacher5.png";
import Staff6 from "../../../../assets/teacher6.png";
import Staff7 from "../../../../assets/teacher7.png";
import Staff1 from "../../../../assets/teacher1.png";
import Staff2 from "../../../../assets/teacher2.png";
import Staff3 from "../../../../assets/teacher3.png";
import Staff4 from "../../../../assets/teacher4.png";
import One from "../../../../assets/one.png";
import Two from "../../../../assets/two.png";
import Three from "../../../../assets/three.png";
import Four from "../../../../assets/four.png";
import Five from "../../../../assets/five.png";
import Seven from "../../../../assets/seven.png";
import Eight from "../../../../assets/eight.png";
import Nine from "../../../../assets/nine.png";

import "./Style.css";


function Conduct() {
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
          <CBreadcrumbItem active>Faculty & Staff Directory</CBreadcrumbItem>
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
            <small>About </small>
            <header>Faculty & Staff Directory</header>
          </div>
        </div>
        {/* <hr /> */}
        <div className="col-md-12 flexy flexyM col-12 staff">
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Sis} alt="Header" className="img-fluid" />
              <p>
                Sr. Regina Ada Odeh Ssma (V.P)
                <br />
                <small>V.P</small>
              </p>
            </div>
          </div>

          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Sis2} alt="Header" className="img-fluid" />
              <p>
                Sr. Felicita-Mary Agbanu
                <br />
                <small>Bursar</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff13} alt="Header" className="img-fluid" />
              <p>
                Amanyi Louis <br />
                <small>Sciences Teacher</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff12} alt="Header" className="img-fluid" />
              <p>
                Irekiigbe Adedoyin <br />
                <small>Languages</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy flexyM col-12 staff">
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff8} alt="Header" className="img-fluid" />
              <p>
                Onoriode Benson <br />
                <small>Vocational Teacher</small>
              </p>
            </div>
          </div>

          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff9} alt="Header" className="img-fluid" />
              <p>
                Yusuff Oluwakemi <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff10} alt="Header" className="img-fluid" />
              <p>
                Madubuike Kingsley C. <br />
                <small>Languages</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff11} alt="Header" className="img-fluid" />
              <p>
                Ibrahim Falilat <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy flexyM col-12 staff">
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff8} alt="Header" className="img-fluid" />
              <p>
                Eruaga Rita
                <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>

          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff5} alt="Header" className="img-fluid" />
              <p>
                Odege Sunday <br />
                <small>Sciences Teacher</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff6} alt="Header" className="img-fluid" />
              <p>
                Udechukwu Chika <br />
                <small>Vocational Teacher</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff7} alt="Header" className="img-fluid" />
              <p>
                Nwaobasi Godspower <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy flexyM col-13 staff">
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff1} alt="Header" className="img-fluid" />
              <p>
                Igoche Anthony <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>

          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff2} alt="Header" className="img-fluid" />
              <p>
                Omonua Benjamin <br />
                <small>Social Sciences</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff3} alt="Header" className="img-fluid" />
              <p>
                Oluwole Esther <br />
                <small>Social Sciences</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Staff4} alt="Header" className="img-fluid" />
              <p>
                Yaro Gloria <br />
                <small>Vocational Teacher</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy flexyM col-12 staff">
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={One} alt="Header" className="img-fluid" />
              <p>
                Awuku Kingsley <br />
                <small>Vocational Teacher</small>
              </p>
            </div>
          </div>

          <div clasName="col-md-3">
            <div className="col-md-11 col-12" >
              <img src={Two} alt="Header" className="img-fluid" />
              <p>
                Igwe Jecinta <br />
                <small>Social Sciences</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Three} alt="Header" className="img-fluid" />
              <p>
                Orkuma Benjamin <br />
                <small>Sciences Teacher</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Four} alt="Header" className="img-fluid" />
              <p>
                Awoyungbo Abiola <br />
                <small>Languages</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy flexyM col-12 staff">
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Five} alt="Header" className="img-fluid" />
              <p>
                Adefemi Osifodunrin <br />
                <small>Languages</small>
              </p>
            </div>
          </div>

          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Seven} alt="Header" className="img-fluid" />
              <p>
                Jacob James <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Seven} alt="Header" className="img-fluid" />
              <p>
                Ani Azubike <br />
                <small>Sciences</small>
              </p>
            </div>
          </div>
          <div clasName="col-md-3">
            <div className="col-md-11 col-12">
              <img src={Eight} alt="Header" className="img-fluid" />
              <p>
                Olofin Oluwafemi <br />
                <small>Olofin Oluwafemi</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy flexyM col-3 staff">
          <div clasName="col-md-3 ">
            <div className="col-md-11 col-12">
              <img src={Nine} alt="Header" className="img-fluid" />
              <p>
                Ahmodu Emmanuel
                <br />
                <small>Language Teacher</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Conduct;
