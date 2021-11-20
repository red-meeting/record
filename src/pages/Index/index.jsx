import "./index.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
export default function Index({ audio, setIsHide }) {
  const navigate = useNavigate();
  let timer;
  useEffect(() => {
    setIsHide(false);
    audio.play().catch((e) => {
      audio.currentTime = 0;
      audio.pause();
      timer = setInterval(() => {
        audio
          .play()
          .then((e) => {
            clearInterval(timer);
          })
          .catch((e) => {});
      });
    });
  }, []);
  return (
    <div className="index">
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
