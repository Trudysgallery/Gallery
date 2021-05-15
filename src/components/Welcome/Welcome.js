import React from "react";
import './Welcome.css';
import cat from './cat.svg';

function Welcome(props) {
  return (
    <div className="welcomeHeader">
        <img src={cat} className="welcomeHeaderIcon welcomeHeaderIconHead" alt="Cat Silhouette" />
        <h1 className="welcomeHeaderText">Welcome to Trudy's Gallery</h1>
        <img src={cat} className="welcomeHeaderIcon" alt="Cat Silhouette" />
    </div>
  );
}

export default Welcome;