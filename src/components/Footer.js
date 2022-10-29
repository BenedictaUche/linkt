import React from "react";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import imgs from "./zuri.png";

function Footer() {
    return (
      <footer>
        <div class="container footer mobile">
          <h3 class="foot-side">Zuri<span>.</span> Internship</h3>
          <p className="p-d-flex" id="center">HNG Internship 9 Frontend Task</p>
          <div class="ingress">
            <img src={imgs} alt="Some logos" id="img_ing"/>
          </div>
        </div>
      </footer>
    )
}
 
export default Footer;
