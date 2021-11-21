import "./index.scss"
const recordStory=[
    '1921年7月23日，中国共产党第一次全国代表大会在上海召开。中国共产党的成立，适应了近代以来社会进步和革命发展的客观要求，是开天辟地的大事变。中国共产党作为中国最先进的阶级工人阶级的政党，不仅代表着工人阶级的利益，而且代表着整个中华民族的利益。中国共产党从一开始就拥有马克思主义这个最先进的思想武器，因而能够为中国革命指明前进的方向。正是这个党，给灾难深重的中国人民带来光明和希望。自从有了中国共产党，中国革命的面目就焕然一新。',
    '中国抗战的历程表明，中国共产党及其领导的人民抗日力量，是全民族利益最坚定的维护者，是团结抗战的中流砥柱，是取得抗战胜利的决定性力量。党在敌后的艰苦条件下，广泛发动、组织和武装以农民为主力的各阶层群众，开展游击战，使日本侵略者陷于人民战争的汪洋大海之中。党领导的人民抗日力量对敌作战12.5万次，消灭日、伪军171.4万人。党在抗战中发展为有120多万党员的大党，人民军队发展到120余万人，民兵260多万人，抗日民主根据地面积达到近100万平方公里，人口近1亿。所有这些，为夺取整个新民主主义革命的胜利，奠定了坚实的基础。',
    '新民主主义革命时期，创立了毛泽东思想，为夺取新民主主义革命胜利指明了正确方向。党领导人民浴血奋战、百折不挠，创造了新民主主义革命的伟大成就。1949年10月1日中华人民共和国成立，彻底结束了旧中国半殖民地半封建社会的历史，彻底结束了极少数剥削者统治广大劳动人民的历史，彻底结束了旧中国一盘散沙的局面，彻底废除了列强强加给中国的不平等条约和帝国主义在中国的一切特权。实中国人民从此站起来了，中华民族任人宰割、饱受欺凌的时代一去不复返了，中国发展从此开启了新纪元。',
    '社会主义革命和建设时期，以毛泽东同志为主要代表的中国共产党人提出关于社会主义建设的一系列重要思想。党领导人民自力更生、发愤图强，创造了社会主义革命和建设的伟大成就，实现了中华民族有史以来最为广泛而深刻的社会变革，实现了一穷二白、人口众多的东方大国大步迈进社会主义社会的伟大飞跃。我国建立起独立的比较完整的工业体系和国民经济体系，农业生产条件显著改变，教育、科学、文化、卫生、体育事业有很大发展，人民解放军得到壮大和提高，彻底结束了旧中国的屈辱外交。中国共产党和中国人民以英勇顽强的奋斗向世界庄严宣告，中国人民不但善于破坏一个旧世界、也善于建设一个新世界，只有社会主义才能救中国，只有社会主义才能发展中国。',
    '党的十一届三中全会以后，以邓小平同志为主要代表的中国共产党人，团结带领全党全国各族人民，深刻总结新中国成立以来正反两方面经验，围绕什么是社会主义、怎样建设社会主义这一根本问题，借鉴世界社会主义历史经验，创立了邓小平理论，解放思想，实事求是，作出把党和国家工作中心转移到经济建设上来、实行改革开放的历史性决策，深刻揭示社会主义本质，确立社会主义初级阶段基本路线，明确提出走自己的路、建设中国特色社会主义，科学回答了建设中国特色社会主义的一系列基本问题，制定了到二十一世纪中叶分三步走、基本实现社会主义现代化的发展战略，成功开创了中国特色社会主义。',
    '党的十三届四中全会以后，以江泽民同志为主要代表的中国共产党人，团结带领全党全国各族人民，坚持党的基本理论、基本路线，加深了对什么是社会主义、怎样建设社会主义和建设什么样的党、怎样建设党的认识，形成了“三个代表”重要思想，在国内外形势十分复杂、世界社会主义出现严重曲折的严峻考验面前捍卫了中国特色社会主义，确立了社会主义市场经济体制的改革目标和基本框架，确立了社会主义初级阶段公有制为主体、多种所有制经济共同发展的基本经济制度和按劳分配为主体、多种分配方式并存的分配制度，开创全面改革开放新局面，推进党的建设新的伟大工程，成功把中国特色社会主义推向二十一世纪。',
    '党的十六大以后，以胡锦涛同志为主要代表的中国共产党人，团结带领全党全国各族人民，在全面建设小康社会进程中推进实践创新、理论创新、制度创新，深刻认识和回答了新形势下实现什么样的发展、怎样发展等重大问题，形成了科学发展观，抓住重要战略机遇期，聚精会神搞建设，一心一意谋发展，强调坚持以人为本、全面协调可持续发展，着力保障和改善民生，促进社会公平正义，推进党的执政能力建设和先进性建设，成功在新形势下坚持和发展了中国特色社会主义。在这个时期，党领导人民解放思想、锐意进取，创造了改革开放和社会主义现代化建设的伟大成就。',
    '党的十八大以来，中国特色社会主义进入新时代。以习近平同志为主要代表的中国共产党人，深刻总结并充分运用党成立以来的历史经验，从新的实际出发，创立了习近平新时代中国特色社会主义思想。中国共产党和中国人民以英勇顽强的奋斗向世界庄严宣告，中华民族迎来了从站起来、富起来到强起来的伟大飞跃。实现了第一个百年奋斗目标，开启实现第二个百年奋斗目标新征程，朝着实现中华民族伟大复兴的宏伟目标继续前进。党领导人民自信自强、守正创新，创造了新时代中国特色社会主义的伟大成就。',
    '一百年来，党领导人民进行伟大奋斗，积累了宝贵的历史经验，这就是：坚持党的领导，坚持人民至上，坚持理论创新，坚持独立自主，坚持中国道路，坚持胸怀天下，坚持开拓创新，坚持敢于斗争，坚持统一战线，坚持自我革命。尤其是面对突如其来的严重疫情，党中央坚持把人民生命安全和身体健康放在第一位。“爱人利物之谓仁。”疫情无情人有情。保护人民生命安全不惜一切代价，因为中国共产党的根本宗旨是全心全意为人民服务。人的生命、人的价值、人的尊严得到悉心呵护，这是中国共产党执政为民理念的最好诠释！',
    '中国共产党第二十次全国代表大会于2022年下半年在北京召开。党中央号召，全党全军全国各族人民要更加紧密地团结在以习近平同志为核心的党中央周围，全面贯彻习近平新时代中国特色社会主义思想，大力弘扬伟大建党精神，勿忘昨天的苦难辉煌，无愧今天的使命担当，不负明天的伟大梦想，以史为鉴、开创未来，埋头苦干、勇毅前行，为实现第二个百年奋斗目标、实现中华民族伟大复兴的中国梦而不懈奋斗。我们坚信，在过去一百年赢得了伟大胜利和荣光的中国共产党和中国人民，必将在新时代新征程上赢得更加伟大的胜利和荣光！',

]

export default function RecordStoryPop(props) {
    const {handleStoryPop,activeIndex}=props;
    console.log(456)
    return <div className='StoryPop'>
        <div className={'body'}>
            <div className={'shut'} onClick={()=>{handleStoryPop(false)}}/>
            <div className={'content'}>{recordStory[activeIndex]}</div>
            </div>
    </div>
}