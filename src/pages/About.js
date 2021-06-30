import React from "react";
import "./About.css";

const ABOUTBLURB1="I am a painter and crafter who loves the natural world and spiritual realm.";
const ABOUTBLURB2="I love working with Terra Cotta pots and also making empowering feminine pieces." ;
const ABOUTBLURB3="Reach out to me to discuss making your idea a reality!";

function About(props) {
  return (
    <div className="about-blurb-div">
      <p className="about-blurb-p">{ABOUTBLURB1}</p>
      <p className="about-blurb-p">{ABOUTBLURB2}</p>
      <p className="about-blurb-p">{ABOUTBLURB3}</p>
    </div>
  );
}

export default About;