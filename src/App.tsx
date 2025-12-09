import { useEffect, useRef, useState, type JSX } from "react";
import "./app.css";


const FORTUNES = [
  "오늘 작은 친절이 큰 인연으로 돌아옵니다.",
  "계획보다 실행이 더 큰 가치를 만듭니다.",
  "새로운 아이디어가 뜻밖의 기회를 불러옵니다.",
  "한 걸음 뒤에서 상황을 보면 해답이 보입니다.",
  "웃음이 긴장을 풀어줄 것입니다.",
  "작은 변화가 하루를 특별하게 만듭니다.",
  "오래된 연락이 반가운 소식을 가져옵니다.",
  "늘 해오던 일을 조금 다르게 해보세요.",
  "기대하지 않던 선물이 찾아올 수 있습니다.",
  "오늘은 관대함이 나를 더 빛나게 합니다.",
  "차분히 기다리면 좋은 기회가 옵니다.",
  "용기가 필요한 순간이 곧 찾아옵니다.",
  "익숙한 길에서 새로운 발견을 하게 됩니다.",
  "작은 습관이 큰 변화를 만듭니다.",
  "타인의 칭찬이 뜻밖의 자신감을 줍니다.",
  "마음의 여유가 좋은 결정을 돕습니다.",
  "한 가지 일에 집중하면 성과가 보입니다.",
  "생각보다 일이 빨리 풀릴 것입니다.",
  "사소한 실수가 오히려 도움이 됩니다.",
  "무엇인가 배우면 곧 활용할 기회가 옵니다.",
  "오늘은 감정보다 이성이 빛나는 날입니다.",
  "과거의 경험이 지금의 선택을 도와줍니다.",
  "낯선 제안에 호기심을 가져보세요.",
  "작은 노력으로 큰 신뢰를 얻습니다.",
  "지금의 선택이 내일의 기쁨이 됩니다.",
  "한 발자국 더 나아가면 길이 열립니다.",
  "너그러움이 문제를 쉽게 풀어줍니다.",
  "상대의 입장을 이해하면 갈등이 줄어듭니다.",
  "오늘의 실패는 내일의 자산이 됩니다.",
  "새로운 만남이 오래갈 인연이 될 수 있습니다.",
  "간단한 정리가 마음을 가볍게 합니다.",
  "어떤 결정이든 신중함을 유지하세요.",
  "지금 시도하면 뜻밖의 성과를 얻습니다.",
  "계획을 나눠 작은 목표부터 달성하세요.",
  "당신의 재능이 누군가에게 도움됩니다.",
  "소소한 성취가 큰 자신감을 만듭니다.",
  "좋은 습관이 좋은 하루를 만듭니다.",
  "오늘의 한마디가 관계를 바꿀 수 있습니다.",
  "낮은 기대가 더 큰 즐거움을 줍니다.",
  "지금은 배우는 시간으로 생각하세요.",
  "마음이 편안해지면 선택이 쉬워집니다.",
  "작은 기쁨을 기록해두세요.",
  "도움을 청하면 생각보다 많은 손길이 옵니다.",
  "하루의 루틴을 조금 바꿔보세요.",
  "오늘의 경험이 내일의 경쟁력이 됩니다.",
  "관찰력이 기회를 낚아챕니다.",
  "긍정적인 말이 분위기를 바꿉니다.",
  "어제의 피곤함이 오늘의 성숙을 만듭니다.",
  "한 가지 일에 꾸준히 해보세요.",
  "시간을 투자한 만큼 결과가 돌아옵니다.",
  "작은 친절은 큰 신뢰로 이어집니다.",
  "지금 필요한 건 잠깐의 휴식입니다.",
  "당신의 의견이 주변에 영향을 줍니다.",
  "오늘은 약속을 지키는 날로 삼으세요.",
  "쉬운 일이 아니라도 도전해볼 가치가 있습니다.",
  "변화를 두려워하지 마세요.",
  "친구의 조언이 큰 도움이 됩니다.",
  "새로운 계획은 천천히 다듬으세요.",
  "오늘은 집중력이 좋은 날입니다.",
  "작은 성과를 축하하세요.",
  "당신의 진심이 누군가에게 닿습니다.",
  "상대의 입장에서 먼저 생각해보세요.",
  "계획을 수정하면 더 좋은 결과가 옵니다.",
  "한 번의 시도가 큰 변화를 만듭니다.",
  "감사하는 마음이 더 많은 것을 불러옵니다.",
  "자신에게 작은 보상을 주세요.",
  "오늘 배운 것이 곧 도움이 됩니다.",
  "작은 습관이 삶을 바꿉니다.",
  "도전은 성장의 시작입니다.",
  "무리하지 말고 차근차근 하세요.",
  "오늘은 용서를 선택해보세요.",
  "감정보다 사실을 우선하세요.",
  "친절한 말 한마디가 상황을 바꿉니다.",
  "타이밍이 당신 편입니다.",
  "불필요한 걱정은 놓아주세요.",
  "새로운 관심사가 삶을 풍요롭게 합니다.",
  "오늘의 선택이 내일의 기쁨을 만듭니다.",
  "지금의 고민이 금세 해결될 것입니다.",
  "당신의 강점이 기회를 만듭니다.",
  "사소한 준비가 큰 차이를 만듭니다.",
  "잠깐의 용기가 큰 성과를 부릅니다.",
  "정직함이 결국 길을 만듭니다.",
  "오늘은 배우는 태도가 빛납니다.",
  "작은 습관이 큰 변화를 만듭니다.",
  "계획을 공유하면 의지가 생깁니다.",
  "당신의 아이디어가 빛을 발할 겁니다.",
  "새로운 시도는 새로운 시야를 줍니다.",
  "스트레칭 한 번이 집중을 돕습니다.",
  "누군가의 응원이 큰 힘이 됩니다.",
  "질문을 두려워하지 마세요.",
  "오늘의 만남이 다음 기회를 만듭니다.",
  "지금은 준비의 시간입니다.",
  "작은 정리가 큰 안정을 줍니다.",
  "가벼운 대화가 관계를 다집니다.",
  "소소한 일에서 기쁨을 찾으세요.",
  "오늘은 호기심을 따르세요.",
  "지금의 결정이 성장의 기반이 됩니다.",
  "오늘의 실패는 내일의 수업입니다.",
  "한 번 더 시도하면 다른 결과가 옵니다.",
  "당신의 관심이 변화를 만듭니다.",
  "작은 실천이 큰 성취를 만듭니다.",
  "오늘의 친절을 기억하세요.",
  "한 걸음 물러서는 것도 전략입니다.",
  "적절한 휴식이 더 큰 성과를 돕습니다.",
  "새로운 기술 하나를 배워보세요.",
  "의외의 곳에서 기회가 찾아옵니다.",
  "작은 약속을 지키는 사람이 됩니다.",
  "배우려는 마음이 운을 불러옵니다.",
  "당신의 꾸준함이 결실을 맺습니다.",
  "우연한 대화가 아이디어를 만듭니다.",
  "가벼운 운동이 생각을 맑게 합니다.",
  "자신을 믿는 것이 첫걸음입니다.",
  "오늘은 정리를 시작해보세요.",
  "작은 성공을 기록해두세요.",
  "관심을 두면 기회가 보입니다.",
  "도움이 필요하면 손을 내미세요.",
  "새로운 루틴이 삶에 변화를 줍니다.",
  "당신의 진심은 씨앗이 됩니다.",
  "오늘의 선택이 좋은 흐름을 만듭니다.",
  "조금의 친절이 큰 인연으로 이어집니다.",
  "지금 투자한 시간은 돌아옵니다.",
  "어제보다 한 단계 나아가세요.",
  "혼자 하지 말고 함께하세요.",
  "작은 실천이 큰 영향력을 만듭니다.",
  "오늘은 감사의 마음을 전해보세요.",
  "당신의 호기심이 길을 열어줍니다.",
  "서두르지 않으면 더 오래 갑니다.",
  "사소한 변화가 큰 발견을 불러옵니다.",
  "오늘은 새로운 것을 기록해두세요.",
  "끈기가 결국 문을 열어줍니다.",
  "작은 친절이 큰 신뢰가 됩니다.",
  "자기돌봄이 최고의 투자입니다.",
  "오늘의 행동이 오래도록 기억됩니다.",
  "성공은 작은 습관의 합입니다.",
  "누군가의 이야기를 들어보세요.",
  "지금의 선택이 미래의 자산이 됩니다.",
  "오늘은 작은 용기가 큰 기회를 만듭니다.",
  "뜻밖의 만남이 행운을 가져옵니다.",
  "한 걸음 천천히 — 결과는 더 달게 옵니다.",
  "새로운 취미가 삶에 활기를 줍니다.",
  "계획보다 실행이 중요합니다. 지금 시작하세요.",
  "작은 절약이 큰 보탬이 됩니다.",
  "사소한 친절이 큰 인연으로 이어집니다.",
  "창의력이 빛나는 날, 아이디어를 기록하세요.",
  "건강에 신경쓰면 내일이 지금보다 좋아집니다.",
  "지금의 선택이 내일의 즐거움을 만듭니다.",
  "서두르면 작은 실수를 크게 만들 수 있으니 오늘은 한 번 더 점검하세요.",
  "감정적으로 행동하면 후회가 남을 수 있습니다. 잠시 숨을 고르세요.",
  "지나친 확신이 오히려 발목을 잡을 수 있는 날입니다.",
  "당장은 불리해 보이지만 시간을 두면 상황이 나아집니다.",
  "오늘은 약속이나 계획이 예상과 다르게 흘러갈 수 있습니다.",
  "말 한마디에 신중하세요. 작은 오해가 생길 수도 있습니다.",
  "새로운 일보다는 기존 일을 다듬는 것이 더 유리한 날입니다.",
  "남을 도우려다가 본인이 더 지칠 수 있습니다. 자신부터 챙기세요.",
  "큰 결정을 내려야 한다면 내일로 미루는 것이 더 좋습니다.",
  "지나친 기대는 실망으로 이어질 수 있습니다. 마음의 여유를 가지세요.",
  "지출을 조심하세요. 예상보다 더 써야 할 일이 생길 수 있습니다.",
  "피곤함을 무시하면 컨디션이 크게 떨어질 수 있습니다.",
  "오늘은 충동적인 선택을 피하는 것이 좋습니다.",
  "겉보기에 좋아 보여도 속사정을 한 번 더 확인하세요.",
  "타인의 말에 쉽게 휘둘리면 곤란해질 수 있습니다.",
  "작은 갈등이 커질 수 있으니 대화를 부드럽게 이어가세요.",
  "무리해서 일을 추진하면 오히려 뒤처질 수 있습니다.",
  "오늘은 중요한 물건을 잃어버리기 쉬운 날입니다.",
  "잘못된 선택으로 이어지기 쉬우니 숫자나 수치를 꼼꼼히 확인하세요.",
  "기대했던 만큼 결과가 나오지 않을 수 있습니다.",
  "감정 기복이 커질 수 있으니 휴식과 안정이 필요합니다.",
  "오늘은 생각보다 체력이 빨리 떨어집니다. 휴식을 계획하세요.",
  "믿었던 사람이 실수를 할 수 있으니 의존하지 마세요.",
  "작은 일에 지나치게 신경 쓰면 큰 기회를 놓칠 수 있습니다.",
  "늦은 밤 이동이나 활동은 피하는 것이 안전합니다.",
  "겉모습에 속지 말고 본질을 보세요.",
  "확실해 보이던 일이 막판에 변동될 수 있습니다.",
  "말보다 행동이 더 중요해지는 날입니다. 과장된 표현은 오해를 부릅니다.",
  "자존심을 굽히지 않으면 소중한 것을 잃을 수 있습니다.",
  "과한 스트레스를 받기 쉬우니 일정 조절이 필요합니다.",
  "계획을 너무 크게 잡으면 부담만 커질 수 있습니다.",
  "오늘은 기계나 전자 기기가 잘 고장 납니다. 조심하세요.",
  "오래된 문제를 억지로 해결하려 하면 더 어지러워질 수 있습니다.",
  "작은 충돌이나 말다툼이 생기기 쉬우니 먼저 양보하세요.",
  "사소한 부주의가 큰 손해로 이어질 수 있습니다.",
  "오늘은 새로운 사람을 쉽게 신뢰하지 않는 것이 좋습니다.",
  "몸이 보내는 신호를 무시하지 마세요.",
  "거절해야 할 순간엔 미루지 말고 확실히 표현하세요.",
  "불필요한 비교는 마음을 무겁게 만듭니다.",
  "오늘은 지나친 욕심이 오히려 손해를 부를 수 있습니다.",
  "누군가의 부탁을 쉽게 들어주면 곤란해질 수 있습니다.",
  "바쁜 와중에도 실수 검토가 꼭 필요한 날입니다.",
  "당신의 장점이 잘 드러나지 않는 날입니다. 너무 걱정하지 마세요.",
  "타인의 기대를 지나치게 의식하면 실수를 하게 됩니다.",
  "조심스럽게 행동하면 불필요한 문제를 피할 수 있습니다.",
  "사소한 지적이 유난히 기분을 상하게 할 수 있습니다.",
  "오늘은 무언가를 잃고 다른 것을 얻는 날이 될 수 있습니다.",
  "감정 소비가 크니 갈등 상황을 피하는 것이 좋습니다.",
  "작은 지연이나 방해가 생길 수 있지만 결국 해결됩니다.",
  "오늘은 나서기보다 지켜보는 자세가 더 도움이 됩니다."
];

