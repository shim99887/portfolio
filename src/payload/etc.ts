import { iEtc } from '../components/Etc/iEtc'

const indonesia: iEtc.Etc = {
  startedAt: '2024.09',
  endedAt: '2024.12',
  title: '인도네시아 해외 출장',
  description: '인도네시아 법인 봉제 MES 구축',
}

const opic: iEtc.Etc = {
  startedAt: '2024.03',
  title: 'Opic(영어)',
  description: 'Intermediate High 취득',
}

const ssafyReward: iEtc.Etc = {
  startedAt: '2021.04',
  title: 'ssafy 특화 프로젝트 우수상',
  description: '코로나 시국에 안전한 약속장소 찾아주는 웹 서비스',
}

export const etc: iEtc.Payload = {
  list: [indonesia, opic, ssafyReward],
}
