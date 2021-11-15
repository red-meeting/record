import "./index.scss";
import React, { useEffect, useRef } from "react";

const data = [
  { title: "开天辟地", year: "1921年", event: "中国共产党成立" },
  {
    title: "第一枪",
    year: "1927年",
    event: "南昌起义打响武装反抗国民党反动派的第一枪",
  },
  {
    title: "星星之火可以燎原",
    year: "1927年",
    event: "首个农村革命根据地在井冈山建立",
  },
  {
    title: "伟大远征",
    year: "1934年10月",
    event: "中央红军开始二万五千里长征",
  },
  { title: "浴血奋战", year: "1937年", event: "全民族抗战爆发" },
  {
    title: "将革命进行到底",
    year: "1949年4月",
    event: "人民解放军占领南京“总统府”",
  },
  {
    title: "没有共产党就没有新中国",
    year: "1949年10月",
    event: "中华人民共和国成立",
  },
  {
    title: "人民翻身做主人",
    year: "1950年",
    event: "新解放区土地改革开始，1954年 新中国第一部宪法颁布",
  },
  {
    title: "我们的身后是祖国",
    year: "1950年",
    event: "中国人民志愿军抗美援朝出国作战",
  },
  {
    title: "百废俱兴",
    year: "1955年",
    event: "第一个五年计划期间，发现克拉玛依油田",
  },
  {
    title: "艰苦奋斗",
    year: "1956年",
    event: "新中国第一辆汽车下线，第一架喷气式歼击机首飞成功",
  },
  {
    title: "红旗插上珠穆朗玛峰",
    year: "1960年5月",
    event: "中国登山队员成功登顶珠穆朗玛峰",
  },
  { title: "震惊世界", year: "1964年", event: "中国第一颗原子弹爆炸成功" },
  {
    title: "奋起直追",
    year: "1970年",
    event: "“东方红一号”升空；1974年 第一艘核潜艇入列",
  },
  {
    title: "改革开放",
    year: "1978年",
    event: "党的十一届三中全会召开，改革开放拉开大幕",
  },
  { title: "农村改革", year: "1982年", event: "家庭联产承包责任制确立" },
  {
    title: "奥运首金",
    year: "1984年7月29日",
    event: "中国射击运动员许海峰摘取了中国第一枚奥运金牌",
  },
  { title: "香港回家", year: "1997年", event: "中国对香港恢复行使主权" },
  { title: "澳门回家", year: "1999年", event: "中国对澳门恢复形式主权" },
  { title: "拥抱世界", year: "2001年", event: "中国正式加入世贸组织" },
  { title: "星辰大海", year: "2003年", event: "中国人首次进入太空" },
  { title: "打通“天路”", year: "2006年", event: "青藏铁路全线通车" },
  { title: "世界舞台", year: "2008年", event: "北京举办第29届奥运会" },
  { title: "文明盛宴", year: "2010年", event: "上海世博会开幕" },
  {
    title: "中国梦",
    year: "2012年",
    event:
      "习总书记首次提出中国梦——实现中华民族伟大复兴，是中华民族近代以来最伟大的梦想",
  },
  {
    title: "八项规定聚民心",
    year: "2012年",
    event: "中央政治局出台改进工作作风、密切联系群众八项规定",
  },
  { title: "一带一路", year: "2013年", event: "共建“一带一路”倡议提倡" },
  { title: "千年大计", year: "2017年", event: "中国设立雄安新区" },
  {
    title: "大国重器",
    year: "党的十八大以来",
    event: "港珠澳大桥、“中国天眼”等创新成就涌现",
  },
  { title: "服务全球", year: "2020年", event: "北斗系统完成组网，服务全球" },
  {
    title: "人民至上，生命至上",
    year: "·2020年",
    event: "抗击新冠肺炎疫情斗争取得重大战略成果",
  },
  { title: "全面小康", year: "2020年", event: "中国832个贫困县全部脱贫摘帽" },
  { title: "时代史诗", year: "2020年-2035年", event: "基本实现社会主义现代化" },
  {
    title: "伟大复兴",
    year: "从2035年到本世纪中",
    event: "建成富强民主文明和谐美丽的社会主义现代化强国",
  },
];

export default function Generate() {
  const line = useRef(null);
  const box = useRef(null);
  useEffect(() => {
    line.current.style.height = box.current.scrollHeight + "px";
  }, []);
  return (
    <div className="generate">
      <h1 className="title">
        <span style={{ color: "red" }}>1921-2021</span>
      </h1>
      <h1 className="title">建党百年,砥砺前行</h1>
      <div className="tip">时代唱片机的新故事等你来谱写</div>
      <div className="box">
        <div ref={box}>
          <div className="line" ref={line}></div>
          {data.map((item, index) => {
            return (
              <div className="article">
                <div
                  key={index}
                  style={{
                    display: "flex",
                    width: "38.888%",
                    justifyContent: "flex-end",
                    paddingRight: 3,
                  }}
                >
                  {item.title}
                </div>
                <span
                  style={{
                    backgroundColor: "red",
                    display: "inline-block",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    transform: "translate(1px,7px)",
                  }}
                ></span>
                <div
                  style={{
                    display: "flex",
                    width: "61.112%",
                    justifyContent: "flex-end",
                    paddingLeft: 3,
                  }}
                >
                  <div
                    style={{
                      marginRight: 3,
                      width: "32%",
                    }}
                  >
                    {item.year}
                  </div>
                  <div style={{ flex: 1 }}>{item.event}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
