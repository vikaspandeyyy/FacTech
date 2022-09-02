import React from "react";
import "../index.css";

const Form = () => {
  return (
    <div className="Form">
      <div className="boxes">
        <div className="left box">
          <a href="">
            <p>Unit Mapped</p>
            <p>2/725</p>
          </a>
        </div>
        <div className="middle box">
          <a href="">
            <p>Active Charges</p>
            <p>7/7</p>
          </a>
        </div>
        <div className="right box right-box">
          <a href="">
            <p>Reading</p>
            <p>-/2</p>
          </a>
        </div>
      </div>

      <div className="form-input">
        <div className="forms">
          <div className="billing-input">
            <div className="form-dropdown">
              <div className="label label-icon">
                <div>
                  <h4>
                    Billing cycle <span style={{ color: "red" }}>*</span>
                  </h4>
                </div>
                <div className="icons">
                  <h2 style={{ paddingRight: 7 }}>
                    <a href="">
                      <i class="fa fa-edit"></i>
                    </a>
                  </h2>
                  <h2>
                    <a href="">
                      <i
                        className="fa fa-plus-circle btn-color"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </h2>
                </div>
              </div>
              <select id="select" name="">
                <option value="">NOV-21-B2C | B2C</option>
                <option value="">NOV-21-B2C | B2C</option>
                <option value="">NOV-21-B2C | B2C</option>
              </select>
            </div>
            <h4 className="billing-tag">
              Billing cycle is active.<i className="fa fa-check-square"></i>
            </h4>
          </div>
          <div className="form-dropdown cluster">
            <div className="label label-icon">
              <div>
                <h4>Cluster</h4>
              </div>
            </div>
            <select id="select-2" name="">
              <option value="">AEM</option>
              <option value="">AEM</option>
              <option value="">AEM</option>
            </select>
            <button className="cross">
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
        <div className="forms">
          <div className="form-dropdown">
            <div className="label label-icon">
              <div>
                <h4>Tower</h4>
              </div>
            </div>
            <select id="select-2" name="">
              <option value="">Select Tower</option>
              <option value="">Select Tower</option>
              <option value="">Select Tower</option>
            </select>
            <button className="cross">
              <i className="fa fa-close"></i>
            </button>
          </div>
          <div className="form-dropdown">
            <div className="label label-icon">
              <div>
                <h4>Unit</h4>
              </div>
            </div>
            <select id="select-2" name="">
              <option value="">AMN0020905-Lokendra Kumar Sharma</option>
              <option value="">AMN0020905-Lokendra Kumar Sharma</option>
              <option value="">AMN0020905-Lokendra Kumar Sharma</option>
            </select>
            <button className="cross">
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
        <input type="text" placeholder="Remarks" id="remark" />
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
          <h5 className="input-span">
            Provisional Bill <i class="fa fa-question-circle"></i>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Form;
