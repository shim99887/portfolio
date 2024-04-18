import { ISideProjectDetail } from '@/app/components/common/ISideProjectDetail'
import { TechStack } from '@/app/components/common/TechStack'

const portfolio: ISideProjectDetail.Payload = {
  contribute: [
    'React, TypeScript로 포트폴리오 웹 페이지 제작',
    '필요한 컴포넌트를 공통 컴포넌트화 적용',
    'Recoil을 사용하여 모달 컴포넌트 상태 관리',
  ],
  devDescription:
    '처음 포트폴리오를 제작할 당시에는 하나하나 모든 요소를 제작하는 방향으로 개발이 진행되었습니다.' +
    '하지만 다른 선배 개발자분의 조언으로 공통 컴포넌트화를 시작 같은 요소를 사용하는 부분을 묶고 데이터 기반으',
  projectDescription: '',
  title: '포트폴리오',
  subTitle: '개인 포트폴리오 제작',
  technologyStack: [TechStack.React],
  id: 'portfolio',
}
