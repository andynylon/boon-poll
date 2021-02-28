import React from "react";
import "./Footer.scss";

import Kim from "../../assets/images/kim.png";
import Trump from "../../assets/images/trump.png";
import Putin from "../../assets/images/putin.png";

const activeProfiles = [Kim, Trump, Putin];
const Footer = () => {
  return (
    <div className="poll-footer">
      <div className="poll-footer__active-profiles">
        {activeProfiles.map((img, i) => {
          return <img key={i} src={img} alt="" />;
        })}
      </div>
      <p className="poll-footer__active-count">65</p>
      <p className="poll-footer__remaining">2 hours</p>
    </div>
  );
};

export default Footer;
