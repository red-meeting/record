import React, { useState, createContext } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import Generate from "./pages/Generate";
import Index from "./pages/Index";
import Loading from "./pages/Loading";
import Over from "./pages/Over";
import Record from "./pages/Record";
import music from "./assets/images/record/music.png";
import mp3 from "./assets/music/default.mp3";
const audio = new Audio(mp3);
audio.volume = 0.2;
audio.loop = true;
const AudioContext = createContext(audio);
export default function App() {
  const [isHide, setIsHide] = useState(true);
  const [congratulations, setCongratulations] = useState("");
  const [year, setYears] = useState(0);
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
        <img src={music} alt="图片加载失败" />
      </div>
      <AudioContext.Provider value={audio}></AudioContext.Provider>
      <Routes>
        <Route path="/" element={<Loading setIsHide={setIsHide} />} />
        <Route
          path="/index"
          element={<Index audio={audio} setIsHide={setIsHide} />}
        />
        <Route path="/record" element={<Record />} />
        <Route
          path="/generate"
          element={
            <Generate
              setYears={setYears}
              setCongratulations={setCongratulations}
            />
          }
        />
        <Route
          path="/over"
          element={<Over congratulations={congratulations} year={year} />}
        />
      </Routes>
    </div>
  );
}
export { AudioContext };
