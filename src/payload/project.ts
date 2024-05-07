import { iProject } from '../components/Project/iProject'

const KoreanAir: iProject.Project = {
  title: '대한항공 MES 프론트엔드 개발',
  startedAt: '2022.03',
  endedAt: '2022.06',
  company: '티라유텍',
  contribute: [
    '디자이너와 협업하에 JQuery 사용 자재 수불부터 공정까지의 페이지를 제작',
    '페이지 제작하는 다른 외주 개발자의 기능 요청사항 개발 및 배포',
  ],
}

const NodeDistanceCostSystem: iProject.Project = {
  title: '노드 거리 기반 단가체계 기획 및 개발',
  startedAt: '2023.05',
  endedAt: '2023.06',
  company: '두잇',
  contribute: [
    '배달 노드와 노드 사이의 거리를 기반으로 단가 체계 기획 및 모델링',
    '모델링 바탕으로 기획자 및 디자이너와 협의 후 Figma 기반 디자인 협의',
    'React Native, TypeScript 기반으로 지도 화면 구성 및 단가 정보 제공 페이지 제작',
    'Kotlin, Spring Boot, JPA 기반 노드 기반 단가 책정 및 정산 기능 개발',
  ],
  detail: {
    innerImage: ['nodeDistanceImage1.png', 'nodeDistanceImage2.png'],
    projectDetail: '라이더 단가 비용 절감을 위한 새로운 단가 체계 기획 및 개발',
    contributes: [
      'Kotlin, Spring Boot 사용 Rest API 개발',
      '노드 및 100m 거리별 적정 단가 책정을 위한 Excel 모델링',
      '디자이너와 Figma로 디자인 협의',
      'React Native, TypeScript로 화면 개발',
      '새로운 단가 체계를 위한 라이더 정산 개발',
    ],
    techStack: [
      'Kotlin',
      'Spring Boot',
      'JPA',
      'MySql',
      'React Native',
      'TypeScript',
      'FCM',
      'Git',
      'Figma',
      'Slack',
    ],
    detail:
      '라이더 건당 단가를 약 100원 정도 절감해야하는 상황에서 기존 단가 체계로는 한계가 있어서 새로운 단가체계의 기획 및 개발이 필요했습니다. ' +
      '저는 기획부터 개발까지 맡아서 진행해보라는 지시를 받고 모델링부터 시작하였습니다. 모델링의 초점은 100원을 절감하면서 라이더가 합리적으로 느낄만한 단가를 제시하는 것입니다. ' +
      '두잇의 묶음 배달 특징은 같은 행정동 내의 주문이 묶인다는 것이 있습니다. ' +
      '따라서 노드의 단가는 낮추고 100m 당 단가를 높여서 먼 거리는 조금 더 라이더에게 유리하고 단 거리는 회사에게 이익이 되도록 모델링하였습니다. ' +
      '해당 단가체계로 프론트엔드 및 백엔드 모두 개발을 진행하였습니다.',
    retrospect: [
      {
        title: '단가 Excel 모델링',
        content:
          '단건 배차, 2건 동시 배차, 3건 동시 배차에 따라 각각 노드 간의 평균 거리를 기반, 주문 수를 가중치로 설정하여 100m 당 단가 및 노드 단가를 책정하였습니다. 해당 단가 모델링은 대표님과 라이더 팀 메인 PO와 협의 후 통과되어 실제 단가체계로 적용되었습니다. 해당 프로젝트로 기획부터 디자인 개발까지 모두 직접 경험해볼 수 있었습니다.',
      },
    ],
  },
}

const Mart: iProject.Project = {
  title: '마트 장보기 신사업 풀스택 개발',
  startedAt: '2022.10',
  endedAt: '2022.11',
  company: '두잇',
  contribute: [
    '배달라이더를 이용한 집 근처 마트에서 대신 장보기 서비스 개발',
    '라이더 현재 위치 및 배송 상태 관리를 위한 Admin 서비스 개발',
    'Java로 백엔드 개발 및 React, TypeScript로 Admin 서비스 개발',
    '목표 수치인 일 100건의 주문을 오픈 후 달성 완료',
  ],
  detail: {
    innerImage: ['martImage1.png', 'martImage2.png'],
    projectDetail:
      '고객 앱 내 마트 신사업 백엔드 개발을 맡아서 필요한 테이블 설계 및 Rest API 개발을 진행했습니다. 또한 결제 및 환불 로직 개발도 진행하였습니다.',
    contributes: [
      'Java, Spring Boot 사용 Rest API 개발',
      'Toss Payment 사용 주문, 결제, 환불 기능 구현 및 마트 정산 기능 개발',
      '주문 추적을 위한 라이더 위치 및 현황을 제공하는 Admin 페이지 개발',
      '마트 상품 정보 크롤링',
    ],
    techStack: [
      'Kotlin',
      'Spring Boot',
      'JPA',
      'MySql',
      'React',
      'TypeScript',
      'FCM',
      'Next.js',
      'Git',
    ],
    detail:
      '음식 배달 이외의 수익처를 발견하고자 시작된 프로젝트로 마트를 섭외하여 4시 이전에 주문 시 당일 6시 배송을 원칙으로 배달을 해준다면 고객 주문수가 많이 발생할 것이다 라는 가정으로 시작되었습니다. 결제 시스템은 Toss Payment를 사용하였고 결제 및 환불 기능을 구현하였습니다. 라이더 위치는 Redis에 저장된 라이더 위치 정보를 기반으로 제공하였습니다.',
    retrospect: [
      {
        title: '주문, 결제, 환불 기능 구현 및 마트 정산 기능 개발',
        content:
          '기존 배달 주문인 팀 배달과 다르게 단 건 주문으로 새롭게 테이블 및 주문 정보를 세팅하였고, TossPay 및 IamPort 결제 및 환불 기능을 만들어 적용하였습니다. 또한 주문 건당 수수료를 계산하여 마트 사장님께 제공되는 정산 기능 및 페이지를 제작하였습니다.',
      },
    ],
  },
}

