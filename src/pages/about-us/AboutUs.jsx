import React from "react";
import "./aboutUs.css";
function AboutUs() {
  return (
    <div className="about">
      <div className="container ">
        <div className="row">
          <div className="mytext col-lg-6 ">
            <h1>About</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa molestiae minus accusamus odio alias placeat at in?
              Perspiciatis expedita praesentium sint? Natus voluptatum incidunt
              corporis architecto reprehenderit adipisci nihil.
            </p>
          </div>

          <div className="icons col-lg-6 ">
            <div className="icon">
              <i class="fa-solid fa-mobile-screen"></i>
              <p>
                <h5>Lorem</h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                culpa molestiae minus accusamus odio alias placeat at in.
              </p>
            </div>
            <div className="icon">
              <i class="fa-solid fa-gear"></i>
              <p>
                <h5>Lorem</h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                culpa molestiae minus accusamus odio alias placeat at in.
              </p>
            </div>
            <div className="icon">
              <i class="fa-solid fa-bell"></i>
              <p>
                <h5>Lorem</h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                culpa molestiae minus accusamus odio alias placeat at in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
