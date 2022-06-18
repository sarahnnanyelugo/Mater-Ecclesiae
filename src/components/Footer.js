import React, { useState } from 'react';
import {Link} from "react-router-dom";
import SchLogo from "../assets/mater-logo.png";

import WaterMark from "../assets/Group1066.png";

import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/IG.svg";
import Twitter from "../assets/twitter.svg";




import "./Footer.css";


function Footer() {
const [isShown, setIsShown] = useState(true);
const [isShown2, setIsShown2] = useState(true);
const [isShown3, setIsShown3] = useState(true);

  return (
    <>
      <div className="container  smooth">
        <div className="join-head">
          <label2 htmlFor="">EXPLORE</label2>
          <h1>Discover More</h1>
        </div>

        <div className="col-md-12 flexy">
          <div className="col-md-4 go">
            <Link to="/Contact" className="go">
              <div
                onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
                className={`col-md-12 details ${isShown ? "draw" : ""}`}
                id="draw"
              ></div>
              <div
                onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
                className={`enq ${!isShown ? "enqH" : ""}`}
                id="enq"
              >
                <h3>Enquire</h3>
                <div className="emp"></div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 go">
            <Link to="/Contact" className="go">
              <div
                onMouseEnter={() => setIsShown2(false)}
                onMouseLeave={() => setIsShown2(true)}
                className={`col-md-12 details ${isShown2 ? "draw2" : ""}`}
                id="draw"
              ></div>
              <div
                onMouseEnter={() => setIsShown2(false)}
                onMouseLeave={() => setIsShown2(true)}
                className={`enq ${!isShown2 ? "enqH" : ""}`}
                id="enq"
              >
                <h3>Visit</h3>
                <div className="emp2"></div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <a
              href="https://evergreen.educare.school/admission-form"
              className="go"
            >
              <div
                onMouseEnter={() => setIsShown3(false)}
                onMouseLeave={() => setIsShown3(true)}
                className={`col-md-12 details ${isShown3 ? "draw3" : ""}`}
                id="draw"
              ></div>
              <div
                onMouseEnter={() => setIsShown3(false)}
                onMouseLeave={() => setIsShown3(true)}
                className={`enq ${!isShown3 ? "enqH" : ""}`}
                id="enq"
              >
                <h3>Apply</h3>
                <div className="emp3"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer ">
        <div className="col-md-12 flexy">
          <div className="col-md-5">
            <Link to={"/"}>
              <img src={SchLogo} alt=" logo" className="footerlogo" />
            </Link>{" "}
            <p>
              Mater Ecclesiae College is a Catholic College established by the
              Church of the Assumption, Falomo to contribute to the educational
              sector in Lagos State. Operating since 2015 with 25 students,
              there has been a steady increase in the number of students
              admitted to the College.
            </p>
          </div>

          <div className="col-md-1">&nbsp;</div>

          <div className="col-md-2">
            <h5>Get in Touch</h5>
            <br /> <br />
            <h5>Telephone</h5>
            <p>
              {" "}
              (+234)0704 507 7560,
              <br /> 0807 559 4742
            </p>
            <h5>Enquiries Email</h5>
            <p>info@materecclesiaecollege@gmai.com</p>
            <h5>Address</h5>
            <p>
              Address:
              <br /> Old Isiwo Road, Igbodu Village, Epe Lagos State
            </p>
          </div>

          <div className="col-md-2 shift">
            <h5>Useful Link</h5>
            <br />
            <ul class="list-unstyled">
              <li>
                <a href="/learn/primary_school">Junior School</a>
              </li>
              <li>
                <a href="/learn/secondary_school">Senior School</a>
              </li>
              <li>
                <a href="/about/contact-us">Enquiry</a>
              </li>
              <li>
                <a href="/academics/how_to_apply">Apply</a>
              </li>
            </ul>

            <h4 className="folow">Connect And Share</h4>
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

          <div className="col-md-2 w-mark">
            <a
              href={"http://educare.school/"}
              target={"_blank"}
              style={{ display: "inline-block" }}
            >
              <img src={WaterMark} alt="Aisa" className="img-fluid"></img>
            </a>
          </div>
        </div>

        <span className=" col-md-12 flexy">
          <div className="col-md-11">&nbsp;</div>
          <a
            href="#top"
            onclick="topFunction()"
            title="Go to top"
            id="scroll-up"
            className="col-md-1"
          >
            <span className="up">
              <span className="up2">^</span>
              <span className="up3">Top </span>
            </span>
          </a>
        </span>

        <div className="col-md-12 flexy boda">
          <div className="col-md-3 copi">
            <p>&copy; 2022 Mater Ecclesiae College-All RIghts</p>
          </div>
          <div className="col-md-7">&nbsp;</div>
          <div className="col-md-2 lastcopi">
            <p>
              <a href="inquiry.html">Contact Us</a> <span>|</span> Data
              Production
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer