import React from "react";
import "./AboutStyles.css";
import romania1 from "../../assets/romania1.jpg";
import romania2 from "../../assets/romania2.jpg";
import romania6 from "../../assets/romania_flag.png";
import romania5 from "../../assets/romania_karta.gif";
import romania4 from "../../assets/Citadel-Rasnov-Romania.jpg";

function About() {
  return (
    <div name="about" className="about">
      <div className="container">
        <h2 class="hbold">Romania in brief</h2>
        <div class="seal">
          <img src={romania6} alt="Flag of Romania" title="Romania flag" />
            
        </div>
        <div classname="table">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
        <h1> Table</h1>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={romania5} alt="/" />
          <img src={romania6} alt="/" />
          <img src={romania2} alt="/" />
          <img src={romania1} alt="/" />
          <img src={romania4} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
