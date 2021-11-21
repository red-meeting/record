import "./index.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
export default function Index({ audio, setIsHide }) {
  const navigate = useNavigate();
  const play =()=>{
      audio.play().catch((e) => {
          console.log(e)})
  }
  useEffect(() => {
    setIsHide(false);
      // console.log(audio)
    // audio.play().catch((e) => {
    //     console.log(e)
      // audio.currentTime = 0;
      // audio.pause();
      // timer = setInterval(() => {
      //   audio
      //     .play()
      //     .then((e) => {
      //       clearInterval(timer);
      //     })
      //     .catch((e) => {});
      // });

  }, []);
  return (
    <div className="index" onClick={play}>
      <button
        className="btn"
        onClick={() => {
          navigate("/record", { replace: true });
          setIsHide(true);
        }}
      />
    </div>
  );
}
