import "./index.scss";
import React from "react";
import { useNavigate } from "react-router";
export default function Index({ audio, setIsHide }) {
  const navigate = useNavigate();
  const play = () => {
    audio.play().catch((e) => {});
  };

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
