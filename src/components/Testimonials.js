import { React, useState } from "react";
import Item from "./Item";

import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Half from "../assets/halfbg.png";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/Ellipse1@2x.png";
import Teach from "../assets/roundMerge2.png";
import Micro from "../assets/micro.png";
import Aisle from "../assets/aisle.png";
import Grad from "../assets/gradMerge2.png";
import Compute from "../assets/computeMerge2.png";

import "./Testimonials.css";

function Testimonials() {
  const [wingRotation, setWingRotation] = useState(0);
  const [wingTop,setWingTop]=useState(0)
  const [wingLeft,setWingLeft]=useState(70)
  const setWing = () => {
    console.log("I got here")
    if (wingRotation === 45) setWingRotation(0);
    else setWingRotation(wingRotation + 15);

    if (wingTop === 15) setWingTop(0);
    else setWingTop(wingTop + 5);

    if (wingLeft === 85) setWingLeft(70);
    else setWingLeft(wingLeft + 5);

    const wingD = document.querySelector(".wing");
    if(wingD==null) return;
    wingD.style.transform = `rotate(${wingRotation}deg)`;
    wingD.style.top = `${wingTop}%`;
    wingD.style.left = `${wingLeft}%`;
  };
  // setInterval(setWing, 1000);
  // setWing();

// useEffect(() => {
//   setInterval(() => {
//     setWing();
//   }, 6000);
// }, []);
  return (
    <>
      {/* <div className="space2">&nbsp;</div> */}

      <div className="left-half col-md-12 flexy web-test">
        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-5">
          <img
            className=" d-block img-fluid wing"
            onClick={setWing}
            src={Half}
            alt="Scholar"
          />
        </div>
      </div>
      <div className="col-md-12  web-test">
        <Carousel fade className="col-md-12 testimonial">
          <Carousel.Item>
            <div ClassName="col-md-12 col-12 flexy">
              <div className="col-md-6  left-wing test-wing flexy">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-9 voice">
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
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-9 voice">
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
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-9 voice">
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
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-9 voice">
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
                <img
                  className=" d-block img-fluid "
                  src={Compute}
                  alt="Scholar"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Testimonials;
