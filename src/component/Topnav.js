import React from "react";
import "../index.css";

const Topnav = () => {
  return (
    <div className="topNav">
      <div className="top-left">
        <h2 className="left-arrow btn-color">
          <i className="fa fa-arrow-circle-left"></i>
        </h2>
        <p className="back">
          <a href="">BACK</a>
        </p>
        <ul className="ulList">
          <li className="liList B2B">B2C</li>
          <li className="liList">B2B Tax</li>
          <li className="liList">B2B Supply</li>
          <li className="liList">Manual</li>
        </ul>
        <h2 className="addBtn">
          <a href="">
            <i className="fa fa-plus-circle btn-color" aria-hidden="true"></i>
          </a>
        </h2>
      </div>
      <div className="top-right">
        <span>Bill Documentation</span>
      </div>
    </div>
  );
};

export default Topnav;
