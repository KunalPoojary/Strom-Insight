import React from "react";
import EarthCanvas from "./EarthCanvas";
import sample from "../assets/sample.mp4";

function Intro() {
  const handlePredict = () => {
    const element = document.querySelector(".form-wrapper");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleForecast = () => {
    const forecaste = document.querySelector(".map-wrapper");
    window.scrollTo({
      top: forecaste?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    // <div className="bg-video">
    //   <video src={sample} className="videoTag" autoPlay loop muted />
      <div className="intro-container">
        <video autoPlay loop muted
      style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}>
        <source src={sample} type="video/mp4" />
      </video>
        <div className="header-content">
          <div className="text-content">
            <h1 className="abril">
              Cyclone Insight:
              <br />
              Intensity Forecast
            </h1>
            <p>
              Advancing safety and preparedness through accurate cyclone
              intensity prediction.
            </p>
            <div className="buttons">
              <button className="component-button" onClick={handlePredict}>
                Predict Intensity
              </button>
              <button className="component-button2" onClick={handleForecast}>
                Realtime Weather
              </button>
            </div>
          </div>
        </div>
        <div className="align-wrapper">
          <div className="canvas-wrapper">
            <EarthCanvas />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Intro;
