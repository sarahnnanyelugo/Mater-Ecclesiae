import React from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
// import Violin from "../assets/perform.png";
// import Interhouse from "../assets/salute.png";
// import Church from "../assets/maime.png";
// import Circle2 from "../assets/Circle.png";
import { Link } from "react-router-dom";

import "./Vision.css";


function Vision() {
  return (
    <>
      <div className="box-event vBody">
        <div className="box-event-cont">
          <label htmlFor="">NEWS + EVENTS</label>
          <h4>News And Updates</h4>
          <p className="col-md-12">Stay in loop with our school events and activities</p>
        </div>
      </div>

      <div className="vision-cont">
        <Carousel itemsToShow={1}>
          <Item>
            <div className="moreEvents">
              <div className="event-list flexy">
                <div className="col-md-4 E1">
                  {/* <img src={Violin} alt="" className="img-fluid" /> */}

                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
                <div className="col-md-4 E2">
                  {/* <img src={Interhouse} alt="" className="img-fluid" /> */}
                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
                <div className="v-hide col-md-4 E3">
                  {/* <img src={Church} alt="" className="img-fluid" /> */}
                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="moreEvents">
              <div className="event-list flexy">
                <div className="col-md-4 E1">
                  {/* <img src={Violin} alt="" className="img-fluid" /> */}

                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
                <div className="col-md-4 E2">
                  {/* <img src={Interhouse} alt="" className="img-fluid" /> */}
                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
                <div className="v-hide col-md-4 E3">
                  {/* <img src={Church} alt="" className="img-fluid" /> */}
                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Item>
          <Item>
            <div className="moreEvents">
              <div className="event-list flexy">
                <div className="col-md-4 E1">
                  {/* <img src={Violin} alt="" className="img-fluid" /> */}

                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
                <div className="col-md-4 E2">
                  {/* <img src={Interhouse} alt="" className="img-fluid" /> */}
                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
                <div className="v-hide col-md-4 E3">
                  {/* <img src={Church} alt="" className="img-fluid" /> */}
                  <button className="event-btn">EVENT</button>
                  <div className="info">
                    <h5>CULTURAL DAY</h5>
                    <small>
                      02/04/2020 <Link className="rm2">Read More</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </Carousel>
        <div>
          <Link to="/News" className="more-news2">
            <button>See More</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Vision