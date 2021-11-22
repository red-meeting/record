import "./index.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import record from "../../assets/images/record/index_recod_back.png";
import pen from "../../assets/images/record/pen.png";
import anime from "animejs";
import { nanoid } from "nanoid";
let p = 0,
  width = 0,
  rotate = 0;
export default function Loading() {
  const navigate = useNavigate();
  const [_, update] = useState(null);
  const processBox = useRef(null);
  useEffect(() => {
    width = processBox.current.clientWidth;
  }, []);
  useEffect(() => {
    anime({
      targets: ".pen",
      rotate: -30,
      duration: 1000,
      loop: true,
      easing: "linear",
    });
    setTimeout(() => {
      p++;
      if (p <= 100) {
        if (p === 100) {
          rotate = 30;
          setTimeout(() => {
            navigate("/index");
          }, 90);
        }
        update(nanoid());
      }
    }, 30);
  }, [_]); // eslint-disable-next-line
  return (
    <div className="loading">
      <div></div>
      <div className="box">
        <img
          src={record}
          alt="图片加载失败,请尝试刷新"
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        />
        <div className="process" ref={processBox}>
          <img
            src={pen}
            className="pen"
            style={{
              transform: `translate(${(width * p) / 100}px)`,
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "0",
              height: "100%",
              backgroundColor: "#f6682b",
              width: (width * p) / 100 + "px",
              transition: "all 0.1s",
            }}
          />
        </div>
        <div style={{ color: "#fff" }}>{p}%</div>
        <div className="load">正在加载时代唱片</div>
      </div>
    </div>
  );
}
