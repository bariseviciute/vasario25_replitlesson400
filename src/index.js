import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const laikutis =
  today.getHours() + today.getMinutes() / 60 + today.getSeconds() / 3600;

const customStyle = {
  color: ""
};

let greeting;

if (laikutis > 0 && laikutis < 12) {
  customStyle.color = "red";
  greeting = "Good morning!";
} else if (laikutis >= 12 && laikutis < 18) {
  customStyle.color = "green";
  greeting = "Good Aftenoon!";
} else if (laikutis >= 18 && laikutis <= 24) {
  customStyle.color = "blue";
  greeting = "Good Evening!";
}

// const customStyle = {
//   color: "green",
//   fontSize: "30px",
//   border: "1px solid black"
// };
// customStyle.color = "magenta";

// ReactDOM.render(
//   <div>
//     {/* <h1 style={{color: "red"}}>Hello World!</h1> */}
//     <h1 style={customStyle}>Hello World!</h1>
//   </div>,
//   document.getElementById("root")
// );
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting} Now {time}
    </h1>
  </div>,
  document.getElementById("root")
);
