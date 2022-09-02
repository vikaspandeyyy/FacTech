import React from "react";
import "../index.css";

const Billing = () => {
  return (
    <div className="bill">
      <table >
        <caption>Billing cycle</caption>
        <tr>
          <td>
            <strong>Billing period FROM | TO</strong>
          </td>
          <td>01 Nov 2021 | 30 Nov 2021</td>
        </tr>
        <tr>
          <td>
            <strong>Bill due date</strong>
          </td>
          <td>01 Jan 2022 | 01 Jan 2022</td>
        </tr>
        <tr>
          <td>
            <strong>Consider Payment To</strong>
          </td>
          <td>30 Nov 2021</td>
        </tr>
        <tr>
          <td>
            <strong>Consider meter FROM | TO</strong>
          </td>
          <td>01 Nov 2021 | 30 Nov 2021</td>
        </tr>
      </table>
    </div>
  );
};

export default Billing;
