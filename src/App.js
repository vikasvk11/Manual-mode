import React, { useState } from "react";
import "./styles.css";
import imageW from "./websiteB.png";
import imageG from "./GitHub-MarkB.png";
import imageL from "./LinkedINB.png";
import imageI from "./instagramB.png";

const dataBase = {
  Aperture: [
    "It's the opening in the lens.",
    "Expressed as f-number.",
    "Bigger the number, smaller the opening which implies less light. Eg: f/1.8 lets in more light than f/16."
  ],
  ShutterSpeed: [
    "Length of time the camera shutter is open.",
    "Expressed in seconds / fractions of a second.",
    "Longer shutter imlpies more light the sensor is exposed to, and vice versa. Eg: 1s, 1/250s."
  ],
  ISO: [
    "Brightness added by the camera processor.",
    "Expressed in plain numbers. Higher the number, lesser the quality of photo.",
    "Modern cameras have base value as ISO 100. Double the value, double the brightness of the photo. Eg: ISO200 -> ISO400."
  ]
};

const sections = Object.keys(dataBase);

function App() {
  const [output, setOutput] = useState([]);

  function clickHandler(item) {
    setOutput(dataBase[item]);
  }
  return (
    <div className="App">
      <div className="gap">
        {/*Title & intro section*/}

        <h1>📷Manual Mode</h1>

        <p className="para">
          In Manual mode YOU control the amount of Light the sensor gets exposed
          to.
        </p>
        <p className="para">
          <span>☀️Light</span> is controlled using the below three elements.
        </p>
        <p className="para click">Click on the elements below to Know More!</p>

        {/*Button component*/}

        {sections.map((item) => (
          <button key={item} onClick={() => clickHandler(item)}>
            {item}
          </button>
        ))}

        {/*Know More component*/}

        <ul className="list-non-bullet">
          {output.map((text, index) => (
            <li className="points" key={index}>
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/*Footer component*/}

      <footer>
        <div className="footer-header">Connect with me on</div>
        <ul className="footer-list">
          <li className="list-item-inline">
            <a href="https://vikasvk.netlify.app/">
              <img
                width="20"
                height="20"
                viewBox="0 0 20 20"
                src={imageW}
                alt="Website"
              />
            </a>
          </li>

          <li className="list-item-inline">
            <a href="https://github.com/vikasvk11">
              <img
                width="20"
                height="20"
                viewBox="0 0 20 20"
                src={imageG}
                alt="GitHub"
              />
            </a>
          </li>

          <li className="list-item-inline">
            <a href="https://www.linkedin.com/in/vikas-v-k-a613bb138/">
              <img
                width="20"
                height="20"
                viewBox="0 0 30 30"
                src={imageL}
                alt="LinkedIn"
              />
            </a>
          </li>

          <li className="list-item-inline">
            <a href="https://www.instagram.com/vikasvk_">
              <img
                width="20"
                height="20"
                viewBox="0 0 30 30"
                src={imageI}
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
