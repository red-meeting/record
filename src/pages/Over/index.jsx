import "./index.scss";
import React, { useEffect, useRef, useState } from "react";
import back from "../../assets/images/record/over_recod_mask.png";
import code from "../../assets/images/record/code.png";

import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";

function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  var byteString = atob(dataURI.split(",")[1]);
  var arrayBuffer = new ArrayBuffer(byteString.length);
  var intArray = new Uint8Array(arrayBuffer);
  for (var i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  return new Blob([intArray], { type: mimeString });
}

export default function Over({ congratulations, year }) {
  const [isSave, setIsSave] = useState(false);
  let url = useRef(null),
    article;
  let screen = useRef(null);
  useEffect(() => {
    let timer;
    document.ontouchstart = () => {
      timer = setTimeout(() => {
        setIsSave(true);
        setTimeout(() => {
          domtoimage.toPng(screen.current).then(function (dataUrl) {
            if (dataUrl !== "error") {
              url.current = dataUrl;
              let file = dataURItoBlob(url.current);
              const blobUrl = window.URL.createObjectURL(file);
              let a = document.createElement("a");
              a.href = blobUrl;
              a.download = "time_record";
              a.click();
              window.URL.revokeObjectURL(blobUrl);
            } else {
              let b64;
              html2canvas(screen.current, {
                useCORS: true,
              })
                .then(function (canvas) {
                  try {
                    b64 = canvas.toDataURL("image/png");
                  } catch (err) {}
                  url.current = b64;
                  let file = dataURItoBlob(url.current);
                  const blobUrl = window.URL.createObjectURL(file);
                  let a = document.createElement("a");
                  a.href = blobUrl;
                  a.download = "time_record";
                  a.click();
                  window.URL.revokeObjectURL(blobUrl);
                })
                .catch(function onRejected(error) {});
            }
          });
        }, 100);
      }, 2000);
    };
    document.ontouchend = () => {
      clearTimeout(timer);
    };
  });
  if (year < 1921) {
    article = "????????????";
  } else if (year < 1948) {
    article = "????????????";
  } else if (year < 1977) {
    article = "????????????";
  } else if (year < 1999) {
    article = "????????????";
  } else if (year < 2010) {
    article = "????????????";
  } else if (year < 2020) {
    article = "????????????";
  } else {
    article = "????????????";
  }
  console.log(year, congratulations);
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="over"
        style={{
          transform: `translate(0,${isSave ? -5 : 0}vh)`,
        }}
        ref={screen}
      >
        <div className="title">??????????????????</div>
        <div className="title2">{article}</div>
        <div className="record">
          <img src={back} alt="" />
        </div>
        <div className="year">
          <div>
            ??????<span style={{ color: "red" }}>{year}</span>?????????
          </div>
          <div className="article">?????????????????????{year - 1921}????????????</div>
        </div>
        <div className="copy">
          <div>{congratulations}</div>
          <div>--????????????</div>
        </div>
        {isSave ? (
          <div className="code">
            <img src={code} alt="" />
            <div>???????????????????????????????????????</div>
          </div>
        ) : (
          <div className="save">????????????????????????</div>
        )}
      </div>
    </div>
  );
}
