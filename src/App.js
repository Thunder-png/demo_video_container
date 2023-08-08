// App.js
import React, { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Intro from "./media/Intro.mp4";
import PlayButton from "./image/play-button.png";

function App() {
  return (
    <div className="App">
      <div className="bg-overlay">
        <div className="wrapper">
          <div className="box">
            <p>Interactive Video</p>
          </div>
        </div>
        <a className="play-btn" href="/chapter-one">
          <div class="spinner">
            <div class="spinnerin"></div>
          </div>
          <img src={PlayButton} height={"50px"} alt="" />


        </a>

        <div className="wrap">
          <a href="#"></a>
        </div>
      </div>
      <VideoPlayer url={Intro} />
    </div>
  );
}

export default App;
