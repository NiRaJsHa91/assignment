import React from 'react'
import '../components/MobileFooter.css'
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useState } from 'react'
const MobileFooter = () => {

  const [showNumber, setShowNumber] = useState(false)

  return (
    <div className="mobileFooter">
      <div className="caller_icon" title="1800 200 1234" onClick={() => setShowNumber(!showNumber)}>
        <CallOutlinedIcon />
        { showNumber && <span>1800 200 1234</span>}
      </div>
      <a href="http://www.facebook.com/cripumps" target="_blank">
        <FacebookOutlinedIcon />
      </a>
      <a href="http://www.crigroups.com" target="_blank">
        <LanguageOutlinedIcon />
      </a>
    </div>
  );
}

export default MobileFooter
