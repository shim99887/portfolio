import {IProject} from "../components/common/IProject";

export enum Company {
  Doeat = '두잇(Doeat)',
  ThirauTech = '티라유텍',
}

const doeatSettlementSystem: IProject.Project = {
  title: '스토어 및 라이더 정산 시스템 개편 및 적용',
  company: Company.Doeat,
  startedAt: '2022-12',
  endedAt: '2023-01',
  description: [
    { content: '스토어 환불 정책 리뉴얼 작업 및 귀책 수수료 정책 개발' },
    { content: 'Kotlin을 사용하여 정산 로직 개발' },
    { content: 'React, TypeScript를 사용 사장님이 보는 정산 페이지 개발' },
    { content: 'React Native, TypeScript를 사용 라이더가 보는 정산 페이지 개발' },
  ],
}

const doeatMartBackend: IProject.Project = {
  title: '마트 신사업 풀스택 개발',
  company: Company.Doeat,
  startedAt: '2022-10',
  endedAt: '2022-11',
  description: [
    { content: '배달라이더를 이용한 집 근처 마트에서 대신 장보기 서비스 개발' },
    { content: '라이더 현재 위치 및 배송 상태 관리를 위한 Admin 서비스 개발' },
    { content: 'Java로 백엔드 개발 및 React, TypeScript로 Admin 서비스 개발' },
    { content: '목표 수치인 일 100건의 주문을 오픈 후 달성 완료' },
  ],
}

const doeatChatSystem: IProject.Project = {
  title: '고객 앱 채팅 시스템 구현 및 Kafka 이벤트 구현',
  company: Company.Doeat,
  startedAt: '2023-06',
  endedAt: '2023-07',
  description: [
    { content: '고객 앱 내에서 같은 음식 관심사로 묶인 채팅방을 제공하는 서비스' },
    { content: 'React, TypeScript 사용 채팅방 및 해당 종류의 음식 배달 시 쿠폰 지급 서비스 개발' },
    { content: 'Kotlin 사용 Kafka 이벤트 핸들링 및 쿠폰 관련 백엔드 기능 개발' },
    { content: '팀 주문 성사 비율 n% 증가' },
  ],
}

const doeatRiderOptimization: IProject.Project = {
  title: '라이더 앱 성능 개선 작업',
  company: Company.Doeat,
  startedAt: '2023-04',
  endedAt: '2023-05',
  description: [
    { content: 'React Query refetch 주기 최적화 및 호출 쿼리 최소화' },
    { content: '데이터 추가 시 Batch Insert로 성능 개선' },
    { content: 'Transaction 단위 최소화 진행' },
    { content: '앱내 레이턴시 n ms -> m ms로 감소 및 발열 여름 기준 45도 미만 유지' },
  ],
}

const thiraKoreanAirMES: IProject.Project = {
  title: '대한항공 MES 프론트엔드 개발',
  company: Company.ThirauTech,
  startedAt: '2022-03',
  endedAt: '2022-06',
  description: [
    { content: '디자이너와 협업하에 JQuery 사용 자재 수불부터 공정까지의 페이지를 제작' },
    { content: '페이지 제작하는 다른 외주 개발자의 기능 요청사항 개발 및 배포' },
  ],
}

const project: IProject.Payload = {
  list: [thiraKoreanAirMES, doeatMartBackend, doeatSettlementSystem, doeatRiderOptimization, doeatChatSystem],
  disable: false,
}

export default project
