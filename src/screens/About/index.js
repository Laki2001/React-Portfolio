import React from "react";
import image1 from "../assets/images 1.png";
import "./index.css";

function About() {
  return (
    <section className="section" style={{marginTop: '4cm'}} id="A1">
    <div className="columns">
      <div className="column is-two-fifths">
        <img src={image1} className="center" />
        <br /><br />
      </div>
      <div className="column">
        <h2 class="hh">ABOUT ME</h2>
        <p>I am an undergraduate in the University of Colombo <br /> School of Computing following the Information <br /> System Degree.</p>
      </div>
    </div>
  </section>
  );
}

export default About;
