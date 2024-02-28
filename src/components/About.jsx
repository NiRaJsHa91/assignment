import React from "react";
import "../components/About.css";
import { categories } from "../assets/constants";

const About = () => {
  return (
    <div className="about">
      <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
      <p style={{ fontWeight: "550", fontSize: "small" }}>
        {categories.map((item) => {
          return (
            <span
              key={item.id}
              style={
                categories.length == item.id
                  ? { borderRight: "none", paddingLeft: "5px" }
                  : {
                      borderRight: "2px solid #ec3237",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      lineHeight: "1.5",
                      fontWeight: "600",
                    }
              }
            >
              {item.title}{" "}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default About;
