import React from "react";
import image1 from "../assets/download.png";
import image2 from "../assets/Group 3.png";
import image3 from "../assets/Ellipse 4.png";


import "./index.css";

function Projects() {
  return (


    <section className="section" id="A3">
    
        <h2 class="hh">PROJECT, AWARDS AND CERTIFICATIONS</h2>
        <div className="columns">
          <div className="column is-half">
            <br />
            <img src={image1} className="center" />
            <ol>
              <li>Camera Motion System</li>
              <li>Bug Tracker</li>
              <li>e-Learning platform</li>
            </ol>
          </div>
          <div className="column">
            <br />
            <img src={image2} className="center" />
            <img src={image3} id="grp3" />
            <ol>
              <li>Google Cloud Professional Data Engineer.</li>
              <li>Google Cloud Professional Cloud Architecture.</li>
              <li>AWS Certified Solutions Architect - Associate.</li>
              <li>Certified in Risk and Information System Control (CRISC)</li>
            </ol>
          </div>
        </div>
      </section>
  );
}

export default Projects;
