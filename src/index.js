import _ from "lodash";
import "./style.scss";
import MyImage from "./myimage.png";
import Data from "./data.xml";
import Notes from "./data.csv";
function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack 大家好，我在拉後雅"], " ");
  element.classList.add("hello");

  const myImage = new Image();
  myImage.src = MyImage;
  console.log(Data);
  console.log(Notes);
  element.appendChild(myImage);
  return element;
}

document.body.appendChild(component());
