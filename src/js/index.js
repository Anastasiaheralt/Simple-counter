//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let secondcounter = 0;

setInterval(function(){
    secondcounter = secondcounter + 1 ;
    ReactDOM.render(<Home seconds={secondcounter} />, document.querySelector("#app"));
}, 1000)