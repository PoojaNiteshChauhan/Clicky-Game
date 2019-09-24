import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div id="menu-nav">
    <div id="navigation-bar">
      <ul>
        <li><a href="#"><i className="fa "></i><span>Clicky Game</span></a></li>
        <li><a><i className="fa "></i><span>Click an Image to begin</span></a></li>
        <li><a><i className="fa "></i><span>Top Score : 0 || Top Score : 0</span></a></li>
        
      </ul>
    </div>
    </div>

  )
  
  
  
//  <h1 className="title">{props.children}</h1>;
}

export default Navbar;
