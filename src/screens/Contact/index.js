import React from "react";
import image1 from "../assets/Arrow 4.png";
import "./index.css";

function Contact() {
    return (
      <section>
      <h2 style={{textAlign: 'center'}} id="A4" class="hh">CONTACT ME</h2>
      <img src={image1} className="center" />
      <br /><br /><br />
      <div style={{position: '-webkit-sticky', /* safari */
    position: 'sticky', top: 0, backgroundColor: 'rgb(182, 240, 182)', border: '2px solid #4CAF50'}}>
        <h4>Email - nimshalkshni@gmail.com</h4>
        <h4>Tel. - 041 6598756</h4>
        <h4>Whatsapp - 0704545486</h4>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </section>
    );
}

export default Contact;