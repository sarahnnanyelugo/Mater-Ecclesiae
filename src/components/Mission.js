import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

import { Link } from "react-router-dom";

import "./Mission.css";

function Mission() {
  return (
    <>
      <div className="col-md-12 flexy Mbody">
        <div className="col-md-3 mission">
          <small>OUR MISSION</small>
          <h3>A College-Ready Environment</h3>
          <p>
            We help our students realize their whole potential with a balanced
            approach to education that leads to brilliance.
          </p>
          <br /> <br /> <br /> <br />
          <div> </div>
        </div>
        <div className="vision-cont2 col-md-9">
          <Carousel itemsToShow={1}>
            <Item>
              <div className="moreEvents col-md-12">
                <div className="event-list col-md-12 flexy">
                  <div className="col-md-4 M1">
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small>
                        02/04/2020 <Link className="rm">Read More</Link>
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4 M2">
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small>
                        02/04/2020 <Link className="rm">Read More</Link>
                      </small>
                    </div>
                  </div>
                  <div className="v-hide col-md-4 M3">
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small>
                        02/04/2020 <Link className="rm">Read More</Link>
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
                        02/04/2020 <Link className="rm">Read More</Link>
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4 E2">
                    {/* <img src={Interhouse} alt="" className="img-fluid" /> */}
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small>
                        02/04/2020 <Link className="rm">Read More</Link>
                      </small>
                    </div>
                  </div>
                  <div className="v-hide col-md-4 E3">
                    {/* <img src={Church} alt="" className="img-fluid" /> */}
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small>
                        02/04/2020 <Link className="rm">Read More</Link>
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
                        02/04/2020 <Link className="rm">Read More</Link>
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4 E2">
                    {/* <img src={Interhouse} alt="" className="img-fluid" /> */}
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small>
                        02/04/2020 <Link className="rm">Read More</Link>
                      </small>
                    </div>
                  </div>
                  <div className="v-hide col-md-4 E3">
                    {/* <img src={Church} alt="" className="img-fluid" /> */}
                    <button className="event-btn">EVENT</button>
                    <div className="info">
                      <h5>CULTURAL DAY</h5>
                      <small className="rm">
                        02/04/2020 <Link>Read More</Link>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Mission;
