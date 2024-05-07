import { iSideProject } from '../components/SideProject/iSideProject'

const PickPic: iSideProject.SideProject = {
  thumbnail: 'pickpic.png',
  title: 'PickPic',
  innerImage: ['pickpicLogo.png', 'pickpic.png', 'pickpic2.png'],
  subTitle:
    '사진을 공유하고 어떤 사진이 좋은지 투표받는 웹사이트 (프론트엔드 개발)',
  detail: '삼성청년 소프트웨어 아카데미 공통 프로젝트 (2021-01 ~ 2021-02)',
  contributes: [
    '- Vue.js 사용 프론트엔드 개발 및 팀장 역할 수행',
    '- 게시글 작성 페이지 개발',
    '- 게시글 페이지, 투표, 댓글 기능 개발',
  ],
  techStack: [
    '- Vue.js',
    '- Java',
    '- MyBatis',
    '- Mysql',
    '- Spring Boot',
    '- Jenkins',
    '- Jira',
    '- Notion',
  ],
  github: 'https://github.com/shim99887/PickPic',
  projectDescription: [
    '삼성청년소프트웨어아카데미(SSAFY)에서 공통 프로젝트로 진행한 프로젝트입니다.\n' +
      '사진을 촬영하거나 선택 시 어려움을 가진 사람들을 위한 웹 페이지로 게시글로 사진에 대한 고수들의 댓글 피드백 및 투표 기능을 제공합니다.\n' +
      '또한 사이트 내 사진 편집 기능도 제공하여 즉시 수정 업로드 할 수 있도록 도움을 줍니다.\n' +
      'Vue.js로 프론트엔드 개발을 하였으며, Java 및 Spring Boot로 Restful API를 구현하였습니다.',
  ],
}

const Tmi: iSideProject.SideProject = {
  thumbnail: 'tmi.png',
  title: 'TMI',
  innerImage: ['tmi.png', 'tmi2.png', 'tmi3.png'],
  subTitle: '프로젝트 별 테스트 결과를 관리할 수 있는 웹사이트 (백엔드 개발)',
  detail: '삼성청년 소프트웨어 아카데미 기업 연계 프로젝트 (2021-04 ~ 2021-05)',
  contributes: [
    '- Java, Spring Boot 사용 백엔드 개발 및 팀장역할 수행',
    '- Junit, Jacoco 테스트 결과 raw 데이터 파싱 및 DB 저장',
    '- 유저 및 프로젝트 DB 설계 및 해당 Restful API 개발',
    '- 프로젝트 백엔드 초기 세팅',
  ],
  techStack: [
    '- React',
    '- Java',
    '- JPA',
    '- Mysql',
    '- Spring Boot',
    '- Mongo DB',
    '- Jira',
    '- Notion',
  ],
  github: 'https://github.com/shim99887/TMI',
  projectDescription: [
    '삼성청년소프트웨어아카데미(SSAFY)에서 기업연계 프로젝트로 진행한 프로젝트입니다.\n' +
      '삼성 SDS 기업 연계 프로젝트로 테스트 결과를 프로젝트 별로 한번에 관리할 수 있는 웹 사이트입니다.\n' +
      'React.js로 프론트엔드 개발을 하였으며, Java 및 Spring Boot로 Restful API를 구현하였습니다. 또한 JPA를 사용하였습니다.',
  ],
}

const Comeet: iSideProject.SideProject = {
  thumbnail: 'comeet.png',
  title: 'CoMeet',
  innerImage: ['comeet2.png', 'comeet3.png', 'comeet4.png'],
  subTitle: '코로나 시국 약속장소 추천해주는 웹사이트 (프론트엔드 개발)',
  detail: '삼성청년 소프트웨어 아카데미 특화 프로젝트 (2021-02 ~ 2021-04)',
  contributes: [
    '- Vue.js 사용 프론트엔드 개발',
    '- 초기 화면 디자인 및 랜딩 페이지 개발',
    '- 유동인구 데이터 수집',
    '- 회원 가입 및 로그인 기능 개발',
    '- FAQ 페이지 개발',
  ],
  techStack: [
    '- Vue.js',
    '- Java',
    '- MyBatis',
    '- Mysql',
    '- Spring Boot',
    '- Jira',
    '- Notion',
  ],
  github: 'https://github.com/shim99887/co-meet',
  projectDescription: [
    '삼성청년소프트웨어아카데미(SSAFY)에서 특화 프로젝트로 진행한 프로젝트입니다.\n' +
      '코로나 시국 안전한 약속장소 잡기를 주제로 기획하여 프로젝트를 시작하였습니다. 유동인구가 많은 지역을 피해 장소를 추천하였습니다.\n' +
      '유동인구 파악을 위한 데이터로 역 근처 별 카드 사용 데이터를 분석하여 추천 알고리즘을 통해 지역을 추천하는 방식을 사용했습니다.\n' +
      '또한 근처 지역의 코로나 확진자 데이터를 같이 제공하여 장소를 선택할 때 더욱 도움이 될 수 있도록 하였습니다\n' +
      '해당 프로젝트는 Vue.js로 프론트엔드 개발을 하였으며, Java Spring Boot로 백엔드 개발을 하였습니다.',
  ],
}

const Portfolio: iSideProject.SideProject = {
  thumbnail: 'portfolio.png',
  title: '포트폴리오',
  innerImage: ['portfolio.png', 'portfolio2.png', 'portfolio3.png'],
  subTitle: '김영록 포트폴리오',
  detail: '개발자 포트폴리오 웹 페이지 제작 (2024-03 ~ 2024-04)',
  contributes: [
    '- React, TypeScript 사용 프론트엔드 개발',
    '- Github Page 기능 이용 정적 배포',
    '- 반응형 대응을 위한 bootstrap grid 적용',
  ],
  techStack: ['- React', '- TypeScript', '- BootStrap'],
  github: 'https://github.com/shim99887/portfolio',
  projectDescription: [
    '포트폴리오 제출용 웹 사이트입니다. 최대한 깔끔하게 제가 했던 업무 및 프로젝트를 전달하려고 노력하였습니다.\n' +
      '반응형 적용을 위해 react-bootstrap을 사용하여 모바일 기기 대응을 진행하였습니다.\n' +
      '또한 빠른 배포를 위해 Github Pages 기능을 사용하였습니다.',
  ],
}

export const sideProject: iSideProject.Payload = {
  list: [PickPic, Comeet, Tmi, Portfolio],
}
