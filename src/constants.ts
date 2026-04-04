export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Summary", href: "#summary" },
  { name: "Projects", href: "#projects" },
  { name: "Other Info", href: "#other-info" },
  { name: "Journey", href: "#journey" },
];

export const PROFILE = {
  name: "금보경(Bokee)",
  role: "경험이 있는 4년차 기획자 금보경입니다.",
  email: "bokee0628@gmail.com",
  phone: "010 - 7544 - 2523",
  keywords: [
    "[AX] 기획 워크플로우 개선",
    "[AX] GEO 전략/기획",
    "통신사 업셀 서비스 기획",
    "커머스 전시관리 BO 개선",
    "0 to 1 서비스 런칭",
    "B2B2C 서비스 운영/개선",
    "오프라인 커머스 CS리딩",
    "제안서 작성"
  ],
  introduction: `비즈니스 가치를 깊이 이해하고, AI 기술과 제품의 성장에 몰입하며 고객 가치와 사업적 성과를 동시에 창출합니다.
본질적인 문제 해결 능력과 유연한 기술 활용력을 바탕으로, 제품이 나아갈 모든 성장 과정을 리드하겠습니다.`
};

export const EXPERIENCE_SUMMARY_ITEMS = [
  { icon: "🤖", text: "[AX] GEO 사업화 전략 수립 및 Vibe Coding 기반 프로젝트 워크플로우를 개선하고 있습니다." },
  { icon: "🚀", text: "[SI] 통신사의 요금제 업셀/다운케어 POC를 이끌며 고객 데이터 기반 실험 - 정규화의 스케일업 사이클을 경험했습니다." },
  { icon: "🤝", text: "[SM] B2B2C 제품을 개선해 사용성 증대와 비즈니스 확장을 함께 이뤄낸 경험이 있습니다." },
  { icon: "✅", text: "SPA브랜드 매장 영업/CS→서비스기획 커리어 전환 경험으로, 제품과 고객에 빠르게 몰입합니다." },
  { icon: "🏃‍♀️", text: "모든 도전을 성장의 기회로 삼으며, 배우고 발전하는 데 주저하지 않습니다." },
  { icon: "🍀", text: "진심을 담아 따뜻하고 단단하게 소통합니다." }
];

export const PROFESSIONAL_SUMMARY = {
  company: "(주)이트라이브",
  period: "2023.02 ~ 현재",
  role: "서비스 기획",
  description: "AI 기술을 비즈니스 가치로 전환하며,\n데이터 기반의 의사결정과 프로세스 혁신을 통해\n서비스의 실질적인 성장을 이꿉니다.",
  details: [
    "LLM 기반 신규 비즈니스 모델 사업화 추진",
    "Vibe Coding 기반 워크플로우 개선 경험",
    "0 to 1 서비스 런칭 및 운영",
    "데이터 기반 실험-검증 및 스케일업 경험",
    "다양한 직군과 막힘없는 협업 (디자인, 개발, DBA, PMO 등)"
  ],
  projects: [
    {
      title: "[AX] Vibe Coding 및 AI 도구 도입을 통한 SI/SM 업무 효율화",
      period: "2025.11 ~ 진행중",
      desc: "- AI 워크플로우 개선을 통한 서비스 기획 및 구축 공수 절감"
    },
    {
      title: "[AX] LLM 기반 GEO 사업화 전략 수립 및 가이드라인 구축",
      period: "2025.11 ~ 진행중",
      desc: "- 생성형 AI 검색 결과 최적화를 위한 콘텐츠 구조 설계 및 비즈니스 적용 방안 수립"
    },
    {
      title: "[LGU+] 디지털 전환 가속화 프로젝트",
      period: "2025.01 ~ 2025.12",
      highlight: "업셀 POC 추천 요금제 클릭률 3배 증가 → 유효성 검증 성공",
      desc: "- 실시간 고객 데이터 기반 개인화 업셀 캠페인 플랫폼 구축\n- 디지털 채널 그로스해킹플랫폼 구축 및 공통전시관리 모듈화"
    },
    {
      title: "[삼성물산] 홈닉 커뮤니티 시설 예약 서비스 재구축 & 유지운영",
      period: "2023.09 ~ 2024.12",
      highlight: "런칭 이후 3개월 내 3개 현장 서비스 도입 → 비즈니스 확장에 기여",
      desc: "- B2B2C서비스 예약 프로세스 모듈화 및 운영 효율 개선"
    },
    {
      title: "[삼성물산] 아파트 주거생활 플랫폼 홈닉(Homeniq) 구축",
      period: "2023.03 ~ 2023.08",
      highlight: "0 to 1 서비스 런칭",
      desc: "- 서비스 온보딩 프로세스(로그인/회원가입/인증 등) 기획"
    }
  ]
};

