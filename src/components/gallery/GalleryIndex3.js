import React from "react";

import Photos6 from "../../assets/2.png";
import Craft from "../../assets/yellow.png";
import Exam from "../../assets/happygirls.png";
import Drama from "../../assets/compute.png";
import Grass from "../../assets/pitch.png";
import Smile from "../../assets/circle.png";
import Craft2 from "../../assets/1.png";

import Gift from "../../assets/band.png";
import "../HeroSection.css";

function GalleryIndex3() {
  return (
    <>
      <table className="gallery">
        <tr>
          <td className="mic-img">
            <div
              style={{
                background: `url(${Craft}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td classname="col-md-3">
            <div
              style={{
                background: `url(${Gift}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          <td classname="col-md-3">
            <div
              style={{
                background: `url(${Exam}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td classname="col-md-3">
            <div
              style={{
                background: `url(${Drama}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td rowSpan="3" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Grass}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Smile}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Craft2}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Photos6}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
export default GalleryIndex3;
