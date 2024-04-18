import {IEducation} from "../components/common/IEducation";

const ssafy: IEducation.Education = {
  title: '삼성 청년 소프트웨어 아카데미(SSAFY) 4기 수료',
  startedAt: '2020-07',
  endedAt: '2021-05',
  subtitle: 'Java, Spring Boot, 알고리즘에 대한 기본적인 지식 및 실무 프로젝트 3회 수행',
}

const college: IEducation.Education = {
  title: '광운대학교',
  subtitle: '컴퓨터소프트웨어학과 졸업',
  endedAt: '2020-02',
  startedAt: '2014-03',
}

const highSchool: IEducation.Education = {
  title: '강릉고등학교',
  subtitle: '인문계 졸업',
  startedAt: '2011-03',
  endedAt: '2014-02',
}

const education: IEducation.Payload = {
  list: [ssafy, college, highSchool],
  disable: false,
}

export default education
