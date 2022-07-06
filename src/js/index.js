//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

import Counters from "./component/counter.jsx";

//render your react application
ReactDOM.render(<Counters />, document.querySelector("#app"));

let number = 0;

setInterval(() =>{ //Function to Modify every secs
    number++
    ReactDOM.render(<Counters number={number}/>, document.querySelector("#app"))
}, 0.00001)