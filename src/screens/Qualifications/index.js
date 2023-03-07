
import React from "react";
import image1 from "../assets/Group 4.png";
import image2 from "../assets/Group 2.png";

import "./index.css";

function Qualifications() {
return (
  
  <section className="section">
          <div className="columns">
            <div className="column is-three-fifths">
              <img id="grp2" src={image1} />
              <h2 id="A2" class="hh">EDUCATION QUALIFICATION</h2>
              <div className="list">
                <ul>
                  <div className="list-item">
                    <li>I have passed General Certificate of Education Advanced Level Examination in Common Stream from H/Tangalle Balika Vidyalaya, Tangalle, Hambantota, Sri Lanka.</li>
                  </div>
                  <div className="list-item">
                    <li>I have passed General Certificate of Education Ordinary Level Examination from H/Tangalle Balika VIdyalaya, Tangalle, Hambantota, Sri Lanka. </li>
                  </div>
                  <div className="list-item">
                    <li>I have successfully completed Diploma in English Language at University of Ruhuna, Sri Lanka.</li>
                  </div>
                </ul>
              </div>
              <h2 class="hh">PROFESSIONAL QUALIFICATION</h2>
              <ul>
                <li>Two year working experience in ABC Company, Panadura.</li>
                <li>6 month working experience of XISTA Company, Maharagama.</li>
              </ul>
            </div>
            <div className="column">
              <br /><br />
              <img src={image2} />
            </div>
          </div>
        </section>
);
}

export default Qualifications;
