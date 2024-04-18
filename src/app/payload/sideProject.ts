import { ISideProject } from '@/app/components/common/ISideProject'
import { TechStack } from '@/app/components/common/TechStack'

const ssafyThird: ISideProject.SideProject = {
  id: 'tmi',
  title: 'TMI',
  titleImage: '/tmi.png',
  contribute: [
    '- Java, Spring Boot 사용 백엔드 개발 및 팀장역할 수행',
    '- Junit, Jacoco 테스트 결과 raw 데이터 파싱 및 DB 저장',
    '- 유저 및 프로젝트 DB 설계 및 해당 Restful API 개발',
    '- 프로젝트 백엔드 초기 세팅',
  ],
  devDescription:
    '삼성청년소프트웨어아카데미(SSAFY)에서 기업연계 프로젝트로 진행한 프로젝트입니다.\n' +
    '삼성 SDS 기업 연계 프로젝트로 테스트 결과를 프로젝트 별로 한번에 관리할 수 있는 웹 사이트입니다.\n' +
    'React.js로 프론트엔드 개발을 하였으며, Java 및 Spring Boot로 Restful API를 구현하였습니다. 또한 JPA를 사용하였습니다.',
  projectDescription: '',
  subtitle: '삼성청년 소프트웨어 아카데미 기업 연계 프로젝트 (2021-04 ~ 2021-05)',
  technologyStack: [
    TechStack.React,
    TechStack.Java,
    TechStack.JPA,
    TechStack.Mysql,
    TechStack.SpringBoot,
    TechStack.MongoDb,
    TechStack.Jenkins,
  ],
  openSources: ['junit', 'jacoco'],
  innerImages: ['/tmi.png', '/tmi2.png', '/tmi3.png'],
  innerTitle: '프로젝트 별 테스트 결과를 관리할 수 있는 웹사이트 (백엔드 개발)',
  github: 'https://github.com/shim99887/TMI',
}
//
const ssafySecond: ISideProject.SideProject = {
  id: 'comeet',
  title: 'Co-Meet',
  titleImage: '/comeet.png',
  contribute: [
    '- Vue.js 사용 프론트엔드 개발',
    '- 초기 화면 디자인 및 랜딩 페이지 개발',
    '- 유동인구 데이터 수집',
    '- 회원 가입 및 로그인 기능 개발',
    '- FAQ 페이지 개발',
  ],
  devDescription:
    '삼성청년소프트웨어아카데미(SSAFY)에서 특화 프로젝트로 진행한 프로젝트입니다.\n' +
    '코로나 시국 안전한 약속장소 잡기를 주제로 기획하여 프로젝트를 시작하였습니다. 유동인구가 많은 지역을 피해 장소를 추천하였습니다.\n' +
    '유동인구 파악을 위한 데이터로 역 근처 별 카드 사용 데이터를 분석하여 추천 알고리즘을 통해 지역을 추천하는 방식을 사용했습니다.\n' +
    '또한 근처 지역의 코로나 확진자 데이터를 같이 제공하여 장소를 선택할 때 더욱 도움이 될 수 있도록 하였습니다\n' +
    '해당 프로젝트는 Vue.js로 프론트엔드 개발을 하였으며, Java Spring Boot로 백엔드 개발을 하였습니다.',
  projectDescription: '',
  subtitle: '삼성청년 소프트웨어 아카데미 특화 프로젝트 (2021-02 ~ 2021-04)',
  technologyStack: [TechStack.Vue, TechStack.Java, TechStack.MyBatis, TechStack.Mysql, TechStack.SpringBoot],
  // openSources: ['jodit', 'tiptap'],
  innerImages: ['/comeet3.png', '/comeet2.png', 'comeet4.png'],
  innerTitle: '코로나 시국 약속장소 추천해주는 웹사이트 (프론트엔드 개발)',
  github: 'https://github.com/shim99887/co-meet',
}
//
// const ssafyFirst: ISideProject.SideProject = {
//   title: 'PickPic',
//   titleImage: '/pickpic.png',
//   hyperLink: '/pickpic',
// }

const ssafyFirst: ISideProject.SideProject = {
  id: 'pickpic',
  title: 'PickPic',
  titleImage: '/pickpic.png',
  contribute: [
    '- Vue.js 사용 프론트엔드 개발 및 팀장 역할 수행',
    '- 게시글 작성 페이지 개발',
    '- 게시글 페이지, 투표, 댓글 기능 개발',
  ],
  devDescription:
    '삼성청년소프트웨어아카데미(SSAFY)에서 공통 프로젝트로 진행한 프로젝트입니다.\n' +
    '사진을 촬영하거나 선택 시 어려움을 가진 사람들을 위한 웹 페이지로 게시글로 사진에 대한 고수들의 댓글 피드백 및 투표 기능을 제공합니다.\n' +
    '또한 사이트 내 사진 편집 기능도 제공하여 즉시 수정 업로드 할 수 있도록 도움을 줍니다.\n' +
    'Vue.js로 프론트엔드 개발을 하였으며, Java 및 Spring Boot로 Restful API를 구현하였습니다.',
  projectDescription: '',
  subtitle: '삼성청년 소프트웨어 아카데미 공통 프로젝트 (2021-01 ~ 2021-02)',
  technologyStack: [TechStack.Vue, TechStack.Java, TechStack.MyBatis, TechStack.Mysql, TechStack.SpringBoot],
  openSources: ['jodit', 'tiptap'],
  innerImages: ['/pickpicLogo.png', '/pickpic.png', '/pickpic2.png'],
  innerTitle: '사진을 공유하고 어떤 사진이 좋은지 투표받는 웹사이트 (프론트엔드 개발)',
  github: 'https://github.com/shim99887/PickPic',
}

const sideProject: ISideProject.Payload = {
  // list: [ssafyFirst, ssafySecond, ssafyThird, portfolio],
  list: [ssafyFirst, ssafySecond, ssafyThird],
  disable: false,
}

export default sideProject