export const PROJECTS = [
  {
    id: "lgu-upsell",
    client: "LGU+ 디지털 채널",
    title: "실시간 고객 데이터 기반\n개인화 업셀 캠페인 플랫폼 구축\n(POC-Validation-Scale up)",
    period: "2025.02 ~ 2025.12",
    contribution: "해당 도메인 프로덕트 오너십 수행",
    tags: ["마케팅", "업셀", "데이터분석", "FO", "BO"],
    results: [
      { 
        title: "[POC] 추천 요금제 클릭률, 전환율 개선",
        items: [
          "추천 요금제 클릭률 3배 증가 (11.8% → 35.2%)",
          "추천 요금제 전환율 증가 (10.5% → 15.2%)"
        ]
      },
      {
        title: "ARPU(인당 평균 매출) 감소 방어 및 고객 타겟팅 정교화",
        items: [
          "요금제 하향 시도 고객 대상 매출 손실 방어"
        ]
      },
      {
        title: "운영 효율 개선",
        items: [
          "캠페인 기획부터 실행까지의 리드타임(Lead-time) 약 1주 → 1일로 단축",
          "혜택/정책이 수정되어도 BO 설정만으로 대응 가능한 모듈구조 설계"
        ]
      }
    ],
    activities: [
      {
        title: "[POC] 가설 검증: 실시간 데이터 기반 개인화 마케팅 유효성 검증",
        items: [
          "고객 실시간 데이터를 활용한 업셀/다운케어 가설 수립 및 13일간의 POC 리딩. 예상치 못한 결과(하향 변경 시도 증가)를 데이터로 포착하고, '요금제 유지 추천 씬'을 신설하는 피벗(Pivot)을 통해 최종 추천 요금제 클릭률 3배(11.8%→35.2%), 전환율 44% 개선(10.5%→15.2%) 달성."
        ]
      },
      {
        title: "[Validation] 인사이트 도출: POC 한계점 분석 및 정규화 요건 정의",
        items: [
          "POC 운영 과정에서 발견된 '운영 자유도 부족', '시나리오 확장성 한계' 등 운영 페인포인트를 분석하고, 이를 해결하기 위한 캠페인 모듈 및 BO 시스템 기능 요건 정의"
        ]
      },
      {
        title: "[Scale-up] 시스템화: 전사 확산을 위한 캠페인 UX설계 및 운영 플랫폼 구축",
        items: [
          "검증된 POC 시나리오를 전 지면으로 확산하기 위해 지면별 캠페인 우선순위 관리 로직 설계 및 BO 구축"
        ]
      }
    ]
  },
  {
    id: "lgu-growth",
    client: "LGU+ 디지털 채널",
    title: "그로스해킹플랫폼 구축 및\n공통전시관리 모듈화",
    period: "2025.01 ~ 2025.07",
    contribution: "전시 모듈 설계 Lead",
    tags: ["전시관리", "운영효율화", "FO", "BO"],
    summary: "실험 기반 공통전시관리 플랫폼을 구축하여\n이벤트 전시/운영 개발 의존도 축소 및\n운영 편의성 증대에 기여",
    results: [
      {
        title: "전시 교체 속도 약 2배 이상 단축 (약 2주 → 1~2일)",
        items: [
          "이벤트 관리 개발 의존도 획기적 축소"
        ]
      },
      {
        title: "실험 기반 콘텐츠 운영을 통한 고객 경험 극대화",
        items: [
          "고객 세그먼트별 마케팅 소구 기반 마련"
        ]
      },
      {
        title: "고객사 서비스 품질평가 4.8점 달성 (5점 만점)",
        items: [
          "운영 편의성 증대"
        ]
      }
    ],
    activities: [
      {
        title: "그로스해킹플랫폼, 공통전시모듈 설계 및 기획",
        items: [
          "비개발 직군(마케터 등)이 직접 캠페인을 세팅할 수 있는 공통 전시 모듈 및 BO 구축으로, 마케팅 캠페인 런칭 리드타임을 85% 단축(약 1주 → 1일).",
          "비개발 조직이 직접 운영 가능한 콘텐츠 모듈 구조화 및 정의"
        ]
      },
      {
        title: "기능 설계 및 문서화 체계 수립",
        items: [
          "FO/BO 상세 기획 및 QA 수행 (JIRA, 구글시트 활용)",
          "IA 작성, 요구사항 정의, UI 공통가이드 등 문서 체계화"
        ]
      },
      {
        title: "프로젝트 관리 및 운영 지원",
        items: [
          "사업부 대상 그로스해킹플랫폼 온보딩 워크샵 진행",
          "콘텐츠 전시 → 실험 → 분석 → 개선 시나리오 정의 및 운영 가이드 제작"
        ]
      }
    ]
  },
  {
    id: "homeniq-community",
    client: "삼성물산 홈닉(Homeniq) APP",
    title: "커뮤니티 시설 예약 서비스\n재구축 & 홈닉 유지 운영",
    period: "2023.09 ~ 2024.12",
    contribution: "Front-end 기획 및 서비스 정책 설계 Lead",
    tags: ["B2B2C", "구조화", "운영효율화"],
    summary: "단지별로 상이한 21개 커뮤니티 시설의 레거시 정책을 분석 및 8개 유형으로 패턴화(모듈화). 이를 통해 타 건설사(HS화성 등) 및 신규 단지 서비스 도입 리드타임을 O주에서 O주로 획기적으로 단축하여 홈닉 B2B 플랫폼 확장에 직접적으로 기여함.",
    results: [
      {
        title: "신규 현장 서비스 도입 리드타임 축소하여 비즈니스 확장 가속",
        items: [
          "런칭 후 3개 신규 현장에 서비스 도입 및 지속 확장"
        ]
      },
      {
        title: "고객 경험 및 운영 효율 증대",
        items: [
          "안정화 이후, VOC 기존 대비 약 2배 이상 감소",
          "원베일리 모바일 채널 예약률 AS-IS 대비 32% 증가"
        ]
      },
      {
        title: "현장용 Admin 기능 도입을 통해 관리업무 표준화 및 운영 자율성 증대",
        items: []
      }
    ],
    activities: [
      {
        title: "VOC 및 운영 데이터 기반 문제 정의",
        items: [
          "예약 실패 등 핵심 VOC 원인(전체의 60%)을 데이터로 분석하고, 8 Depth의 예약 프로세스를 4 Depth로 단축하는 UX 최적화 단행. 그 결과 모바일 예약률 32% 증대 및 관련 VOC 50% 이상 감소 달성.",
          "레거시 DB 및 정책 분석을 통해 TO-BE 방향성 수립"
        ]
      },
      {
        title: "모바일 서비스 플로우 및 정책 설계",
        items: [
          "운영/개발효율 및 표준화된 사용자 경험을 위한 UI 모듈화",
          "모바일 서비스 플로우, 정책 설계"
        ]
      },
      {
        title: "프로젝트 협업 및 런칭 리딩",
        items: [
          "개발, 디자인, PMO 등 다양한 직군과 소통하며 일정 및 우선순위 관리",
          "테스트 시나리오 작성 및 QA를 통해 서비스의 안정적인 런칭 주도"
        ]
      },
      {
        title: "운영 효율화 및 B2B2C 확장 지원",
        items: [
          "카페테리아 스마트오더, 정산내역 조회 등 다양한 개선 과제 기획",
          "운영 가이드 작성 및 신규현장 도입 지원을 통해 서비스 안정적 운영 지원"
        ]
      }
    ]
  },
  {
    id: "homeniq-app",
    client: "삼성물산 홈닉(Homeniq) APP",
    title: "라이프스타일 솔루션,\n홈닉 APP 구축",
    period: "2023.03 ~ 2023.08",
    contribution: "기여도 50% (기획 2명)",
    tags: ["플랫폼", "APP 런칭", "0 to 1 제품 기획"],
    summary: "오프라인/분산된 주거 생활 기능을 통합해\n신축 아파트 입주민 대상 'One-APP' 경험 제공",
    results: [
      {
        title: "성공적인 0 to 1 서비스 런칭",
        items: [
          "1차 런칭 일정 내 안정적으로 APP 출시",
          "iOS/AOS 스토어 심사 Reject 없이 성공적인 초기 런칭 완료"
        ]
      },
      {
        title: "초기 사용자 70% 이상 가입 1주일 내 Key Action 실행",
        items: [
          "입주예약(Key Action 1), 입주민 인증(Key Action 2)",
          "실행률 지표 확보"
        ]
      },
      {
        title: "Samsung IT Innovation Awards, ICT AWARD 수상",
        items: []
      }
    ],
    activities: [
      {
        title: "회원 온보딩 프로세스 설계 - UX 이탈 위험 구간 최소화",
        items: [
          "회원가입, 입주예약, 입주민 인증 흐름 분기 축소",
          "회원 유형, 세대 인증, 멤버십, 개인정보 정책 설계"
        ]
      },
      {
        title: "사용자 개인정보 라이프사이클 데이터 플로우 구조화",
        items: []
      },
      {
        title: "홈닉 멤버십 서비스 설계",
        items: [
          "삼성카드 - 홈닉 CI 연동 프로세스 정의",
          "포인트 적립 시나리오 설계"
        ]
      },
      {
        title: "서비스 운영 지원 체계 구축",
        items: [
          "약관 갱신 프로세스, 가입/인증 흐름 분기 축소 및 오류 재시도 UX 설계",
          "스토어 심사 체크리스트 선제 점검, Reject 요소 사전 제거"
        ]
      }
    ]
  }
];

