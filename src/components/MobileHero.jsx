import React from 'react'
import '../components/MobileHero.css'
import award from "../assets/award.png";
import heroImg from "../assets/heroImg.png";
const MobileHero = () => {
  return (
    <div className="mobileHero">
      <div className="mobileHero_top">
        <h5>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h5>
        <ul style={{ fontWeight: "500",fontSize: "12px" }}>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy
          </li>
          <br />
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
      </div>
      <img className="heroImg" src={heroImg} alt="hero image" />

      <div className="mobileHero_bottom">
        <img src={award} alt="award image" />
        <p>
          Government of India has awarded the{" "}
          <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </div>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
    </div>
  );
}

export default MobileHero
