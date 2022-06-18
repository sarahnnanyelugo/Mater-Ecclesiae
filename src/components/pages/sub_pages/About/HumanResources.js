import React from "react";
import Pex from "../../../../assets/draw2.png";
// import Rev from "../../../../assets/admin.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import { Link } from "react-router-dom";

import Clap from "../../../../assets/clap.png";
import Talk from "../../../../assets/talk.png";
import Class from "../../../../assets/class.png";
import Phone from "../../../../assets/phoneicon.png";
import Jar from "../../../../assets/jar.png";
import Books from "../../../../assets/books.png";
import Cap from "../../../../assets/cap.png";


import "./Style.css";

function HumanResources() {
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
          <CBreadcrumbItem active>History of the School</CBreadcrumbItem>
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
            <header>History of the School</header>
          </div>
          <div className=" create">
            <p style={{ paddingTop: "0", margin: "0" }}>
              Monday, 1st day of June 1959 was a day of great joy in the family
              of Gregory Obasola and Victoria Oluremi Martins (both of blessed
              memory). That day witnessed the birth of their third child, the
              second son of the family. He was christened Alfred Anthony
              Adewale. His parents who were both teachers hailed from Ake and
              ljemo in Abeokuta South Local Government Area of Ogun State. The
              young Alfred Martins had his primary education at St. Augustine
              Roman Catholic Mission School, ltesi. Mater Ecclesiae College is
              situated at Old Isiwo Road, Igbodu Village off Molajoye Secondary
              School Road, Epe, Lagos State. The Church of the Assumption,
              Falomo acquired and fenced the 40 acres school land and built the
              school to contribute to the educational sector in Lagos State. It
              has been the desire of the parish community to respond to the need
              for sound moral cum academic upbringing in the younger members of
              society in order to better equip them for the challenges of life
              in today’s society. <br />
              <br />
              We cannot afford to have young leaders without a passion to make a
              positive difference in society. The pioneer students resumed on
              the 13th of September, 2015 with 25 students and to the glory of
              God, there has been a steady increase in the number of students
              admitted to the College, well above a hundred within a short space
              of time. The pioneer set of students sat for the 2018 Basic
              Education Certificate Examinations organized by the national and
              state boards and all recorded impressive results, with
              distinctions and credits – the fruit of their hard work and
              dedication. On the 9th of October, 2021 we graduated our pioneer
              students – Our First Fruits. To the glory of God we have received
              great testimonies on their progress. The 26 of them are Soaring
              high in their different institutions and endeavours.
              <br /> <br />
              Mater Ecclesiae College has the desire to be a first class
              institution of learning, equipped with ultra- modern facilities
              that enhance teaching and learning for purposeful living. Our team
              of experienced and passionate teachers is charged with the task of
              transferring knowledge and sharing ideas with the students both
              within and outside the classroom. Character formation is key to
              our understanding of education. Founded on authentic Christian
              principles, we are confident that any child who passes through the
              educational experience of our College would certainly have a
              reason to be grateful.
            </p>
          </div>
        </div>

        <div className="col-md-12 flexy " style={{ marginTop: "150px" }}>
          <div className="col-md-4">
            <img src={Clap} alt="Header" className="img-fluid" />

            <h3>Our Mission</h3>
            <p>
              As a co-educational Catholic College, we fill students with the
              aspiration to attain the heights in academic pursuits, reverential
              appreciation for the sense of the sacred and love for the
              supremely divine as well as a strong belief in creative thinking
              and initiative.
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
              We believe firmly in christian morality,politeness, hard
              work,responsibility, respect, courtesy and good manners.
            </p>
          </div>
        </div>

        <div className="col-md-12 flexy segments">
          <div className="col-md-4">
            <h3>
              <img src={Phone} alt="Header" className="img-fluid" />
              E-Learning
            </h3>
            <p>
              We expose students to all of the best available resources online
              and offline to keep abreast with theeir counterparts in other
              schools of the world.
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
              <img src={Books} alt="Header" className="img-fluid" />
              Tuition
            </h3>
            <p>
              Our tuition fees are the best available for the standards we
              provide contact us for more information on tuition fees
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <img src={Cap} alt="Header" className="img-fluid" />
              Alumni
            </h3>
            <p>
              Students are exposed to extra artificial intelligience technology
              provided by Robotic Center.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HumanResources;
