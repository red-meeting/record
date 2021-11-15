import "./index.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import record from "../../assets/record.png";
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
    setTimeout(() => {
      p++;
      if (p <= 100) {
        if (p == 100) {
          rotate = 30;
          setTimeout(() => {
            navigate("/index");
          }, 90);
        }
        update(nanoid());
      }
    }, 30);
  }, [_]);
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
          <span
            style={{
              position: "absolute",
              left: "0",
              height: "100%",
              backgroundColor: "#8400ff",
              width: (width * p) / 100 + "px",
              transition: "all 0.1s",
            }}
          ></span>
        </div>
        <div>{p}%</div>
        <div className="load">
          正在加载<span style={{ color: "#8400ff" }}>时代唱片机</span>
        </div>
      </div>
      <div>©红岩网校工作站</div>
    </div>
  );
}
