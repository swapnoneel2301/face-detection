import React from "react";
import VideoInput from "./VideoInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="navbar">
        <img
          src="https://framerusercontent.com/images/P64KeLPYWqa3hUSC3tAgHKYNnk.png"
          alt="brand"
        />
      </div>
      <div class="main">
        <h1 class="title">
          Upload Your Video to <br></br>
          <span class="special">Detect Faces</span>
        </h1>
        <VideoInput width={400} height={300} />
      </div>
    </div>
  );
}

export default App;
