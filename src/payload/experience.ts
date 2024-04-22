import { iExperience } from '../components/Experience/iExperience'

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
  list: [Doeat, Thirautech],
}
