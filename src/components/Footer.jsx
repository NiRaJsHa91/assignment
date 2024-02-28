import React from "react";
import "../components/Footer.css";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_section">
        <CallOutlinedIcon className="callIcon"/>
        <span>
          Toll free <span style={{ fontWeight: "500" }}>1800 200 1234</span>
        </span>
      </div>
      <div className="footer_section">
        <FacebookOutlinedIcon />
        
          <span style={{ fontWeight: "500" }}>www</span>
          .facebook.com/cripumps
        
      </div>
      <div className="footer_section">
        <LanguageOutlinedIcon />
        <span>
          <span style={{ fontWeight: "500" }}>www</span>.crigroups.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
