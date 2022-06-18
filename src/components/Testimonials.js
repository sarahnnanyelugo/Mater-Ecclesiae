import React from "react";
import Item from "./Item";

import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Half from "../assets/halfbg.png";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Ellipse1@2x.png";
import Teach from "../assets/roundMerge.png";
import Micro from "../assets/micro.png";
import Aisle from "../assets/aisle.png";
import Grad from "../assets/gradMerge.png";
import Compute from "../assets/computeMerge.png";

import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      {/* <div className="space">&nbsp;</div> */}
      <div className="col-md-12 left-half web-test">
        <Carousel fade className="col-md-12">
          <Carousel.Item>
            <div ClassName="col-md-12 col-12 flexy">
              <div className="col-md-6  left-wing test-wing flexy">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  {" "}
                  <h5>VOICES</h5>
                  <h2>What They Say About US</h2>
                  <span className="ico">
                    <Icofont icon="icofont-quote-right" />
                  </span>
                  <p>
                    Impressive! In fact, I have talked a few people into sending
                    their children to Mater Ecclesiae College. I am happy I
                    never made a bad decision even when I was talked into not
                    going there due to the distance; I still did not listen and
                    went ahead with my decision.
                  </p>
                </div>
              </div>
              <div className="col-md-10  col-12 merge flexy">
                <div className="col-md-8 topp">
                  {" "}
                  <img
                    className=" d-block img-fluid "
                    src={Grad}
                    alt="Scholar"
                  />
                </div>
                {/* <div className="col-md-5 left-half rotor">
                  
                </div> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div ClassName="col-md-12 col-12 flexy">
              <div className="col-md-6 left-wing test-wing flexy">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  {" "}
                  <h5>VOICES</h5>
                  <h2>What They Say About US</h2>
                  <span className="ico">
                    <Icofont icon="icofont-quote-right" />
                  </span>
                  <p>
                    Impressive! In fact, I have talked a few people into sending
                    their children to Mater Ecclesiae College. I am happy I ne
                  </p>
                </div>
              </div>
              <div className="col-md-10  col-12 merge flexy">
                <div className="col-md-8 topp">
                  {" "}
                  <img
                    className=" d-block img-fluid "
                    src={Teach}
                    alt="Scholar"
                  />
                </div>
                {/* <div className="col-md-5 left-half rotor2"></div> */}
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div ClassName="col-md-12 col-12 flexy">
              <div className="col-md-6 left-wing test-wing flexy">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  {" "}
                  <h5>VOICES</h5>
                  <h2>What They Say About US</h2>
                  <span className="ico">
                    <Icofont icon="icofont-quote-right" />
                  </span>
                  <p>
                    never made a bad decision even when I was talked into not
                    going there due to the distance; I still did not listen and
                    went ahead with my decision. Impressive! In fact, I have
                    talked a few people into sending their children to Mater
                    Ecclesiae College. I am happy I
                  </p>
                </div>
              </div>
              <div className="col-md-10  col-12 merge flexy">
                <div className="col-md-8 topp">
                  {" "}
                  <img
                    className=" d-block img-fluid "
                    src={Compute}
                    alt="Scholar"
                  />
                </div>
                {/* <div className="col-md-5 left-half rotor3"></div> */}
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div ClassName="col-md-12 col-12 flexy">
              <div className="col-md-6 left-wing test-wing flexy">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  {" "}
                  <h5>VOICES</h5>
                  <h2>What They Say About US</h2>
                  <span className="ico">
                    <Icofont icon="icofont-quote-right" />
                  </span>
                  <p>
                    Impressive! In fact, I have talked a few people into sending
                    their children to Mater Ecclesiae College. I am happy I
                    never made a bad decision even when I was talked into not
                    going there due to the distance; I still did not listen and
                    went ahead with my decision.
                  </p>
                </div>
              </div>
              <div className="col-md-10  col-12 merge flexy">
                <div className="col-md-8 topp">
                  {" "}
                  <img
                    className=" d-block img-fluid "
                    src={Teach}
                    alt="Scholar"
                  />
                </div>
                {/* <div className="col-md-5 left-half rotor4"></div> */}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className=" mobile-test ">
        <Carousel fade className="">
          <Carousel.Item>
            <div className=" flexyM">
              <div className="col-md-5 col-5 mobile-side">
                <p>
                  Impressive! In fact, I have talked a few people into sending
                  their children to Mater Ecclesiae College. I am happy I never
                  made a bad decision even when I was talked into not going
                  there due to the distance; I still did not listen and went
                  ahead with my decision.
                </p>
              </div>
              <div className="col-md-7 col-7 mpic">
                {" "}
                <img
                  className=" d-block img-fluid "
                  src={Teach}
                  alt="Scholar"
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="flexyM">
              <div className="col-md-5 col-5 mobile-side">
                <p>
                  never made a bad decision even when I was talked into not
                  going there due to the distance; I still did not listen and
                  went ahead with my decision. Impressive! In fact, I have
                  talked a few people into sending their children to Mater
                  Ecclesiae College. I am happy I
                </p>
              </div>
              <div className="col-md-7 col-7 mpic">
                {" "}
                <img className=" d-block img-fluid " src={Grad} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="flexyM">
              <div className="col-md-5 col-5 mobile-side">
                <p>
                  never made a bad decision even when I was talked into not
                  going there due to the distance; I still did not listen and
                  went ahead with my decision. Impressive! In fact, I have
                  talked a few people into sending their children to Mater
                  Ecclesiae College. I am happy I
                </p>
              </div>
              <div className="col-md-7 col-7 mpic">
                {" "}
                <img className=" d-block img-fluid " src={Compute} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Testimonials;