const GOLDEN_FORTUNES = [
  "당신이 염원하던 소원이 이루어질 거예요!",
  "예상치 못한 금전적 기회가 찾아옵니다 — 보너스 또는 경품 중 하나가 당신의 수중에 들어올 가능성이 큽니다.",
  "가까운 시일 내에 중요한 인연이 등장합니다 — 사업·취업·연애 등 인생의 방향을 바꿀 정도로 영향력이 있습니다.",
  "당신의 능력을 알아봐 줄 사람이 나타납니다.",
  "투자나 창업 아이디어가 뜻밖의 수익으로 연결될 징조입니다 — 신중히 준비하면 큰 결실을 얻습니다.",
  "이번 주 내로 오래 기다리던 일이 급물살을 탈 가능성이 있습니다 — 마지막 한 발을 내딛어 보세요.",
  "가까운 시일 내에 해외 혹은 원거리의 기회가 찾아옵니다 — 여행·유학·해외업무에 운이 따릅니다.",
  "금전운 상승기 진입 — 예상 외의 수입(상금, 환급, 보너스 등)이 발생할 가능성이 높습니다.",
  "인간관계에서 뜻밖의 도움을 받게 됩니다 — 그 인물은 장기적 파트너가 될 수 있습니다.",
  "창의적 아이디어로 주목받을 기회가 생깁니다 — 작품, 제안서, 발표 등이 호평받을 것입니다.",
  "이번 달 특정 날, 예상치 못한 행운(대박성 거래·선택)이 찾아올 수 있으니 중요한 결정은 그 기운을 활용하세요.",
  "오래된 인맥이 핵심 기회를 가져옵니다 — 연락 한번이 중요한 전환점이 됩니다.",
  "큰 계약 또는 중요한 제안이 성사될 가능성이 높습니다 — 서류를 정리하고 준비하세요.",
  "단기간 내에 기술이나 능력이 크게 성장해 경쟁력이 생깁니다 — 학습 투자 추천.",
  "특별한 프로젝트에서 주도권을 잡아 빠른 성과를 거둘 가능성이 큽니다.",
  "당신의 통찰력으로 큰 문제를 해결하게 되고 그 결과로 신뢰와 보상을 얻습니다.",
  "가까운 미래에 뜻밖의 경품·보상·혜택이 당신의 손에 들어올 것입니다.",
  "중요한 미팅이나 발표에서 예상보다 큰 호응을 얻어 기회가 확대됩니다.",
  "재정적 불확실성이 해소되고 안정화의 길로 접어듭니다.",
  "당신의 작품이나 아이디어가 알려져서 상업적 가능성이 생깁니다.",
  "단기간 내에 건강·에너지 레벨이 회복되어 중요한 시기를 잘 넘기게 됩니다.",
  "가족이나 가까운 사람의 도움으로 금전·시간적 여유가 생깁니다.",
  "특별한 날에 행운의 숫자나 기회가 찾아오니 중요한 선택은 신중히 하되 기회를 포착하세요.",
  "여행·출장 중 뜻밖의 만남이 큰 기회를 만들 수 있으니 열린 마음으로 임하세요.",
  "진심 어린 제안이나 요청이 예상치 못한 열매를 맺습니다 — 표현을 주저하지 마세요.",
  "당신의 전문성이 인정되어 특별 보상이나 공개적 인정을 받게 될 조짐입니다.",
  "장기적으로 가치가 오르는 자산을 발견할 가능성이 높습니다 — 타이밍을 잘 맞춰보세요.",
  "특별한 프로젝트에서 당신의 이름이 알려져 장기적 기회로 연결됩니다.",
  "중요한 날에 직감이 정확히 맞아 큰 선택에서 이득을 얻을 수 있습니다.",
  "오랜 노력 끝에 성과가 현실로 드러나 주변의 칭찬과 보상이 뒤따릅니다.",
  "곧 만나게 될 사람 중 한 명이 당신의 커리어를 크게 도와줄 핵심 인물입니다.",
  "당신의 결단이 가족·비즈니스 양쪽에 유리하게 작용할 것입니다.",
  "특별한 기술 습득이 단기간 내 가치를 증대시키니 배우는 것을 추천합니다.",
  "오늘 접하는 정보 중 하나가 당신의 운명을 긍정적으로 바꿀 가능성이 큽니다.",
  "강력한 파트너십 형성이 예상되니 제안이 오면 심사숙고 후 수락하세요.",
  "오늘의 선택이 6개월 후 큰 결실로 돌아올 가능성이 큽니다.",
  "과거의 노력이 드디어 성과로 귀결되어 보상이 돌아옵니다.",
  "장기적인 관점에서 보면 현재의 결단이 최고의 선택이 될 것입니다."
];

