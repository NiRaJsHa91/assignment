import React from 'react'
import "../components/Hero.css";
import award from "../assets/award.png";
import heroImg from "../assets/heroImg.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="awardImage_container">
          <img src={award} alt="award image" />
        </div>
        <div className="hero_right_section">
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul style={{ fontWeight: "500", fontSize: "medium" }}>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <div className="heroImg_container">
            <img src={heroImg} alt="hero image" />
          </div>
          <p>
            Government of India has awarded the{" "}
            <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
    </div>
  );
}

export default Hero