const Settlement: iProject.Project = {
  title: '스토어 및 라이더 정산 시스템 개편 및 적용',
  startedAt: '2022.12',
  endedAt: '2023.01',
  company: '두잇',
  contribute: [
    '스토어 환불 정책 리뉴얼 작업 및 귀책 수수료 정책 개발',
    'Kotlin을 사용하여 정산 로직 개발',
    'React, TypeScript를 사용 사장님이 보는 정산 페이지 개발',
    'React Native, TypeScript를 사용 라이더가 보는 정산 페이지 개발',
  ],
}

const Optimization: iProject.Project = {
  title: '라이더 앱 성능 개선 작업',
  startedAt: '2023.04',
  endedAt: '2023.05',
  company: '두잇',
  contribute: [
    'React Query refetch 주기 최적화 및 호출 쿼리 최소화',
    '데이터 추가 시 Batch Insert로 성능 개선',
    'Transaction 단위 최소화 진행',
    '앱내 레이턴시 n ms -> m ms로 감소 및 발열 여름 기준 45도 미만 유지',
  ],
}

const Chatting: iProject.Project = {
  title: '고객 앱 채팅 시스템 구현 및 Kafka 이벤트 구현',
  startedAt: '2023.06',
  endedAt: '2023.07',
  company: '두잇',
  contribute: [
    '고객 앱 내에서 같은 음식 관심사로 묶인 채팅방을 제공하는 서비스',
    'React, TypeScript 사용 채팅방 및 해당 종류의 음식 배달 시 쿠폰 지급 서비스 개발',
    'Kotlin 사용 Kafka 이벤트 핸들링 및 쿠폰 관련 백엔드 기능 개발',
    '팀 주문 성사 비율 n% 증가',
  ],
  detail: {
    innerImage: ['clubImage1.png', 'clubImage2.png'],
    projectDetail:
      '고객 앱 내 소셜 실험을 위한 채팅 시스템 개발, A/B 테스트 형식으로 개발하여 가설 검증',
    contributes: [
      'Kafka 웹 소켓을 이용한 실시간 채팅 구현',
      '떡볶이라는 메뉴를 주문 시 같이 주문한 사람들과 포인트를 분배받는 기능 추가',
      'Kotlin을 사용 Kafka 이벤트 핸들링 및 Rest API 작성',
      'React, TypeScript 사용 채팅방 구현',
      'Fcm 사용 이벤트 발생 시 푸시 전송',
    ],
    techStack: [
      'Kotlin',
      'Spring Boot',
      'JPA',
      'Apache Kafka',
      'MySql',
      'React',
      'TypeScript',
      'FCM',
      'Next.js',
      'Git',
    ],
    detail:
      '고객들이 공동의 취향을 가지고 채팅방에 모이면 같은 주제로 대화가 이어지면서 추후 해당 음식 주문까지 발생할 것이다 라는 가정으로 A/B 테스트 형식으로 개발을 진행하였습니다.\n 하지만 공통의 주제를 가지고 입장을 하여도 입장 인원에 비하여 채팅이 활발하지 않다는 문제점을 발견하고, 개인간의 채팅으로 변경하여 좀 더 근처에 거주하는 사람들과 먼저 대화를 오고 갈 수 있도록 변경 개발하였습니다.',
    retrospect: [
      {
        title: 'Kafka 웹 소켓을 이용한 실시간 채팅 기능 구현',
        content:
          'Apache Kafka를 통한 웹 소켓으로 실시간 채팅을 구현하였습니다. 하나의 토픽 아래 행정동 별로 다른 채널을 구독하도록 설정하여 채팅방을 구분하였습니다. 또한 유저 입장, 퇴장, 배달 주문 시 해당 이벤트 별로 Message Type을 변경하여 처리하였습니다.',
      },
      {
        title: 'React, TypeScript를 사용하여 채팅방 구현',
        content:
          '채팅방 UI는 디자이너와 협업하여 Figma를 통하여 전달받고 해당 디자인을 바탕으로 개발을 진행했습니다. 또한 최상단으로 스크롤 이동 시 이전 채팅을 불러오도록 개발했습니다. 떡볶이라는 메뉴를 주문 시 웹 소켓 이벤트를 통하여 쿠폰 발급 대상자라면 이벤트 모달을 보여주는 방식으로 개발하였습니다.',
      },
    ],
  },
}

export const project: iProject.Payload = {
  list: [
    Chatting,
    NodeDistanceCostSystem,
    Optimization,
    Settlement,
    Mart,
    KoreanAir,
  ],
}