const LOVE_FORTUNES = [
    "운명적인 만남이 기다리고 있어요!",
    "오래된 관계가 더욱 깊어질 거예요.",
    "사랑이 당신의 문을 두드립니다.",
];

const GOLDEN_LOVE_FORTUNES = [
    "당신이 꿈꾸던 이상형과의 만남이 성사됩니다!",
];

const MONEY_FORTUNES = [
    "뜻밖의 수입이 생길 수 있어요.",
    "재물운이 상승 곡선을 그리고 있습니다.",
    "현명한 투자가 이익을 가져올 거예요.",
];

const GOLDEN_MONEY_FORTUNES = [
    "일확천금의 기회가 당신에게 찾아옵니다!",
];


import cookieStage0 from "./assets/cookie-stage-0.png";
import cookieStage1 from "./assets/cookie-stage-1.png";
import cookieStage2 from "./assets/cookie-stage-2.png";
import cookieStage3 from "./assets/cookie-stage-3.png";
// import effect0 from "./assets/effect-0.png";
// import effect1 from "./assets/effect-1.png";
// import effect2 from "./assets/effect-2.png";
// import effect3 from "./assets/effect-3.png";
// import effect4 from "./assets/effect-4.png";
// import effect5 from "./assets/effect-5.png";
// import effect6 from "./assets/effect-6.png";
// import effect7 from "./assets/effect-7.png";

