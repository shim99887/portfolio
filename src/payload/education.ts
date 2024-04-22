import { iEducation } from '../components/Education/iEducation'

const ssafy: iEducation.Education = {
  startedAt: '2020.07',
  endedAt: '2021.05',
  title: '삼성 청년 소프트웨어 아카데미(SSAFY) 4기 수료',
  description:
    'Java, Spring Boot, 알고리즘에 대한 기본적인 지식 및 실무 프로젝트 3회 수행',
}

const college: iEducation.Education = {
  startedAt: '2014.03',
  endedAt: '2020.02',
  title: '광운대학교',
  description: '컴퓨터소프트웨어학과 졸업',
}

const highSchool: iEducation.Education = {
  startedAt: '2011.03',
  endedAt: '2014.02',
  title: '강릉고등학교',
  description: '인문계 졸업',
}

export const education: iEducation.Payload = {
  list: [ssafy, college, highSchool],
}
