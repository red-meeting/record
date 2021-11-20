import "./index.scss";
import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import {Navigation} from "swiper";
import 'swiper/modules/navigation/navigation.scss';
import RecordStoryPop from "../../components/RecordStoryPop";
const recordData=[
    {slogan:'开天辟地大事件', year:'1921',text:'1921年，中国共产党成立',song:"《百年红船》",singer:'盛世安/一衫衿',captions:['安徽合肥有一条路叫“延乔路”，而延乔路的尽头叫“繁华大道”','“愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话”','“我们课本上短短的考点，是他们拼尽全力只为了光明未来的一生”']},
    {slogan:'浴血奋战', year:'1937',text:'1937年，全民族抗战爆发',song:"《大刀进行曲》",singer:'群星',captions:['纪念逝去的二十九路军将士及后来保家卫国的亿万中国军民','大刀向鬼子们的头上砍去，二十九军的弟兄们，抗战的一天来到了！','中国刀厚重，刀刃宽。日本刀窄薄']},
    {slogan:'没有共产党，就没有新中国', year:'1949',text:'1949年10月1日，中华人民共和国成立',song:"《没有共产党 就没有新中国》",singer:'群星',captions:['你所站立的那个地方，正是你的中国','虽然党没让我们富有，但要知道，他也没让我们饿着','严正声明，这不是赞歌！这是客观事实和客观描述！']},
    {slogan:'社会主义革命和建设伟大成就', year:'1921',text:'探索中国自己的建设社会主义的道路',song:"《社会主义好》",singer:'中央乐团合唱队',captions:['你所站立的那个地方，正是你的中国','虽然党没让我们富有，但要知道，他也没让我们饿着','严正声明，这不是赞歌！这是客观事实和客观描述！']},
    {slogan:'改革开放和社会主义现代化建设新时期', year:'1978',text:'1978年12月18日，党的十一届三中全会在北京召开',song:"《春天的故事》",singer:'董文华',captions:['不必时时怀念我，也不要指望我回来，我离开以后，你们就是我，人民万岁','什么样的胸怀才能说出，我将无我，不负人民','有些人就是不知道，要是没有改革开放哪来的你现在的生活']},
    {slogan:'“一国两制” 港澳回归“', year:'1997',text:'开创全面改革开放新局面，推进党的建设新的伟大工程',song:"《东方之珠》",singer:'董文华',captions:['一代人有一代人的宿命','刚上初中的第一节音乐课唱了这首歌','小时候一直东方之珠和东方明珠傻傻分不清...']},
    {slogan:'新形势下中国特色社会主义', year:'2008',text:'2008年8月8日，北京举办第29届夏季奥林匹克运动会',song:"《北京欢迎你》",singer:'群星',captions:['北京欢迎你，冬季奥运会加油，致敬所有的奥运健儿们！','两个月后，北京见！我们一起向未来！','这首歌带给00后太多感动']},
    {slogan:'开创中国特色社会主义新时代', year:'2012',text:'2012年11月29日，习总书记正式提出“中国梦”',song:"《不忘初心》",singer:'韩磊 / 谭维维',captions:['中国共产党人的初心和使命，就是为中国人民谋幸福，为中华民族谋复兴','高一元旦文艺汇演班级合唱曲目。不忘初心，继续前行，为中华之富强而读书','“我好像与他有过一面之缘，在课本中，在饭桌上，在人间里”']},
    {slogan:'人民至上，生命至上', year:'2020',text:'2020年，取得抗击新冠肺炎疫情斗争重大战略成果',song:"《坚信爱会赢》",singer:'群星',captions:['这次疫情更能体现出我们中华民族的凝聚力','中国加油！ 相信自己！相信祖国！相信未来！','消灭疫情为前线战士们带上皇冠 那一天将是十四亿中国人的狂欢']},
    {slogan:'实现第一个百年奋斗目标', year:'2021',text:'2021年7月1日，习总书记宣布我国全面建成了小康社会',song:"《我爱你中国》",singer:'汪峰',captions:['我是十四亿护旗手','达则兼济天下，穷则独善其身','“当年飞机不够，您说飞两遍，如今山河无恙 国富兵强。”']},
]
export default function Record() {
    const [storyState,setStoryState]=useState(false);
    const [showCover,setShowCover]=useState(true);
    const [showPop,setShowPop]=useState(true);
    const [first,setFirst]=useState(true);
    const [recordIndex,setRecordIndex]= useState(0);
    const [playerState,setPlayerState]= useState(true);
    const [timer,setTimer]=useState();
    const title = useRef();
    const textNode = useRef();
    const yearNode = useRef();
    const captionNode1 = useRef();
    const captionNode2 = useRef();
    const captionNode3 = useRef();
    const recordPicNode = useRef();
    const handleStartPop=(state)=>{
        setShowCover(state);
        setShowPop(state);
        captionsMoveList().catch((err)=>{
            console.log(err)
        });
        const startSlogan= fontOut(slogan,title.current);
        startSlogan.then(()=>{
            fontOut(text,textNode.current).catch((err)=>{
                throw (err);
            })
        })
    }
    const captionsMove =(node)=>{
        node.style.left='-500px';
        return new Promise((resolve)=>{
             setTimeout(()=>{ resolve()},18000)
        })
    }
    const initCaptionsList=()=>{
        console.log(123)
        captionNode1.current.style.left='200px';
    }
    const captionsMoveList = async ()=>{
        await captionsMove(captionNode1.current);
        await captionsMove(captionNode2.current);
        await captionsMove(captionNode3.current);
    }
    const handleStoryPop=(state)=>{
        setShowCover(state);
        setStoryState(state)
    }
    const fontOut=(arr,node)=>{
        let iter = arr[Symbol.iterator]();
        return new Promise((resolve)=>{
            (function go(){
                let timer =  setTimeout(() => {
                    let value = iter.next().value;
                    if (value) {
                        node.innerText += value;
                        go();
                    } else {
                        clearTimeout(timer);
                        resolve('success')
                    }
                }, 200);
                setTimer(timer);
            })();
        })
    }
    const nextRecord=()=>{
        if(recordIndex<9){
            initCaptionsList();
            setRecordIndex(i=>i+1)
        }
    }
    const stopRecord=()=>{
        if(playerState){
            recordPicNode.current.style.animationPlayState='paused'
            setPlayerState(false);
        }else {
            recordPicNode.current.style.animationPlayState='running'
            setPlayerState(true);
        }
    }
    const lastRecord=()=>{
        if(recordIndex>0) {
            initCaptionsList();
            setRecordIndex(i=>i-1);
        }
    }
    const {captions,slogan,text,song,singer,year}=recordData[recordIndex]
    useEffect(()=>{
        clearTimeout(timer);
        if(!first){
            captionsMoveList().catch((err)=>{
                console.log(err)
            });
            title.current.innerText='';
            textNode.current.innerText='';
            const startSlogan= fontOut(slogan,title.current);
            startSlogan.then(()=>{
                fontOut(text,textNode.current).catch((err)=>{
                    throw (err);
                })
            })
        }else setFirst(false);
    },[recordIndex])
  return <div className='recordPage'>
      <div className={'light'}>
          {showCover?<div className={'cover'}/>:''}
          {showPop?<div className={'onPop'}>
              <div className={'startBtn'} onClick={()=>{handleStartPop(false)}}/>
          </div>:''}
          {storyState?<RecordStoryPop handleStoryPop={handleStoryPop} activeIndex={recordIndex}/>:''}
          {recordData[recordIndex]?<div>
              <div className={'captions'} >
                 <div ref={captionNode1} >{captions[0]}</div>
                  <div ref={captionNode2} >{captions[1]}</div>
                  <div ref={captionNode3} >{captions[2]}</div>
                  </div>
              <div className={'slogan'} ref={title}/>
              <div className={'text'} ref={textNode}/>
              <div className={'sin'}>
                  <div className={'song'}>{song}</div>
                  <div className={'singer'}>{singer}</div>
              </div>
              <div className={'year'} ref={yearNode}>{`${year}年`}</div>
          </div>:''}
          <div className={'recordPic'} ref={recordPicNode}/>
          <div className={'recordStoryBtn'} onClick={()=>{handleStoryPop(true)}}/>
          <div className={'player'}>
              {recordIndex===0?<div onClick={lastRecord} className={'backBanned'}/>:<div onClick={lastRecord}/>}
              <div onClick={stopRecord}/>
              {recordIndex===9?<div onClick={nextRecord} className={'forwardBanned'}/>:<div onClick={nextRecord}/>}
          </div>
      </div>
  </div>;
}