// const EFFECT_SRC: string[] = [
//   effect0,
//   effect1,
//   effect2,
//   effect3,
//   effect4,
//   effect5,
//   effect6,
//   effect7,
// ];

// 임포트된 이미지 URL을 배열에 저장합니다.
const COOKIE_STAGE_SRC: string[] = [
  cookieStage0,
  cookieStage1,
  cookieStage2,
  cookieStage3,
];


export default function App(): JSX.Element {
  const [stage, setStage] = useState<number>(0); // 0..3
  const [isClickLocked, setIsClickLocked] = useState(false); // 연타 제한
  const [shakeKey, setShakeKey] = useState(0); // 클릭마다 재트리거용
  const [selectedFortune, setSelectedFortune] = useState<string | null>('운세뽑기');
  const [isGolden, setIsGolden] = useState(false);
  const [showResult, setShowResult] = useState(false);
  //const [effectFrameIndex, setEffectFrameIndex] = useState<number | null>(null); // null이면 효과 안 재생
  const effectTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  //기울기
  const [orientationGamma, setOrientationGamma] = useState<number | null>(null);
  //권한
  const [permissionRequired, setPermissionRequired] = useState(false);

  <img
    className={`cookie-img ${shakeKey ? "shake" : ""} ${isGolden ? "golden-glow" : ""}`}
    src={COOKIE_STAGE_SRC[Math.min(stage, COOKIE_STAGE_SRC.length - 1)]}
    alt="fortune cookie"
    draggable={false} // 드래그 방지 (React/JSX 방식)
    onContextMenu={(e) => e.preventDefault()} // 마우스 우클릭 메뉴 방지 (React/JSX 방식)
  />

  useEffect(() => {
    // 사용할 모든 이미지를 미리 로드합니다.
    const preloadImages = (srcArray: string[]) => {
      srcArray.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages(COOKIE_STAGE_SRC);

    const handleOrientation = (event: DeviceOrientationEvent) => {
      // gamma (좌우 기울기) 값만 저장합니다.
      if (event.gamma !== null) {
        setOrientationGamma(event.gamma);
      }
    };

    // iOS 13+ 환경 체크 및 권한 요청 필요 플래그 설정
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        setPermissionRequired(true); // 권한 요청 버튼을 띄울 필요가 있음
    } else {
        // 그 외 환경 (Android, Desktop 등)에서는 바로 리스너 추가
        window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []); // 빈 배열: 컴포넌트가 처음 마운트될 때 한 번만 실행

  // iOS 권한 요청 처리
  const requestOrientationPermission = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as any).requestPermission();
        if (permissionState === 'granted') {
          console.log("Device orientation access granted");
          // 권한 획득 후 리스너 등록
          window.addEventListener('deviceorientation', (event) => {
             if (event.gamma !== null) setOrientationGamma(event.gamma);
          });
          setPermissionRequired(false); // 버튼 숨김 처리
        } else {
          console.log("Device orientation access denied");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 클릭 처리: stage 증가, 진동/셰이크 트리거, 첫 클릭 시 운세 결정
  const handleCookieClick = () => {
    if (isClickLocked) return;
    if (stage >= 3) return; 

    setIsClickLocked(true);
    setTimeout(() => setIsClickLocked(false), 700);

    setShakeKey(k => k + 1);

    try {
      if ("vibrate" in navigator) {
        (navigator as any).vibrate?.(30);
      }
    } catch (e) {}

    // 첫 클릭(0->1) 시 운세 선택 로직
    if (stage === 0) {
        let chosen: string; 
        let golden = Math.random() < 0.05; // 5% 확률 유지
        const TILT_THRESHOLD = 20; // 기울기 임계값 (20도 이상 기울여야 인정)
        
        if (orientationGamma !== null && Math.abs(orientationGamma) >= TILT_THRESHOLD) {
            if (orientationGamma < 0) {
                // 왼쪽 기울임: 애정운 확정
                chosen = golden ? GOLDEN_LOVE_FORTUNES[Math.floor(Math.random() * GOLDEN_LOVE_FORTUNES.length)] : LOVE_FORTUNES[Math.floor(Math.random() * LOVE_FORTUNES.length)];
            } else {
                // 오른쪽 기울임: 금전운 확정
                chosen = golden ? GOLDEN_MONEY_FORTUNES[Math.floor(Math.random() * GOLDEN_MONEY_FORTUNES.length)] : MONEY_FORTUNES[Math.floor(Math.random() * MONEY_FORTUNES.length)];
            }
        } else {
            // 일반 운세 로직
            if (golden) {
                const idx = Math.floor(Math.random() * GOLDEN_FORTUNES.length);
                chosen = GOLDEN_FORTUNES[idx];
            } else {
                const idx = Math.floor(Math.random() * FORTUNES.length);
                chosen = FORTUNES[idx];
            }
        }

        // 황금 운세 확정 시 웅웅음 재생
        if (golden) {
             playGoldenHum();
        }

        setIsGolden(golden);
        setSelectedFortune(chosen); 
    }

    const nextStage = Math.min(stage + 1, 3);
    setStage(nextStage);

    if (nextStage === 3) {
      setTimeout(() => setShowResult(true), 100);
    }
  };

  // WebAudio로 짧은 웅웅음 만들기 (황금운세 시)
  const playGoldenHum = () => {
    try {
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContextClass();
      const ctx = audioCtxRef.current!;
      // 짧은 저주파 oscillator + gain envelope
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 120; // 저음 웅웅
      gain.gain.value = 0.0001;
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.start(now);
      osc.stop(now + 0.65);

      // Clean up automatically
      osc.onended = () => {
        try {
          osc.disconnect();
          gain.disconnect();
        } catch (e) {}
      };
    } catch (e) {
      // fail silently if audio not allowed
    }
  };

  // effect animation: effectFrameIndex를 0..7 순환시키다가 끝내기
  // const startEffectAnimation = () => {
  //   // cancel previous if any
  //   if (effectTimerRef.current) {
  //     window.clearInterval(effectTimerRef.current);
  //     effectTimerRef.current = null;
  //   }
  //   let idx = 0;
  //   setEffectFrameIndex(0);
  //   프레임 교체 속도: 90ms (빠르게)
  //   effectTimerRef.current = window.setInterval(() => {
  //     idx += 1;
  //     if (idx >= EFFECT_SRC.length) {
  //       // 끝내기: 마지막 프레임 잠깐 보여준 뒤 사라지게 함
  //       window.clearInterval(effectTimerRef.current!);
  //       effectTimerRef.current = null;
  //       setTimeout(() => setEffectFrameIndex(null), 100);
  //       return;
  //     }
  //     setEffectFrameIndex(idx);
  //   }, 90);
  // };

  // 다시 뽑기 (리셋)
  const handleRetry = () => {
    setStage(0);
    setSelectedFortune(null);
    setIsGolden(false);
    setShowResult(false);
    //setEffectFrameIndex(null);
    // 짧게 버튼 클릭 애니메이션 클래스는 css :active로 처리
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (effectTimerRef.current) window.clearInterval(effectTimerRef.current);
      try {
        audioCtxRef.current?.close();
      } catch (e) {}
    };
  }, []);

  // 이미지 src 결정
  const cookieSrc = COOKIE_STAGE_SRC[Math.min(stage, COOKIE_STAGE_SRC.length - 1)];

  return (
    <div className="fortune-root">
      <header className="fortune-header">
        <h1 className="title">포춘 쿠키</h1>
        <p className="subtitle">터치하면 쿠키가 깨집니다</p>
      </header>

      <main className="fortune-main">
      {/* iOS 권한 요청 버튼 표시 */}
      {permissionRequired && (
        <button onClick={requestOrientationPermission} style={{ marginBottom: '10px', padding: '10px' }}>
          운세 뽑기를 위한 권한 요청
        </button>
      )}
      {/* 디버깅용 기울기 표시 (선택사항) */}
      <div>기울기 (Gamma): {orientationGamma?.toFixed(2) || '감지 안 됨'}</div>
        <div
          // shakeKey 변경될 때마다 shake 애니메이션 재실행되게 함 (key로 강제 재렌더링 효과)
          key={shakeKey}
          className={`cookie-wrap ${shakeKey} ${isGolden ? "golden" : ""}`}
          onClick={handleCookieClick}
          role="button"
          aria-label="fortune cookie"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCookieClick();
          }}
        >
          <img
            className={`cookie-img ${shakeKey ? "shake" : ""} ${isGolden ? "golden-glow" : ""}`}
            src={cookieSrc}
            alt="fortune cookie"
            draggable={false}
            // 클릭 시 CSS 애니메이션(진동) 적용 - className에 의해 트리거
          />

          {/* {effectFrameIndex !== null && (
            <img
              src={EFFECT_SRC[effectFrameIndex]}
              alt="effect"
              className="effect-img"
              draggable={false}
            />
          )} */}
        </div>

        {/* 결과 프레임 (흰 박스) */}
        <div 
          className={`result-frame ${isGolden ? "result-golden" : ""} ${showResult ? "is-visible" : "is-hidden"}`} 
          aria-live="polite"
        >
          <div className={`golden-badge ${isGolden ? "is-visible" : "is-hidden"}`}>
              {/* 뱃지 텍스트는 항상 여기에 존재하지만, CSS로 숨겨집니다 */}
              🌟 황금 운세!
          </div>

          <div className="fortune-text">
            <p>{selectedFortune}</p>
          </div>

          <button className="retry-btn" onClick={handleRetry}>
            다시 뽑기
          </button>
        </div>

      </main>

      <footer className="fortune-footer">
        <small>운세는 재미로 즐겨주세요!</small>
      </footer>
    </div>
  );
}