export const OTHER_INFO = {
  education: [
    { name: "국가평생교육진흥원 학점은행", major: "경영학과 (학사)", period: "2019.12 ~ 2023.08" },
    { name: "계원예술대학교", major: "디지털미디어디자인과 기획 세부전공", period: "2021.03 ~ 2023.02" }
  ],
  certifications: [
    { name: "데이터분석 준전문가 (ADSP)", issuer: "한국데이터산업진흥원", date: "2025" },
    { name: "SQL 개발자 (SQLD)", issuer: "한국데이터산업진흥원", date: "2024" },
    { name: "Google Analytics Certification", issuer: "Google Analytics Academy", date: "2024" }
  ],
  awards: [
    { name: "ICT AWARD - 디지털 서비스혁신 부문 그랑프리", issuer: "한국정보과학진흥협회", detail: "삼성물산 라이프스타일 통합 솔루션 '홈닉'", date: "2024" },
    { name: "Samsung IT Innovation Awards - 대상", issuer: "삼성 SDS", detail: "삼성물산 라이프스타일 통합 솔루션 '홈닉'", date: "2023" },
    { name: "계원예술대학교 졸업작품 학과 '최우수상', 'PT 우수상'", issuer: "계원예술대학교", detail: "말·언어장애 아동을 위한 AAC 솔루션, '키닥(KIDAAC)'", date: "2022" },
    { name: "커뮤니케이션 디자인 국제 공모전 - 우수상", issuer: "한국커뮤니케이션 디자인 협회", detail: "착한소비 큐레이션 플랫폼, '미닝월렛'", date: "2022" },
    { name: "커뮤니케이션 디자인 국제 공모전 - 특선", issuer: "한국커뮤니케이션 디자인 협회", detail: "플라스틱 프리 포장 전문 서비스, '캐리아웃'", date: "2022" }
  ]
};

