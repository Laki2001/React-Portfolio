import React from "react";
import image1 from "../assets/images 1.png";
import image2 from "../assets/Group 8.png";
import image3 from "../assets/fb.png";
import image4 from "../assets/ig.png";
import image5 from "../assets/yt.png";
import image6 from "../assets/tw.png";
import image7 from "../assets/pt.png";
import image8 from "../assets/Rectangle 1.png";
import "./index.css";

function Home() {
    return (

      <section className="section">
        <img src={image8} width="5000px" height="3000px" id="bc" />
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#A1"> 
              About Me
            </a>
            <a className="navbar-item" href="#A2">
              Qualification
            </a>
            <a className="navbar-item" href="#A3">
              Projects
            </a>
            <a className="navbar-item" href="#A4">
              Contact
            </a>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</nav>
      <div className="columns">
        <div className="column is-three-fifths">
          <br /><br /><br />
          <h1 style={{fontSize: '70px'}}><b>Hii! I'm <br />Nimesha Lakshani.</b></h1>
          <h4>WEB DESIGNER</h4>
        </div>
        <div className="column">
          <br />
          <img id="pic" src={image1} width="400px" height="400px" className="center" />
          <img id="grp1" src={image2} width="600px" height="600px" style={{left: '20cm', top: '-2cm'}} />
          <br /><br />
          <div className="columns" id="pic">
            <div className="column is-one-fifth"><a href="https://www.facebook.com/nimesha.lakshani.1694059"><img src={image3} width="60px" height="60px" /></a></div>
            <div className="column"><a href="https://www.instagram.com/_shani_14__/"><img src={image4} width="60px" height="60px" /></a></div>
            <div className="column"><a href="https://www.youtube.com/index"><img src={image5} width="60px" height="60px" /></a></div>
            <div className="column"><a href="https://twitter.com/i/flow/login"><img src={image6} width="60px" height="60px" /></a></div>
            <div className="column"><a href="https://www.pinterest.com/login/"><img src={image7} width="60px" height="60px" /></a></div>
          </div>
        </div>
      </div>
    </section>

    );
        
    }
    
    export default Home;