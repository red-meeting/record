import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import Generate from "./pages/Generate";
import Index from "./pages/Index";
import Loading from "./pages/Loading";
import Over from "./pages/Over";
import Record from "./pages/Record";
import music from "./assets/music.png";
import mp3 from "./assets/music/default.mp3";
import anime from "animejs";
const audio = new Audio(mp3);
audio.volume = 0.2;
audio.loop = true;

export default function App() {
  const [isHide, setIsHide] = useState(true);
  useEffect(() => {
    anime.remove(".music");
    anime({
      targets: ".music",
      rotate: 360,
      duration: 8000,
      loop: true,
      easing: "linear",
    });
  });
  return (
    <div className="app">
      <div
        className="music"
        style={{
          opacity: isHide ? 0 : 1,
        }}
        onClick={() => {
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }}
      >
        <img src={music} />
      </div>
      <Routes>
        <Route path="/" element={<Loading audio={audio} />} />
        <Route
          path="/index"
          element={<Index audio={audio} setIsHide={setIsHide} />}
        />
        <Route path="/record" element={<Record />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/over" element={<Over />} />
      </Routes>
    </div>
  );
}