export const JOURNEY = {
  title: "Experience Journey",
  subtitle: "Connecting the dots.",
  description: "실행하는 힘으로 기술과 비즈니스를 연결하여, 독보적인 성장 곡선을 그려냅니다.\n지금까지 그래왔듯 '금보경'이 쌓아온 다각도의 경험은 AX 시대의 복잡한 문제를 해결하는 강력한 원동력이 될 것입니다.\n저의 다음 스테이지는, AI 기술을 실무 비즈니스에 적용해 새로운 고객 가치를 창출하는 PM/PO로 나아가는 것입니다.",
  steps: [
    {
      title: "언어치료 청각재활학과",
      desc: "사람의 '불편함'을\n해소하는 일의 가치 발견",
      linkText: "발화장애 아동을 위한 AAC 프로젝트로 경험 연결",
      type: "start"
    },
    {
      title: "유니클로 CS리더",
      desc: "현장에서 문제를 정의하고\n해결하는 실전 감각, 몰입 경험",
      type: "step"
    },
    {
      title: "디지털미디어디자인과\n기획 전공",
      desc: "사용자 경험을 데이터와\n디자인으로 해석하는 방법",
      linkText: "보완대체의사소통(AAC)\n제작 프로젝트",
      type: "step"
    },
    {
      title: "서비스기획자\n커리어 시작",
      desc: "0 to 1 서비스 런칭 경험,\n데이터 기반 실험과 협업으로\n고객사/자사 매출목표 달성에 기여",
      linkText: "고객과의 소통 경험을 통해,\n사용자를 끊임없이 사랑하는\n서비스 기획자로 커리어 시작!",
      type: "step"
    },
    {
      title: "AI Transformation",
      desc: "최신 AI 기술(GEO, Vibe Coding)을 실무에 이식하여 비즈니스 가치 극대화",
      type: "step"
    },
    {
      title: "Bokee's\nNext Stage?",
      desc: "도메인 전문성과 AI 실행력을 기반으로,\nAX 시대의 비즈니스 성장을 리드하는\nPM/PO로 성장!",
      type: "end"
    }
  ]
};
