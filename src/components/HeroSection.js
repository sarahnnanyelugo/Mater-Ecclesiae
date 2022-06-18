import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/slide1.png";
import Teach from "../assets/teach.png";
import Micro from "../assets/micro.png";
import Aisle from "../assets/aisle.png";

import Teacher from "../assets/juniorblock.png";
import { Link } from "react-router-dom";
import Cart from "./Testimonials";

import Line from "../assets/redlin.png";

import Socials from "./Socials";
import Vision from "./Vision";

import SideButtons from "./SideButtons";
import Mission from "./Mission";
import GalleryIndex from "./gallery/GalleryIndex";

import "./HeroSection.css";

function HeroSection() {
   

  return (
    <>
      <div className="page-trans ">
        <div className="  landing">
          {/* <div className="col-md-4">&nbsp;</div> */}
          <div className="col-md-12 ">
            <Carousel fade className="col-md-12">
              <Carousel.Item>
                <div ClassName="land col-md-12 col-12 flexy">
                  <div className="col-md-4 left-wing left-wing2">
                    <h1>Fostering Togetherness and Team Work</h1>
                    <p>
                      Mater Ecclesiae college provides an academically
                      challenging approach to education in a strong and vibrant
                      Catholic environment.
                    </p>

                    <div className="mt-5 flexy dis">
                      <a href={"/principal"} className="read ">
                        Discover
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8  col-12">
                    {" "}
                    <img
                      className=" imgCaro d-block img-fluid"
                      src={scholar}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item ClassName="land">
                <div ClassName="land col-md-12 col-12 flexy">
                  <div className="col-md-4 left-wing left-wing2">
                    <h1>Exquisite Learning and Academic Resources</h1>
                    <p>
                      Mater Ecclesiae college provides you an environment where
                      there is a balance socially and academically
                    </p>

                    <div className="mt-5 flexy dis">
                      <a href={"/principal"} className="read ">
                        Discover
                      </a>
                    </div>
                  </div>

                  <div className="col-md-8  col-12">
                    {" "}
                    <img
                      className="imgCaro d-block img-fluid"
                      src={Teach}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item ClassName="land">
                <div ClassName="land col-12 flexy">
                  <div className="col-md-4 left-wing   left-wing2">
                    <h1>A Place to Learn and Invent</h1>
                    <p>
                      We strive to develop dynamic minds. We believe academics
                      are important, and so are clubs, teams and friends.
                    </p>

                    <div className="mt-5 flexy dis">
                      <a href={"/principal"} className="read ">
                        Discover
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 col-12">
                    {" "}
                    <img
                      className="imgCaro d-block img-fluid"
                      src={Micro}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item ClassName="land">
                <div ClassName="land col-md-12 col-12 flexy">
                  <div className="col-md-4 left-wing left-wing2">
                    <h1>
                      Growing in Interpersonal Relationships and Tolerance
                    </h1>
                    <p>
                      Every student has learned the importance of embracing and
                      Sharing the Love of the Heart of Christ.
                    </p>

                    <div className="mt-5 flexy dis">
                      <a href={"/principal"} className="read ">
                        Discover
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8  col-12">
                    {" "}
                    <img
                      className="imgCaro d-block img-fluid"
                      src={Aisle}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="image-bgM col-10"></div>

        <div className="image-bg col-md-6"></div>
        <div className="col-md-5  smallbg"></div>

        <SideButtons />

        <div className="intro-container">
          <div className="intro-cover flexy col-md-12">
            <div className="col-md-2 ghalfb">&nbsp;</div>
            <div className="welcome-img col-md-5">
              <img className="head-teacher-img " src={Teacher} alt="" />
            </div>
            {/* <div className="col-md-1">&nbsp;</div> */}

            <div className="welcome-note note1">
              <h1>Welcome to MATER ECCLESIAE COLLEGE</h1>

              <div className="mt-3 greet">
                <p>
                  In an atmosphere of complementarity, our young boys and girls
                  work together and offer their special abilities and potentials
                  for the common good. The dignity of every human person,
                  regardless of gender is of utmost concern in our College.
                </p>
              </div>

              <div className="mt-5 flexy ">
                <a href={"/principal"} className="read3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 halfbg"></div>

        <Mission />

        <Vision />

        {/* <Socials /> */}

        <Cart />

        <div className="col-md-12 tor">
          <h5>EXPLORE</h5>
          <h3>Take a School Tour</h3>
        </div>

        <GalleryIndex />
      </div>
    </>
  );
}

export default HeroSection;
