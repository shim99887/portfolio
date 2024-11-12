import { iExperience } from '../components/Experience/iExperience'

const Shinwon: iExperience.Experience = {
  startedAt: '2023.08',
  company: '신원',
  description: 'MES 시스템 개발자',
  techStack: ['JavaScript', 'Java', 'Spring Boot', 'Mybatis', 'Nexacro N'],
  contribute: [
    '해외법인 스마트 팩토리 셋업 및 관리',
    '해외법인 스마트 팩토리 현장 셋업 교육',
    'MES 관련 매뉴 개발 및 분석',
    'MES 운영 및 유지보수 관리',
    '재단, 봉제, 검사 관련 메뉴 개발',
  ],
}

const Doeat: iExperience.Experience = {
  startedAt: '2022.09',
  endedAt: '2023.09',
  company: '두잇 (Doeat)',
  description: '라이더 앱 및 고객 앱 풀스택 개발자',
  techStack: [
    'React',
    'React Native',
    'TypeScript',
    'Java',
    'Kotlin',
    'Spring Boot',
    'JPA',
    'MySql',
    'Kafka',
  ],
  contribute: [
    '품절 및 가격 변동 동기화 백엔드 개발',
    '스토어 및 라이더 정산 시스템 개편 및 적용',
    '마트 신사업 백엔드 개발',
    '고객 앱 채팅 시스템 구현 및 Kafka 이벤트 구현',
    '라이더 앱 성능 개선 작업',
  ],
}

const Thirautech: iExperience.Experience = {
  startedAt: '2021.07',
  endedAt: '2022.08',
  company: '티라유텍 (Thirautech)',
  description: 'MES 웹 서비스 개발',
  techStack: [
    'Html',
    'JavaScript',
    'JQuery',
    'MyBatis',
    'Java',
    'Spring Boot',
    'MSSQL',
  ],
  contribute: [
    '대한항공 MES 프론트엔드 개발',
    '에코프로 MES 프론트엔드 개발',
    'MES 웹 자체 솔루션 개발 및 개선',
  ],
}
// 2022.09 ~ 2023-09
export const experience: iExperience.Payload = {
  list: [Shinwon, Doeat, Thirautech],
}
