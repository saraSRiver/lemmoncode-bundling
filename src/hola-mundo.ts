import "./styles.scss";
import logoImg from "./img/logoDreamworks.png";

let text = "Hola mundo";
let img = document.createElement("img");

document.write(text);
img.src = logoImg;

document.getElementById("logo")?.appendChild(img);