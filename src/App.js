import React from "react";
import Allbtn from "./component/Allbtn";
import Middle from "./component/Middle";
import Topnav from "./component/Topnav";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="app">
        <Topnav />
        <Middle/>
        <Allbtn/>
      </div>
    </div>
  );
};

export default App;
