import "./index.scss";
import React, { useEffect } from "react";
import chanpian from "../../assets/changpian.png";
import { useNavigate } from "react-router";
export default function Index({ audio, setIsHide }) {
  const navigate = useNavigate();
  useEffect(() => {
    setIsHide(false);
    audio.play();
  }, []);
  return (
    <div className="index">
      <h1>时代唱片机</h1>
      <div className="title">带你聆听建党百年的歌声嘹亮</div>
      <div className="tip">-十九届六中全会专题-</div>
      <img
        src={chanpian}
        alt="图片加载失败,请尝试刷新"
        style={{
          width: "100%",
          height: "36vh",
          marginTop: "3vh",
          marginBottom: "6vh",
        }}
      />
      <div className="title">建议配搭耳机体验，效果更佳哟~</div>
      <button
        className="btn"
        onClick={() => {
          navigate("/record");
          setIsHide(true);
        }}
      >
        一起聆听百年歌声
      </button>
      <div className="tag">©红岩网校工作站</div>
    </div>
  );
}
