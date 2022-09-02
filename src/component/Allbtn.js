import React from "react";
import "../index.css";

const Allbtn = () => {
  return (
    <div className="Allbtn">
      <div className="left-Btn">
        <button className="generate btnTxt">
          <a href="">
            <i className="fa fa-microchip btnIcon"></i>Generate
          </a>
        </button>
        <button className="preview btnTxt">
          <a href="">
            <i className="fa fa-eye btnIcon"></i>Preview
          </a>
        </button>
        <button className="file">
          <a href="">
            <i className="fa fa-file-excel-o btn-icon"></i>
          </a>
        </button>
        <button className="print btnTxt">
          <a href="">
            <i className="fa fa-print btnIcon"></i>Print
          </a>
        </button>
        <button className="file">
          <a href="">
            <i className="fa fa-file-excel-o btn-icon"></i>
          </a>
        </button>
      </div>
      <div className="right-btn">
        <button className="mail-icon">
          <a href="">
            <i className="fa fa-envelope btnIcon"></i>
          </a>
        </button>
        <button className="icon_right">
          <a href="">
            <i className="fa fa-eye btn-icon"></i>
          </a>
        </button>
        <button className="icon_right">
          <a href="">
            <i className="fa fa-print btn-icon"></i>
          </a>
        </button>
        <button className="print btnTxt">
          <a href="">
            <i className="fa fa-mobile-phone btnIcon"></i>SMS
          </a>
        </button>
        <button className="icon_right">
          <a href="">
            <i className="fa fa-eye btn-icon"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Allbtn;
