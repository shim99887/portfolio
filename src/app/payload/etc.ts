import { IEtc } from '@/app/components/common/IEtc'

const opic: IEtc.Etc = {
  title: 'Opic(영어)',
  subtitle: 'IH 취득',
  startedAt: '2024-03',
}

const military: IEtc.Etc = {
  title: '육군 병장 만기 전역',
  subtitle: '81mm 박격포병',
  startedAt: '2015-07',
  endedAt: '2017-04',
}

const ssafyAward: IEtc.Etc = {
  title: 'ssafy 특화 프로젝트 우수상',
  subtitle: '코로나 시국에 안전한 약속장소 찾아주는 웹 서비스',
  startedAt: '2021-04',
}

const etc: IEtc.Payload = {
  list: [opic, ssafyAward, military],
  disable: false,
}

export default etc
